import {AdvantagesProps} from "./Advantages.props";
import styles from './Advantages.module.css';
import cn from 'classnames';
import {Card} from "../Card/Card";
import GreenIcon from '../../helpers/icons/okicon.svg';
import {TextBlock} from "../TextBlock/TextBlock";

export const Advantages = ({ advantages }:AdvantagesProps):JSX.Element => {
    return (
        <>
            {advantages.map(a => (
                <div key={a._id} className={styles.advantage}>
                    <GreenIcon/>
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.vline}  />
                    <div className={styles.description}>
                        {a.description}
                    </div>
                </div>


            ))}
        </>
    )
};
