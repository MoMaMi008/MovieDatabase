import { FC } from "react";
import "./Button.css";

interface ButtonProps {
    img_path?: string;
    text: string;
}

const Button: FC<ButtonProps> = ({ img_path, text }) => {
    return (
        <button className="button">
            {img_path && <img src={img_path} alt="button symbol" />}
            <p>{text}</p>
        </button>
    );
};

export default Button;
