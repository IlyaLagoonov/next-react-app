import {ReactNode,DetailedHTMLProps,HTMLAttributes} from "react";

export interface TextBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement>{
    children: ReactNode;
    TextSize: 'small'|'medium'|'large';
}
