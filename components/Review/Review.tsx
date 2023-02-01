import { ReviewProps } from "./Review.props";
import styles from './Review.module.css';
import UserIcon from '../../helpers/icons/userIcon.svg';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Rating } from "../Rating/Rating";

export const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
    const { name, title, description, createdAt, rating } = review;
    return (
        <div className={styles.review}
            {...props}
        >
            <UserIcon className={styles.user} />
            <div>
                <span className={styles.name}>{name}: </span>&nbsp;&nbsp;
                <span>{title}</span>
            </div>
            <div className={styles.date}>
                {format(new Date(createdAt),
                    'dd MMMM yyyy', { locale: ru })}
            </div>
            <div>
                <Rating rating={rating} />
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    );
};
