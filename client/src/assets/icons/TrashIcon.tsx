import { FC } from 'react';
import { IconProps } from "../../types/commonTypes";

export const TrashIcon: FC<IconProps> = props => {
    const {
        className,
        color = '#313131',
        height = 24,
        width = 24,
        onClick
    } = props;

    return (
        <svg width={width} height={height}
             className={className}
             onClick={onClick}
             viewBox="0 0 24 24"
             fill={color}
             xmlns="http://www.w3.org/2000/svg">
            <path d="M3.74181 20.5545C4.94143 22 7.17414 22 11.6395 22H12.3607C16.8261 22 19.0589 22 20.2585 20.5545M3.74181 20.5545C2.54219 19.1091 2.95365 16.9146 3.77657 12.5257C4.36179 9.40452 4.65441 7.84393 5.7653 6.92196M3.74181 20.5545C3.74181 20.5545 3.74181 20.5545 3.74181 20.5545ZM20.2585 20.5545C21.4581 19.1091 21.0466 16.9146 20.2237 12.5257C19.6385 9.40452 19.3459 7.84393 18.235 6.92196M20.2585 20.5545C20.2585 20.5545 20.2585 20.5545 20.2585 20.5545ZM18.235 6.92196C17.1241 6 15.5363 6 12.3607 6H11.6395C8.46398 6 6.8762 6 5.7653 6.92196M18.235 6.92196C18.235 6.92196 18.235 6.92196 18.235 6.92196ZM5.7653 6.92196C5.7653 6.92196 5.7653 6.92196 5.7653 6.92196Z"
                  stroke={color} strokeWidth="1.5" />
            <path d="M14 12L10 16M9.99998 12L14 16"
                  stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6"
                  stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}