import React,{Fragment} from 'react';

import Search from '../../containers/Search';

import './TopSection.css';

function TopSection({ backgroundImageUrl }) {
  return (
      <Fragment>
        <header className="head">

          <div className="top-section__background-image">
            <img src={backgroundImageUrl} alt="back" />
          </div>
          <section className="form">

            <h1 className="top-section__title">The world's first inclusive
              <br />
              free stock photo & video library
            </h1>
            <div className="search-bar">
            <Search className="top-section__search" />
            </div>
              <div className="foot">
                  <div className="author"></div>
                  <div className="author">
                      <a href="https://www.pexels.com/photo/man-love-people-woman-4611687/">Photo By Anna Shvets
                      </a>
                  </div>
              </div>
          </section>
        </header>

        <div className="menu-line">
          <a href="home">Home</a>
        </div>
      </Fragment>

  );
}

export default TopSection;
