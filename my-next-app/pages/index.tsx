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
            <Heading tag={"h1"} children={"Привет, Андрей!"} />

            <Button appearance={'primary'} arrow={'right'} children={'кнопка'} />
            <Button appearance={'ghost'} arrow={'right'} children={'кнопка2'} />
            <TextBlock TextSize={'small'}>
                текст сайс s
            </TextBlock>

            <TextBlock TextSize={'medium'}>
                текст сайс m
            </TextBlock>

            <TextBlock TextSize={'large'}>
                текст сайс l
            </TextBlock>

            <Tag size={'small'}>
                Малой
            </Tag>

            <Tag size={'medium'} color='red'>
                красный
            </Tag>

            <Tag size={'medium'} color='green'>
                зеленый
            </Tag>

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
