import Head from 'next/head'
import Image from 'next/image'
import {Button, Htag} from "../components";


export default function Home():JSX.Element {
  return (
      <>
          <Htag tag='h1'>Главный тут тег</Htag>
          <Button appearance={'primary'}>
              Кнопуска
        </Button>

          <Button appearance={'ghost'} >
              Кнопуска вторая(проверочная)
          </Button>
      </>


  );
}
