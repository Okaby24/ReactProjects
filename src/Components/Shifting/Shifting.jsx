import { useState } from 'react';
import "./../Shifting/_Shifting.scss";
//import shifting__320__img from "../../assets/shifting__320__img.png";


function Shifting() {
  // State to track font weight for the buttons
  const [isPreActive, setIsPreActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(false);

  // Handle "Next" button click
  const handleNextClick = () => {
    setIsPreActive(false);
    setIsNextActive(true);
  };

  // Handle "Prev" button click
  const handlePreClick = () => {
    setIsPreActive(true);
    setIsNextActive(false);
  };

  return (
    <section className="shifting">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 shifting__content">
            <div className="shifting-boxed__content">
              <h1 className="shifting__header">Shifting The Future</h1>

              <p className="shifting__paragraph">
                Whether you’re an established enterprise or a growing startup,
                discover flexible spaces and solutions to move your business
                forward.
              </p>

              <button className="btn shifting-btn">Discover More</button>

              <div className="pre-and-next">
                <div
                  className="pre"
                  style={{ fontWeight: isPreActive ? 'bold' : 'normal' }}
                >
                  <span className="icon-left-arrow"></span>
                  <p onClick={handlePreClick}>Prev</p>
                </div>
                <div
                  className="next"
                  style={{ fontWeight: isNextActive ? 'bold' : 'normal' }}
                >
                  <p onClick={handleNextClick}>Next</p>
                  <span className="icon-right-arrow"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 p-0 shifting__img">
            <div className="scroll-container">
              <div>
                <p className="scroll-text">Scroll Down</p>
                <p className="scroll-text1">to discover more</p>
              </div>
              <a href="#social">
                <div className="scroll-button">
                  <div className="scroll-dot"></div>
                </div>
              </a>
            </div>

            <img
              className="shifting__img__mobile"
              //src={shifting__320__img}
              alt="Shifting"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shifting;
