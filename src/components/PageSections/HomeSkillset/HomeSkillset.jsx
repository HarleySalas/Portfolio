import React from "react";
import "./HomeSkillset.scss";

import FrontendIcon from "./assets/frontend-icon.svg";
import BackendIcon from "./assets/backend-icon.svg";
import MiscIcon from "./assets/more-icon.svg";

const HomeSkillset = () => {
  return (
    <section id="skillset" className="home-skillset">
      <div className="container home-skillset__container">
        <div className="home-skillset__title-wrapper">
          <div className="home-skillset__title-line"></div>
          <h2 className="home-skillset__title">Skillset</h2>
          <div className="home-skillset__title-line"></div>
        </div>
        <div className="home-skillset__card">
          <div className="home-skillset__card-top">
            <FrontendIcon className="home-skillset__card-icon" />
            <h3 className="home-skillset__card-title">Front end</h3>
          </div>
          <div className="home-skillset__card-bottom">
            <div className="home-skillset__card-bottom__inner">
              <div className="home-skillset__card-bottom__skill">HTML</div>
              <div className="home-skillset__card-bottom__skill">CSS/SCSS</div>
              <div className="home-skillset__card-bottom__skill">
                JavaScript
              </div>
              <div className="home-skillset__card-bottom__skill">React</div>
              <div className="home-skillset__card-bottom__skill">Redux</div>
              <div className="home-skillset__card-bottom__skill">Saga</div>
            </div>
          </div>
        </div>

        <div className="home-skillset__card">
          <div className="home-skillset__card-top">
            <BackendIcon className="home-skillset__card-icon" />
            <h3 className="home-skillset__card-title">Back end</h3>
          </div>
          <div className="home-skillset__card-bottom">
            <div className="home-skillset__card-bottom__inner">
              <div className="home-skillset__card-bottom__skill">Node.js</div>
              <div className="home-skillset__card-bottom__skill">Express</div>
              <div className="home-skillset__card-bottom__skill">
                PostgreSQL
              </div>
              <div className="home-skillset__card-bottom__skill">MongoDB</div>
              <div className="home-skillset__card-bottom__skill">Socket.io</div>
            </div>
          </div>
        </div>

        <div className="home-skillset__card">
          <div className="home-skillset__card-top">
            <MiscIcon className="home-skillset__card-icon" />
            <h3 className="home-skillset__card-title">More</h3>
          </div>
          <div className="home-skillset__card-bottom">
            <div className="home-skillset__card-bottom__inner">
              <div className="home-skillset__card-bottom__skill">Git</div>
              <div className="home-skillset__card-bottom__skill">Docker</div>
              <div className="home-skillset__card-bottom__skill">Linux</div>
              <div className="home-skillset__card-bottom__skill">
                Illustrator
              </div>
              <div className="home-skillset__card-bottom__skill">Photoshop</div>
              <div className="home-skillset__card-bottom__skill">
                After Effects
              </div>
            </div>
          </div>
        </div>
        <p className="home-skillset__comment">
          My skillset includes, but isn’t limited to the above technologies.
          These just happen to be the things I’m most proficient and passionate
          about. I have extensive experience in business management,
          manufacturing, digital marketing and team building. I believe this
          provides me with an edge to better understand client needs and provide
          outcomes that resonate with, or even surpass expectations.
        </p>
      </div>
    </section>
  );
};

export default HomeSkillset;
