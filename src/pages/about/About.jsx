import Header from '../../components/Header'
import HeaderImage from '../../images/about_hero.jpg'
import StoryImage from '../../images/company.jpg'
import VisionImage from '../../images/generalsupplies.jpg'
import MissionImage from '../../images/cleaning.jpg'
import './about.css';


const About =() => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et eveniet voluptas sequi aspernatur reiciendis. Voluptatibus minus nihil suscipit sunt.
    </Header>
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our story" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis iure nam sunt, nihil ea corporis eum similique ex assumenda nesciunt at odio quod maxime tempora accusamus a et architecto.
            Consectetur laboriosam eaque maiores ea neque voluptatem sapiente magnam eos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis iure nam sunt, nihil ea corporis eum similique ex assumenda nesciunt at odio quod maxime tempora accusamus a et architecto.
            Consectetur laboriosam eaque maiores ea neque voluptatem sapiente magnam eos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Illo, earum dolores. Earum rerum asperiores maxime!
          </p>

        </div>
      </div>
    </section>
    <section className="about__vision">
      <div className="container about__vision-container">
        
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis iure nam sunt, nihil ea corporis eum similique ex assumenda nesciunt at odio quod maxime tempora accusamus a et architecto.
            Consectetur laboriosam eaque maiores ea neque voluptatem sapiente magnam eos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis iure nam sunt, nihil ea corporis eum similique ex assumenda nesciunt at odio quod maxime tempora accusamus a et architecto.
            Consectetur laboriosam eaque maiores ea neque voluptatem sapiente magnam eos.
          </p>

        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our vision" />
        </div>
      </div>
    </section>
    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis iure nam sunt, nihil ea corporis eum similique ex assumenda nesciunt at odio quod maxime tempora accusamus a et architecto.
            Consectetur laboriosam eaque maiores ea neque voluptatem sapiente magnam eos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis iure nam sunt, nihil ea corporis eum similique ex assumenda nesciunt at odio quod maxime tempora accusamus a et architecto.
            Consectetur laboriosam eaque maiores ea neque voluptatem sapiente magnam eos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Illo, earum dolores. Earum rerum asperiores maxime!
          </p>

        </div>
      </div>
    </section>
    </>
  )
}

export default About