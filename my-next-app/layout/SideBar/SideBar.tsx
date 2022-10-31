import {SideBarProps} from "./SideBar.props";
import styles from "./SideBar.module.css";

export const SideBar = ({ ...props }: SideBarProps):JSX.Element => {
    return (
        < div {...props}>
            SideBar
        </div>
    )
};
