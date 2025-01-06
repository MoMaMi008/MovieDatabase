import SplashScreen from "../../components/splashScreen/SplashScreen";

import img from "../../assets/images/intro.png";
import Button from "../../components/button/Button";
import "./IntroApp.css";

const IntroApp = () => {
  return (
    <>
      {/* <SplashScreen /> */}
      <section className="intro">
        <div>
          <img src={img} alt="" />
        </div>
        <article>
          <h1>
            Enjoy Your Movie <br /> Watch Everywhere
          </h1>
          <p>
            Stream unlimited movies and TV shows on your phone,tablet, laptop,
            and TV.
          </p>
          <Button text="Get Started" />
        </article>
      </section>
    </>
  );
};

export default IntroApp;
