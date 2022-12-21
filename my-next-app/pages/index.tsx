import Head from 'next/head';
import Image from 'next/image';
import { Button, Heading, Rating, Tag } from "../components";
import { TextBlock } from "../components/TextBlock/TextBlock";
import { useState, useEffect } from "react";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";


function Home({ menu, firstCategory }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(1);

    return (
        <>
            <Rating rating={rating} isEditable={true} setRating={setRating} />
        </>
    );
}
export default withLayout(Home);

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
