import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ArticleBox from "../../ArticleBox/ArticleBox";

function HomePage() {
  return (
    <>
      <Header />
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
      </div>
      <ArticleBox />
      <Footer />
    </>
  );
}

export default HomePage;
