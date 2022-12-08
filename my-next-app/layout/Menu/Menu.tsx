import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import styles from "./Menu.module.css";
import {FirstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
import CoursesIcon from './icons/coursesIcon.svg';
import BookIcon from './icons/bookIcon.svg';
import BoxIcon from './icons/boxIcon.svg';
import CloudIcon from './icons/cloudIcon.svg';
import { TopLevelCategory } from "../../interfaces/page.interface";
import cn from "classnames";


const firstLevelMenu: FirstLevelMenuItem[] = [
     { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
     { route: 'services', name: 'Сервисы', icon: <CloudIcon />, id: TopLevelCategory.Services },
     { route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
     { route: 'products', name: 'Продукты', icon: <BoxIcon />, id: TopLevelCategory.Products }
];

export const Menu = (): JSX.Element => {

     const { menu, setMenu, firstCategory } = useContext(AppContext);


     const buildFirstLevel = () => {
          return(
                         <>
     {
          firstLevelMenu.map(m => (
               <div key={m.route}>
                    <a href={`/${m.route}`}>
                         <div className={cn(styles.firstLevel, {
                              [styles.firstLevelActive]: m.id == firstCategory
                         })}>
                              {m.icon}
                              <span>{m.name}</span>
                         </div>
                    </a>
                    {m.id == firstCategory && buildSecondLevel(m)}
               </div>
          ))
     }
                    </>
                );
};

const buildSecondLevel = (menuItem:FirstLevelMenuItem) => {
     return(
          <div className={styles.secondBlock}>
{
     menu.map(m => (
          <div key={m._id.secondCategory}>
              <div className={styles.secondLevel}>{m._id.secondCategory}</div>
              <div className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]:m.isOpened
              })} >
                  {buildThirdLevel(m.pages,menuItem.route)}
              </div>
          </div>
     ))
}
          </div >
     );
};


const buildThirdLevel = (pages:PageItem[], route:string ) => {
    return (
             pages.map(p => (
                <a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel,{
                    [styles.thirdLevelActive]: false
                })}>
                    {p.category}
                </a>
            ))
    )
};

return (
     <div className={styles.menu}>
          {buildFirstLevel()}
     </div>
);
};
