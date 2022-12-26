import {Advantages, Heading, HhData, Product, Sort, Tag} from "../../components";
import {TopPageComponentProps} from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import {TopLevelCategory} from "../../interfaces/page.interface";
import {SortEnum} from "../../components/Sort/Sort.props";
import {useReducer} from "react";
import {sortReducer} from "./sort.reducer";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    const [{products:sortedProducts, sort }, dispathSort] = useReducer(sortReducer, { products, sort:SortEnum.Rating });

    const setSort = (sort: SortEnum) => {
        dispathSort({type:sort});
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Heading tag='h1'>{page.title}</Heading>
                {products && <Tag color="grey" size="medium">{products.length}</Tag>}

                <Sort sort={sort} setSort={setSort}/>
            </div>
            <div>
                {sortedProducts && sortedProducts.map(p =>(<Product key={p._id} product={p}  />) ) }
            </div>
            <div className={styles.hhTitle}>
                <Heading tag='h2'>Вакансии - {page.category} </Heading>
                <Tag color='red' size='medium'>hh.ru </Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh  && <HhData {...page.hh} /> }
            {page.advantages && page.advantages.length > 0 &&
                <div>
              <Heading tag='h2'>
                    Преимущества
              </Heading>

                <Advantages advantages={page.advantages}/>
            </div>
            }
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html:page.seoText}} />}
            <Heading tag='h2'>Получаемые навыки</Heading>
            {page.tags.map(t=><Tag key={t} color='primary'> {t} </Tag>)}
        </div>
    );
};
