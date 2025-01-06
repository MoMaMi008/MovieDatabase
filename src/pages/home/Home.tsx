import GenreSlider from "../../components/genreSlider/GenreSlider";
import Searchbar from "../../components/searchbar/Searchbar";
import TrendingSection from "../../components/trendingSection/TrendingSection";

const Home = () => {
  return (
    <section>
      <h1>Welcome!</h1>
      <div>
        <Searchbar />
        <GenreSlider />
      </div>
      <TrendingSection />
    </section>
  );
};

export default Home;
