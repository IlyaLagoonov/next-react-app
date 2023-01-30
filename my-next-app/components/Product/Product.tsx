import {ProductProps} from "./Product.props";
import styles from "./Product.module.css";
import cn from 'classnames';
import {Card} from "../Card/Card";
import {Rating} from "../Rating/Rating";
import {Tag} from "../Tag/Tag";
import {Button} from "../Button/Button";
import {declOfNum, priceRu} from "../../helpers/helpers";
import {Divider} from "../Divider/Divider";
import {Heading} from "../Heading/Heading";
import Image from 'next/image';
import {useRef, useState} from "react";
import {Review} from "../Review/Review";
import {ReviewForm} from "../ReviewForm/ReviewForm";

export const Product = ({product,className, ...props}:ProductProps):JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null)

    const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
    }
  return (
      <article className={className}{...props}>
      <Card className={styles.product} >
          <div className={styles.logo}>
              <Image
                  src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                  alt={product.title}
                  width={70}
                  height={70}
              />
          </div>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.price}>
              {priceRu(product.price)}
              {product.oldPrice && <Tag className={styles.oldPrice}  color="green"> {priceRu( product.price - product.oldPrice)}</Tag>}
          </div>
          <div className={styles.credit}>
              {priceRu(product.credit)}
              <span className={styles.month}>/месяц</span>
          </div>
          <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
          <div className={styles.tags}>{product.categories.map(c => <Tag className={styles.tag}  key={c}  color='ghost'> {c} </Tag>)}</div>
          <div className={styles.priceTitle}>Цена</div>
          <div className={styles.creditTitle}>Кредит</div>
          <div className={styles.rateTitle}><a href="#href" onClick={scrollToReview}> {product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a></div>
           <Divider className={styles.hr}/>
          <div className={styles.description}>{product.description}</div>
          <div className={styles.feature}>
              {product.characteristics &&  product.characteristics.map(c => (
                  <div className={styles.characteristics} key={c.name}>
                        <Heading tag='h4'>{c.name}</Heading>
                      <span className={styles.characteristicsDots}></span>
                      <span className={styles.characteristicsValue}>{c.value}</span>
                  </div>
              ))}
          </div>
          <div className={styles.advBlock}>
              {product.advantages &&   <div className={styles.advantages}>
                  <Heading tag='h4'>Преимущества</Heading>
                  <div>{product.advantages}</div>
              </div>}
              {product.disadvantages && <div className={styles.disadvantages}>
                  <Heading tag='h4'>Недостатки</Heading>
                  <div>{product.disadvantages}</div>
              </div>}
          </div>
          <Divider className={cn(styles.hr, styles.hr2)}/>
          <div className={styles.actions}>
              <Button  className={styles.reviewBtn}  appearance='primary'>Узнать подробнее</Button>
              <Button
                  onClick={()=> setIsReviewOpened(!isReviewOpened)}
                  appearance='ghost'
                  arrow={isReviewOpened ? 'down' : 'right' }
                 >
                  Читать отзывы
              </Button>
          </div>
      </Card>
          <Card color='blue' className={cn(styles.reviews, {
              [styles.opened]:isReviewOpened,
              [styles.closed]:!isReviewOpened,
          })} ref={reviewRef}>
              {product.reviews.map(r => (
                  <div  key={r._id}>
                  <Review review={r} />
                      <Divider/>
                  </div>
              ))}
              <ReviewForm productId={product._id}/>
          </Card>
    </article>
  )
};