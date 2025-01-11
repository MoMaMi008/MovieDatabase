import React from "react";
import ArrowUp from "../../assets/SVG/Arrow-Up.svg";
import "./BackToTopButton.css";

interface BackToTopButtonProps {
    listRef: React.RefObject<HTMLDivElement>;
}

const BackToTopButton = React.forwardRef<HTMLButtonElement, BackToTopButtonProps>(({ listRef }, ref) => {
    const backToTop = () => {
        if (listRef.current) {
            listRef.current.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <button className="backToTopButton" onClick={backToTop} ref={ref}>
            <img src={ArrowUp} alt="Arrow Icon" />
            <p>Back to Top</p>
            <img src={ArrowUp} alt="Arrow Icon" />
        </button>
    );
});

export default BackToTopButton;
