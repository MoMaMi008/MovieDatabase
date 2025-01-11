import ArrowIcon from "../../assets/SVG/Frame.svg";

const BackToTopButton = () => {
    function backToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <button className="backToTopButton" onClick={backToTop}>
            <img src={ArrowIcon} alt="Arrow Icon" />
        </button>
    );
};

export default BackToTopButton;
