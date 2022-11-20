import Head from 'next/head'
import Image from 'next/image'
import { useEffect} from "react";
import {withLayout} from "../../layout/Layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from "axios";
import {MenuItem} from "../../interfaces/menu.interface";
import {TopPageModel} from "../../interfaces/page.interface";
import {ParsedUrlQuery} from 'node:querystring';
import {ProductModel} from "../../interfaces/product.interface";
const firstCategory = 0;

function Course({ menu,page,products }:CourseProps ):JSX.Element {
    return (
        <>
            {products.length}
        </>
    );
}
export default withLayout (Course);

export const getStaticPath:GetStaticPaths = async () => {
    const { data:menu } = await axios.post<MenuItem[]>("https://courses-top.ru" + '/api/top-page/find', {
        firstCategory
    });
    return {
        paths:menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias )),
        fallback:true
    };
}

export const getStaticProps: GetStaticProps = async ({ params }:GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound:true
        };
    }

    const { data:menu } = await axios.post<MenuItem[]>("https://courses-top.ru" + '/api/top-page/find', {
        firstCategory
    });
    const { data:page } = await axios.get<TopPageModel[]>("https://courses-top.ru" + '/api/top-page/byAlias/' + params.alias);
    const { data:products } = await axios.post<ProductModel[]>("https://courses-top.ru" + '/api/product/find', {
        category:page.category,
        limit:10
    });
    return {
        props: {
            menu,
            firstCategory,
            page,
            products
        }
    };
};

interface CourseProps extends Record<string,unknown>{
    menu:MenuItem[];
    firstCategory: number;
    page:TopPageModel;
    products: ProductModel[];
}
