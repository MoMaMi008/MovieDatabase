import SplashScreen from "../../components/splashScreen/SplashScreen";
import img from "../../assets/images/intro.png";
import Button from "../../components/button/Button";
import "./IntroApp.css";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const IntroApp = () => {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showIntro && (
                <motion.div className="splashScreen" initial={{ scale: 1, opacity: 1 }} animate={{ scale: 4, opacity: 0 }} transition={{ delay: 1, duration: 2, ease: "easeInOut" }}>
                    <SplashScreen />
                </motion.div>
            )}
            <main className="intro">
                <div>
                    <img src={img} alt="" />
                </div>
                <article>
                    <h1>
                        Enjoy Your Movie <br /> Watch Everywhere
                    </h1>
                    <p>Stream unlimited movies and TV shows on your phone,tablet, laptop, and TV.</p>
                    <Button text="Get Started" link_path="/home" />
                </article>
            </main>
            <div className="test"></div>
        </>
    );
};

export default IntroApp;
