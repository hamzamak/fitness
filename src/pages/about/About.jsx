import './about.css'

import Header from '../../components/Header'
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpeg"
import MissionImage from "../../images/about3.webp"
const About = () => {
  return (
    <>
     <Header title="About Us" image={HeaderImage} >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptate accusantium sapiente aut in earum enim non dolore delectus? Minima.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>

          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae similique, voluptatum corrupti cupiditate quam exercitationem dolores ipsum possimus iusto aut quia excepturi neque molestiae quidem.</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero, quo expedita quam impedit modi ducimus voluptatibus? Ratione, voluptas quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, labore.

            </p>


          </div>
        </div>
      </section>


      <section className="about__Vision">
        <div className="container about__Vision-container">
         

          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae similique, voluptatum corrupti cupiditate quam exercitationem dolores ipsum possimus iusto aut quia excepturi neque molestiae quidem.</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero, quo expedita quam impedit modi ducimus voluptatibus? Ratione, voluptas quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, labore.

            </p>

            
          </div>

          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>

          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae similique, voluptatum corrupti cupiditate quam exercitationem dolores ipsum possimus iusto aut quia excepturi neque molestiae quidem.</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero, quo expedita quam impedit modi ducimus voluptatibus? Ratione, voluptas quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, labore.

            </p>


          </div>
        </div>
      </section>



    </>
  )
}

export default About