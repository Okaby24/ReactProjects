
import socialBanner from '../../assets/Social__banner.png'; // Import image from assets
import './../Social/_Social.scss';

function Social() {
  return (
    <section className="social" id="social">
      <div className="container-fluid">
        <div className="row p-0">
          <div className="col-lg-6 col-sm-12 p-0">
            <img className="social__img" src={socialBanner} alt="Social Banner" />
          </div>
          <div className="col-lg-6 col-sm-12 p-0">
            <div className="social__content">
              <p className="social__content__p1">ABOUT GRID</p>

              <h2 className="social__content__h2 mt-4">
                Enhanced social distancing measures
              </h2>

              <p className="social__content__p2">
                Whether you’re an established enterprise or a growing startup,
                discover flexible spaces and solutions to move your business
                forward.
              </p>

              <p className="social__content__p2">
                FinTech has recently become a promising and emerging industry
                across the globe that uses technology and innovation to broaden
                the frontiers of financial activities.
              </p>

              <button className="btn social__btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Social;
