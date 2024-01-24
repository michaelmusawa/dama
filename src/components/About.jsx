import Image from '../images/about.png'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {about} from '../data'
import Card from '../UI/Card'


const About = () => {
  return (
    <section className="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__image">
            <img src={Image} alt="About"/>
          </div>
        </div>
        <div className="about__right">
          <SectionHead icon={<GiCutDiamond/>} title='About' />
          <p>
            I am a highly motivated and creative professional with over three years of experience in the field
            I am a highly motivated and creative individual with expertise in web development, 
          </p>
          <div className="about__wrapper">
            {
              about.map(({id, icon, title, desc}) =>{ 
              return <Card className="abouts__about">
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{desc}</small>
              </Card>})
            }
          </div>
    
        </div>
      </div>
    </section>
  )
}

export default About
