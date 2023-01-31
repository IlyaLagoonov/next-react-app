import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import BurgerIcon from '../../helpers/icons/burger.svg';
import CloseIcon from '../../helpers/icons/closeIconButton.svg';
import UpIcon from '../../helpers/icons/upIcon.svg';

export const icons = {
   BurgerIcon,
    CloseIcon,
    UpIcon
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconName;
    appearance:'primary' | 'white';
}
