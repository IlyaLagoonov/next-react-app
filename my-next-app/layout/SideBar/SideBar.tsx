import { SideBarProps } from "./SideBar.props";
import styles from "./SideBar.module.css";
import { Menu } from "../Menu/Menu";

export const SideBar = ({ ...props }: SideBarProps): JSX.Element => {
    return (
        < div {...props}>
            <Menu />
        </div>
    );
};
