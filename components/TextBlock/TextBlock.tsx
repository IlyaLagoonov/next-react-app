import { TextBlockProps } from "./TextBlock.props";
import styles from "./TextBlock.module.css";
import cn from 'classnames';

export const TextBlock = ({ TextSize = 'medium', children, className, ...props }: TextBlockProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: TextSize == 'small',
        [styles.medium]: TextSize == 'medium',
        [styles.large]: TextSize == 'large'
      })}
      {...props}
    >
      {children}
    </p>
  );
};
