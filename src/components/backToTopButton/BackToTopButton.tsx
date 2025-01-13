import React, { useEffect, useState } from "react";
import ArrowUp from "../../assets/SVG/Arrow-Up.svg";
import { motion } from "motion/react";
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
        <motion.div initial={{ height: 0 }} animate={{ height: isVisible ? "fit-content" : 0, visibility: isVisible ? "visible" : "hidden" }} exit={{ height: 0 }} transition={{ duration: 0.2 }} className="back">
            <motion.button ref={ref} className="backToTopButton" onClick={backToTop} style={{ padding: isVisible ? "5px 10px" : 0 }} initial={{ height: 0 }} animate={{ height: isVisible ? "100%" : 0 }} transition={{ duration: 0.2 }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: isVisible ? "100%" : 0 }} transition={{ duration: 0 }}>
                    <img src={ArrowUp} alt="Arrow Icon" />
                    <p>Back to Top</p>
                    <img src={ArrowUp} alt="Arrow Icon" />
                </motion.div>
            </motion.button>
        </motion.div>
    );
});

export default BackToTopButton;
