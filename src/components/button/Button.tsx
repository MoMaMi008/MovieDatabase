import { FC} from "react";
import "./Button.css";

interface ButtonProps {
    img_path?: string;
    text: string;
    onClick?: () => void; 
}

const Button: FC<ButtonProps> = ({ img_path, text, onClick }) => {

    return (
        <button className="button" onClick={onClick}>
            {img_path && <img src={img_path} alt="button symbol" className="button-icon" />}
            <p>{text}</p>
        </button>
    );
};

export default Button;
