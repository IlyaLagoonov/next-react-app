import {SearchProps} from "./Search.props";
import styles from "./Search.module.css";
import SearchIcon from '../../helpers/icons/searchIcon.svg'
import cn from 'classnames';
import {Input} from "../Input/Input";
import {useState} from "react";
import {Button} from "../Button/Button";
import {useRouter} from "next/router";

export const Search = ({className, ...props}:SearchProps):JSX.Element => {
    const [search,setSearch] = useState('');
    const router = useRouter();

    const goToSearch = () => {
        router.push({
            pathname:'/search',
            query: {
                q:search
            }
        })
    }

    const handleKeyDown = (e:KeyboardEvent) => {
        if(e.key == 'Enter') {
            goToSearch()
        };
    };

  return (
    <div className={cn(className, styles.search)} {...props}>
        <Input
            className={styles.InputSearch}
            placeholder={'Поиск...'}
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            onKeyDown={handleKeyDown}

        />
        <Button
            appearance='primary'
            className={styles.button}
            onClick={goToSearch}
        >
            <SearchIcon/>
        </Button>
    </div>
  );
};
