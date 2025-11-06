// components/Button.tsx
import React from "react";
import type {ButtonProps} from "./ButtonType";

const Button:React.FC<ButtonProps> = ({label,onClick,disabled = false, className}) => {
    return(
        <button onClick={onClick} disabled = {disabled} className={className}>
            {label}
        </button>
    );
}

export default Button;