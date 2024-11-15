import "./../Articles/_Articles.scss";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import Settings from "./../Settings/Settings";
import Cards from "./../Cards/Cards";
import Banner from "./../Banner/Banner";
import BackToTop from "./../BackToTop/BackToTop";

function Articles() {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <Footer />
      <Settings />
      <BackToTop />
    </>
  );
}

export default Articles;
