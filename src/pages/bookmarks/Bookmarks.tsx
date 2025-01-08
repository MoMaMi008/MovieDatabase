import BookmarkIcon from "../../assets/SVG/BookmarkIcon";
import BookmarkList from "../../components/bookmarkList/BookmarkList";
import "./Bookmarks.css";
const Bookmarks = () => {
  return (
    <section className="bookmarks">
      <h1>Bookmarks</h1>
      <BookmarkList />
      <article className="no-bookmarks-box">
        <div className="bookmark-icon-box">
          <BookmarkIcon />
        </div>
        <p className="main-text">No movies found</p>
        <p className="sub-text">When you save a movie, it will appear here</p>
      </article>
    </section>
  );
};

export default Bookmarks;
