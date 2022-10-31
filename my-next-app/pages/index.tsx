import Head from 'next/head'
import Image from 'next/image'
import {Button, Heading, Rating, Tag} from "../components";
import {TextBlock} from "../components/TextBlock/TextBlock";
import {useState, useEffect} from "react";
import {withLayout} from "../layout/Layout";


 function Home():JSX.Element {
    const [rating, setRating] = useState<number>(1);

  return (
      <>
          <Heading tag={"h1"} children={"Привет, Андрей!"}/>

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
export default withLayout (Home);
