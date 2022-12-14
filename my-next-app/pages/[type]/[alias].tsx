import { withLayout } from "../../layout/Layout";
import { GetStaticPropsContext, GetStaticPaths } from "next";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.interface";
import { TopLevelCategory, TopPageModel } from "../../interfaces/page.interface";
import { ParsedUrlQuery } from 'node:querystring';
import { ProductModel } from "../../interfaces/product.interface";
import { firstLevelMenu } from "../../helpers/helpers";
import { TopPageComponent } from "../../page-components";


function TopPage({ firstCategory, page, products }: TopPageProps): JSX.Element {
    return <TopPageComponent
        firstCategory={firstCategory}
        page={page}
        products={products}
    />;
}
export default withLayout(TopPage);

export async function getStaticPaths() {
    let paths: string[] = [];
    for (const m of firstLevelMenu) {
        const { data: menu } = await axios.post<MenuItem[]>("https://courses-top.ru" + '/api/top-page/find', {
            firstCategory: m.id
        });
        paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
    }
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }: GetStaticPropsContext<ParsedUrlQuery>) {
    if (!params) {
        return {
            notFound: true
        };
    }

    const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
    if (!firstCategoryItem) {
        return {
            notFound: true
        };
    }

    try {

        const { data: menu } = await axios.post<MenuItem[]>("https://courses-top.ru" + '/api/top-page/find', {
            firstCategory: firstCategoryItem.id
        });
        if (menu.length == 0) {
            return {
                notFound: true
            };
        }
        const { data: page } = await axios.get<TopPageModel>("https://courses-top.ru" + '/api/top-page/byAlias/' + params.alias);
        const { data: products } = await axios.post<ProductModel[]>("https://courses-top.ru" + '/api/product/find/', {
            category: page.category,
            limit: 10
        });

        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
                page,
                products
            }
        };
    } catch {
        return {
            notFound: true
        };
    }

}


interface TopPageProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}
