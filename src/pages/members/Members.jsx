import Header from '../../components/Header'
import Member from '../../components/Member'
import HeaderImage from '../../images/members_bg_header.jpg'
import {members} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'




import './members.css'

function Members() {
  return (
    <>
    <Header title="Our Team" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Header>
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

    </>
  )
}

export default Members