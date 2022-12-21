import CoursesIcon from './icons/coursesIcon.svg';
import BookIcon from './icons/bookIcon.svg';
import BoxIcon from './icons/boxIcon.svg';
import CloudIcon from './icons/cloudIcon.svg';
import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import {TopLevelCategory} from "../interfaces/page.interface";


export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <CloudIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <BoxIcon />, id: TopLevelCategory.Products }
];
