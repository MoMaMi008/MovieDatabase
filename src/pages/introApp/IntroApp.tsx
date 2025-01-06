import useFetch from "../../hooks/useFetch";
import { getTrendingUrl, OPTIONS } from "../../utils/api/Api";

const IntroApp = () => {
    const IntroData = useFetch(getTrendingUrl("en-US"), OPTIONS);

    console.log("Data", IntroData);

    return <></>;
};

export default IntroApp;
