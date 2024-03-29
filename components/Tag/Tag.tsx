import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({ size = "medium", children, color = 'ghost', href, className, ...props }: TagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.small]: size == 'small',
                [styles.medium]: size == 'medium',
                [styles.ghost]: color == 'ghost',
                [styles.red]: color == 'red',
                [styles.grey]: color == 'grey',
                [styles.green]: color == 'green',
                [styles.primary]: color == 'primary',
            })}
            {...props}
        > {
                href
                    ? <a>{children}</a>
                    : <>{children}</>
            }
        </div>
    );
};
