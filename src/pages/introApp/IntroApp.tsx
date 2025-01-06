import useFetch from "../../hooks/useFetch";
import { getTrendingMoviesUrl, OPTIONS } from "../../utils/api/Api";

const IntroApp = () => {
    const IntroData = useFetch(getTrendingMoviesUrl("en-US"), OPTIONS);

    console.log("Data", IntroData);

    return <></>;
};

export default IntroApp;
