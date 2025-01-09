import { useContext } from "react";
import BookmarkIcon from "../../assets/SVG/BookmarkIcon";
import BookmarkList from "../../components/bookmarkList/BookmarkList";
import Footer from "../../components/footer/Footer";
import "./Bookmarks.css";
import { BookmarksContext } from "../../context/Context";
const Bookmarks = () => {
  const { bookmarks } = useContext(BookmarksContext);
  return (
    <section className="bookmarks">
      <h1>Bookmarks</h1>

      {bookmarks.length !== 0 ? (
        <BookmarkList />
      ) : (
        <article className="no-bookmarks-box">
          <div className="bookmark-icon-box">
            <BookmarkIcon />
          </div>
          <p className="main-text">No movies found</p>
          <p className="sub-text">When you save a movie, it will appear here</p>
        </article>
      )}
      <Footer />
    </section>
  );
};

export default Bookmarks;
