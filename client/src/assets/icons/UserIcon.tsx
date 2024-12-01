import {FC} from 'react';

interface IconProps {
    width?: number | string;
    height?: number | string;
    color?: string;
    className?: string;
    onClick?: () => void;
}

export const UserIcon: FC<IconProps> = props => {
    const {
        className,
        color = '#ffffff',
        height = 24,
        width = 24,
        onClick
    } = props;

    return (
        <svg width={width} height={height}
             className={className}
             onClick={onClick}
             viewBox="0 0 24 24"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="9" r="3" stroke={color} strokeWidth="1.5"/>
            <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5"/>
            <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    );
}