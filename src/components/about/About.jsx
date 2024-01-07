import React from "react";
import "./about.scss";
// import myImage from '../../assets/my-image2.jpg'
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
  return (
    <div className="About">
      <div className="container about__container">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src="/herorz.png" alt="Me" />  */}
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Associate Degree</h5>
              <small>
                {" "}
                Informatic Management <br />
                <i>Sriwijaya State Polytechnic.</i>
              </small>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5>Current GPA</h5>
              <small>3.68</small>
            </article>
            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>SKILL</h5>
              <small>
                Web Development, HTML, CSS, Javascript, PHP, CI, Laravel,
                Bootstrap, Tailwind, React JS Next.JS
              </small>
            </article>
          </div>
          <p>
            I'm a <b>Software Engineering Undergradute</b> at the University of
            Kelaniya. I'm an enthusiastic and driven Software Engineering
            student seeking a challenging internship opportunity to apply and
            expand my technical skills. With a strong academic foundation in
            software engineering and hands-on experience in various programming
            languages, I am eager to contribute to innovative projects and learn
            from experienced professionals in the industry. I am a quick learner
            who is always ready to face challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
