import SectionHead from "./SectionHead"
import {FaCrown} from 'react-icons/fa'
import {members} from '../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Member from './Member'


const Home_members = () => {
  return (
    <section className="home_members">
        <div className="container home_members__container">    
                <SectionHead icon={<FaCrown/>} title='Members' subtitle="Meet Our Able Team"/>
        <div className="home_members__wrapper">
        <section className="members">
            <div className="container members__container">
                {
                members.map(({id, image, name, title, socials }) => {
                    return <Member key={id} image={image} name={name} title={title}
                            socials={
                            [
                                {icon:<BsInstagram/>, link: socials[0]},
                                {icon:<AiOutlineTwitter/>, link: socials[1]},
                                {icon:<FaFacebookF/>, link: socials[2]},
                                {icon:<FaLinkedin/>, link: socials[3]}
                            ]
                            }></Member>
                })
                }
            </div>
            </section>
        </div>
        </div>
    </section>
  )
}

export default Home_members