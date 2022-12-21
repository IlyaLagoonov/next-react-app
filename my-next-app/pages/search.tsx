import { withLayout } from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";


function Search(): JSX.Element {

    return (
        <>
          поиск
        </>
    );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>("https://courses-top.ru" + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
