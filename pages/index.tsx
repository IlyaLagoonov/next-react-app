import { Input, Rating, TextArea } from "../components";
import { useState } from "react";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";


function Home({ menu, firstCategory }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(1);

    return (
        <>
            <Rating rating={rating} isEditable={true} setRating={setRating} />
            <Input placeholder={'Имя'} />
            <Input placeholder={'Заголовок отзыва'} />
            <TextArea placeholder={'Текст отзыва'} />
        </>
    );
}
export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
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
