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
          <SectionHead icon={<GiCutDiamond/>} title='About' subtitle="Our Story" />
          <p>
            Biocanopy Limited Company is a young company sprouting from the ground up, our team have enoupur experience and expertise the the main areas that we deal in.
             We believe in quality workmanship and strive to provide you with the best service possible.
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
