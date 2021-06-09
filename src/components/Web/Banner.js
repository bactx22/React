const Banner = () => {
  return (
    <div>
      <div
        id="myCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ marginTop: "80px" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://theme.hstatic.net/1000404727/1000620507/14/ms_banner_img1.jpg?v=463"
              alt=""
              width="100%"
              height="100%"
            />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p>
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* <div className="carousel-item">
      <img src="https://2222shop.vn/wp-content/uploads/2020/10/banner-iphone-12-pro-max-2222shopvn1.jpg" alt="" width="100%" height="100%"/>
      <div className="container">
        <div className="carousel-caption">
          <h1>Another example headline.</h1>
          <p>Some representative placeholder content for the second slide of the carousel.</p>
          <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
        </div>
      </div>
    </div> */}
          <div className="carousel-item">
            <img
              src="http://file.hstatic.net/1000347078/collection/banner1200x628_da6204be987e4150912bc537f3a9d23b.jpg"
              alt=""
              width="100%"
              height="100%"
            />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>{" "}
      <img
        src="https://cdn.tgdd.vn/2021/06/banner/1200-60-1200x60-1.png"
        width="100%"
      />
    </div>
  );
};

export default Banner;
