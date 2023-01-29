import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import cn from "classnames";
import CloseIcon from '../../helpers/icons/closeIcon.svg';
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { TextArea } from "../TextArea/TextArea";
import { Button } from "../Button/Button";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";
import React from "react";

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit } = useForm<IReviewForm>();
    const onSubmit = (data: IReviewForm) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input  {...(register('UserName'))} placeholder='Имя' />
                <Input {...(register('CommentTitle'))} placeholder='Заголовок отзыва' className={styles.title} />
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller control={control} render={({ field }) => (<Rating isEditable rating={field.value} setRating={field.onChange} />)} name={'rating'} />
                </div>
                <TextArea {...(register('CommentDescription'))} className={styles.description} placeholder='Текст отзыва' />
                <div className={styles.submit}>
                    <Button className={styles.formButton} appearance='primary' type="submit">
                        Отправить
                    </Button>
                    <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            <div className={styles.success}>
                <span className={styles.successTitle}>Ваш отзыв отправлен</span>
                <span className={styles.successTitle}>Спасибо, ваш отзыв будет опубликован после проверки.</span>
                <CloseIcon className={styles.close} />
            </div>
        </form>
    );
};

