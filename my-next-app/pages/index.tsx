import Head from 'next/head'
import Image from 'next/image'
import {Button, Heading, Rating, Tag} from "../components";
import {TextBlock} from "../components/TextBlock/TextBlock";
import {useState, useEffect} from "react";


export default function Home():JSX.Element {
    const [rating, setRating] = useState<number>(1);

  return (
      <>
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
              красный медиум
          </Tag>

          <Tag size={'medium'} color='green'>
              зеленый медиум
          </Tag>

            <Rating rating={rating} isEditable={true} setRating={setRating} />
      </>
  );
}
