import "./../Footer/_Footer.scss";



let aminusClicks = 0;


function Aplus() {
    let root = document.documentElement; 
    let currentFontSize = window.getComputedStyle(root).fontSize;
    let newFontSize = parseFloat(currentFontSize) + 2; 
    root.style.fontSize = newFontSize + "px";
}

function Aminus() {
    let root = document.documentElement; 

    if (aminusClicks === 0) {
        root.style.fontSize = "16px";
    } else {
        let currentFontSize = window.getComputedStyle(root).fontSize;
        let newFontSize = parseFloat(currentFontSize) - 2; 

        
        if (newFontSize >= 10) {
            root.style.fontSize = newFontSize + "px";
        }
    }

    aminusClicks++;
}


function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="black-bg col-lg-5 col-md-12">
            <div className="footer__logo-section">
              <img
                className="footer__logo"
                src="./Assets/Grid_Logo.png"
                alt=""
              />

              <p className="footer__p footer__content__p">
                Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                augue.
              </p>

              <div className="social-icons">
                <span className="icon-Facebook"></span>
                <span className="icon-Twiiter"></span>
                <span className="icon-linkedin"></span>
              </div>

              <div className="input-group footer__input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subscribe For Newsletters"
                  aria-label="Subscribe For Newsletters"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn footer__logo-section__btn"
                  type="button"
                  id="button-addon2"
                >
                  Go {">"}
                </button>
              </div>

              <p className="footer__p footer__logo-section__bottom-p credits_hide">
                © 2022 GRID . All rights reserved.
              </p>
            </div>
          </div>
          <div className="grey-bg col-lg-7 col-md-12">
            <div className="row">
              <div className="footer__location-section col-lg-6 col-sm-6 col-xs-12">
                <ul className="grid-links">
                  <li>
                    <h2>GRID Links</h2>
                  </li>
                  <li>
                    <p className="footer__p">News & Highlights</p>
                  </li>
                  <li>
                    <p className="footer__p">Articles & Blogs</p>
                  </li>
                  <li>
                    <p className="footer__p">Media Library</p>
                  </li>
                  <li>
                    <p className="footer__p">Contact Us</p>
                  </li>
                  <li>
                    <p className="footer__p">Benefits</p>
                  </li>
                  <li>
                    <p className="footer__p">Faqs</p>
                  </li>
                  <li>
                    <p className="footer__p">Events</p>
                  </li>
                  <li>
                    <p className="footer__p">About Us</p>
                  </li>
                  <li>
                    <p className="footer__p">Eco-System</p>
                  </li>
                </ul>
              </div>
              <div className="footer__links-section col-lg-6 col-sm-6 col-xs-12">
                <div className="contact-us">
                  <ul className="contact-us">
                    <li>
                      <h2>Contact Us</h2>
                    </li>
                    <li>
                      <span className="icon-location_on"></span>
                      <p className="footer__p">Cairo - Downtown Street 23</p>
                    </li>

                    <li>
                      <span className="icon-local_phone"></span>
                      <p className="footer__p">+41 61 228 90 40</p>
                    </li>

                    <li>
                      <span className="icon-letter"></span>
                      <p className="footer__p">info@grid.com.eg</p>
                    </li>
                  </ul>
                </div>
                <div className="useful-links">
                  <ul className="useful-links">
                    <li>
                      <h2>Useful Links</h2>
                    </li>
                    <li>
                      <p className="footer__p">Terms & Conditions</p>
                    </li>
                    <li>
                      <p className="footer__p">Privacy Policy</p>
                    </li>
                  </ul>
                </div>

                <div className="icons">
                  <span
                    className="icon-A_plus"
                    id="aPlus"
                    onClick={Aplus}
                  ></span>
                  <span className="icon-A_minus" onClick={Aminus}></span>
                  <span className="icon-circle"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
