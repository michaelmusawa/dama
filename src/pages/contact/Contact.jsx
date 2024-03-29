import Header from '../../components/Header'
import HeaderImage from '../../images/contact.jpg';
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'



import './contact.css';




const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam commodi dolor eligendi numquam quis iusto?
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href='christinedama@gmail.com' 
            target='_blank'
            rel='noreferrer noopener'>
              <MdEmail/>
          </a>
          <a href='https://bioconopyltd' 
            target='_blank'
            rel='noreferrer noopener'>
              <BsMessenger/>
          </a>
          <a href='https://wa.me/+254715132510' 
            target='_blank'
            rel='noreferrer noopener'>
              <IoLogoWhatsapp/>
          </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact