import { HeadingProps } from "./Heading.props";
import styles from "./Heading.module.css";

export const Heading = ({ tag, children, className }: HeadingProps): JSX.Element => {
    switch (tag) {
        case 'h1':
            return <h1 className={styles.h1}>{children}</h1>;
        case 'h2':
            return <h2 className={styles.h2}>{children}</h2>;
        case 'h3':
            return <h3 className={styles.h3}>{children}</h3>;
        case 'h4':
            return <h4 className={styles.h4}>{children}</h4>;

        default:
            return <></>;
    }
};
