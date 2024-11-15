

import "./../Events/_Events.scss";
import latestCardImage from "./../../assets/latest_card1.png";

const Events = () => {

  return (
    <section className="events" id="events">
      <div className="container-fluid">
        <div className="row events__content">
          <div className="col-md-4 events__body">
            <p>MULTIOFFICE EVENTS</p>
            <h2>Read up on latest Events</h2>

            <button className="btn events__btn-left" >
              <span className="icon-left-arrow"></span>
            </button>
            <button className="btn events__btn-right">
              <span className="icon-right-arrow"></span>
            </button>

            <button className="btn btn-info events__btn-bottom">View All</button>
          </div>

          <div className="col-md-8 events__cards-wrapper d-flex">
            <div className="owl-events owl-carousel owl-theme">
              <div className="item">
                <div className="card events-first-card">
                  <img
                    src={latestCardImage}
                    className="card-img-top"
                    alt="Event card"
                  />
                  <div className="card-body">
                    <div className="events__card-top">
                      <span className="icon-calendar"></span>
                      <p className="events__card-top-p">
                        September 13, 2019 - August 2, 2021
                      </p>
                    </div>
                    <h4>David Droga Still Has Faith in Online Advertising</h4>
                    <p className="events__card-body__p">
                      READ MORE <span className="icon-right-long"></span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="card events-second-card">
                  <img
                    src={latestCardImage}
                    className="card-img-top"
                    alt="Event card"
                  />
                  <div className="card-body">
                    <div className="events__card-top">
                      <span className="icon-calendar"></span>
                      <p className="events__card-top-p">
                        September 13, 2019 - August 2, 2021
                      </p>
                    </div>
                    <h4>David Droga Still Has Faith in Online Advertising</h4>
                    <p className="events__card-body__p">
                      READ MORE <span className="icon-right-long"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn events__btn-left mobile-nav-btns" >
              <span className="icon-left-arrow"></span>
            </button>
            <button className="btn events__btn-right mobile-nav-btns">
              <span className="icon-right-arrow"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
