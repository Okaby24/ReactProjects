import "./../Banner/_Banner.scss";

import banner from "../../assets/banner-reactgrid.png";


function Banner(){
return(
    <div className="banner">
        <img src={banner} alt="" />

        <div className="banner__content">
            <h1>Articles</h1>
            <pre><a className="Home" href="/">Home</a>  /  <a className="Home" href="/articles">Articles</a></pre>

        </div>



    </div>

);
}
export default Banner;