import { SideBarProps } from "./SideBar.props";
import styles from "./SideBar.module.css";
import { Menu } from "../Menu/Menu";
import {Search} from "../../components";

export const SideBar = ({ ...props }: SideBarProps): JSX.Element => {
    return (
        <div {...props}>
            <Search/>
            <Menu />
        </div>
    );
};
