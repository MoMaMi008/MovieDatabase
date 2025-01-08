import { FC } from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  img_path?: string;
  text: string;
  link_path: string;
}

const Button: FC<ButtonProps> = ({ img_path, text, link_path }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(link_path);
  }

  return (
    <button className="button" onClick={handleClick}>
      {img_path && <img src={img_path} alt="button symbol" />}
      <p>{text}</p>
    </button>
  );
};

export default Button;
