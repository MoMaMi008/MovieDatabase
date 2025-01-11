import React, { useEffect, useState } from "react";
import ArrowUp from "../../assets/SVG/Arrow-Up.svg";
import "./BackToTopButton.css";

interface BackToTopButtonProps {
    listRef: React.RefObject<HTMLDivElement>;
}

const BackToTopButton = React.forwardRef<HTMLButtonElement, BackToTopButtonProps>(({ listRef }, ref) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function toggleVisibility() {
        if (listRef.current) {
            if (listRef.current.scrollTop > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    }

    function backToTop() {
        if (listRef.current) {
            listRef.current.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }

    useEffect(() => {
        const list = listRef.current;
        if (list) {
            list.addEventListener("scroll", toggleVisibility);
            return () => {
                list.removeEventListener("scroll", toggleVisibility);
            };
        }
    }, [listRef]);

    return (
        isVisible && (
            <button className="backToTopButton" onClick={backToTop} ref={ref}>
                <img src={ArrowUp} alt="Arrow Icon" />
                <p>Back to Top</p>
                <img src={ArrowUp} alt="Arrow Icon" />
            </button>
        )
    );
});

export default BackToTopButton;
