import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import cn from "classnames";
import CloseIcon from '../../helpers/icons/closeIcon.svg';
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { TextArea } from "../TextArea/TextArea";
import { Button } from "../Button/Button";
import { useForm, Controller } from "react-hook-form";
import {IReviewForm, IReviewSendResponse} from "./ReviewForm.interface";
import React, {useState} from "react";
import axios, {Axios, AxiosError} from "axios";
import {API} from "../../helpers/api";

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {

    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setIsError] = useState<string>();


    const onSubmit = async (FormData: IReviewForm) => {
        try {
            const { data } = await axios.post<IReviewSendResponse>(API.review.createDemo, {...FormData, productId});
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setIsError('Что-то пошло не так');
            }
        } catch (error) {
            const err = error as AxiosError
                setIsError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input
                    {...(register('UserName', {required: {value:true, message:'Заполните имя'}}))}
                    placeholder='Имя'
                    error={errors.UserName}
                />
                <Input
                    {...(register('CommentTitle', {required:{value:true, message:'Заполните заголовок'}}))}
                    placeholder='Заголовок отзыва'
                    error={errors.CommentTitle}
                    className={styles.title}
                />
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller
                        rules={{required:{value:true, message:'Укажите рейтинг'}}}
                        control={control} render={({ field }) =>
                        (<Rating isEditable rating={field.value}
                                 ref={field.ref}
                                 setRating={field.onChange}
                                 error={errors.rating}
                        />)}
                        name={'rating'}
                    />
                </div>
                <TextArea {...(register('CommentDescription', {required: {value:true, message:'Введите комментарий'}}))} className={styles.description} error={errors.CommentDescription}  placeholder='Текст отзыва' />
                <div className={styles.submit}>
                    <Button className={styles.formButton} appearance='primary' type="submit">
                        Отправить
                    </Button>
                    <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            {isSuccess && <div className={styles.success}>
                <span className={styles.successTitle}>Ваш отзыв отправлен</span>
                <span className={styles.successTitle}>Спасибо, ваш отзыв будет опубликован после проверки.</span>
                <CloseIcon className={styles.close}  onClick={()=> setIsSuccess(false)}/>
            </div>}
            {error && <div className={styles.error}>
                Что-то пошло не так, попробуйте обновить страницу.
                <CloseIcon className={styles.close} onClick={()=> setIsError(undefined)} />
            </div>}
        </form>
    );
};

