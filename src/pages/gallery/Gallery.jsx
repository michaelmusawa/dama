import './gallery.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/contact.jpg'

const Gallery = () => {

    const galleryLength = 15;
    const images = [];

    for(let i = 1; i <= galleryLength; i++) {
        images.push(require(`../../images/gallery${i}.jpg`))
      }
  return (
    <>
        <Header title="Our Gallery" image={HeaderImage}>
            Here are some of our works in action
        </Header>
        <section className='gallery'>
          <div className='container gallery__container'>
            {
              images.map((image, index) => {
                return <article key={index}>
                  <img src={image} alt={`Gallery ${index + 1}`} />
                </article>
              })        
            }
          </div>
        </section>
    </>
  )
}

export default Gallery