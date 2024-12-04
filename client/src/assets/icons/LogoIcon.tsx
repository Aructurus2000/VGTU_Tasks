import {FC} from 'react';
import { IconProps } from "../../types/commonTypes";

export const LogoIcon: FC<IconProps> = props => {
    const {
        className,
        color = '#ffffff',
        height = 40,
        width = 40,
        onClick
    } = props;

    return (
        <svg width={width} height={height}
             className={className}
             onClick={onClick}
             viewBox="0 0 24 24"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M4 17H8M12 17H20M4 12H20M4 7H12M16 7H20" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}