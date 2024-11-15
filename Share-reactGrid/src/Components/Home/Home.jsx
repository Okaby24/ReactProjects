import "./../Home/_Home.scss";
import Navbar from "../Navbar/Navbar";
import Latest from "../Latest/Latest";
import Footer from "../Footer/Footer";
import Shifting from "../Shifting/Shifting";
import Social from "../Social/Social";
import Member from "../Member/Member";

function Home() {
  return (
    <>
      <Navbar />
      <Shifting />
      <Social />
      <Latest />
      <Member />
      <Footer />
    </>
  );
}
export default Home;
