/* eslint-disable react/no-unescaped-entities */
import Header from "./component/Header";
import "./styles/index.scss";

const App = () => {
  return (
    <div id="home">
      <div className="home">
        {/* HERO */}
        <div className="home-hero">
          <div className="home-hero_inner container">
            <Header />
            <div className="text-content">
              <div className="text-content_inner">
                <h1>John Wick 3 : Parabellum</h1>
                <div className="hero-rating">
                  <div className="imdb">
                    <img src="/src/assets/imdb.svg" alt="imdb icon" />
                    <span>86.0 / 100</span>
                  </div>

                  <div className="tomatoes">
                    <img
                      src="/src/assets/rotten_tomatoes.svg"
                      alt="imdb icon"
                    />{" "}
                    <span>97%</span>
                  </div>
                </div>

                <p>
                  John Wick is on the run after killing a member of the
                  international assassins' guild, and with a $14 million price
                  tag on his head, he is the target of hit men and women
                  everywhere.
                </p>

                <button className="btn btn-rose">
                  <img src="/src/assets/Play.svg" alt="play" /> Watch trailer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURED MOVIES */}
        <div className="home-featured-movies container">
          <h1>Featured Movie</h1>

          <div className="grid">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
        <div className="home-new-arrival">First section</div>
        <div className="home-exclusive-movies">First section</div>
        <div className="home-cast">First section</div>
      </div>
    </div>
  );
};

export default App;
