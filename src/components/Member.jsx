
import Card from '../UI/Card'

const Member = ({image, name, title, socials }) => {
  return (
    <Card className='member'>
        <div className="member__img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{title}</p>
        <div className="member__socials">
            {
                socials.map(({icon, link}, index) => {
                    return <a key={index} href={link} target='_blank' rel='noreferrer noopener'>{icon}</a>
                })
            }
            
        </div>
    </Card>
  )
}

export default Member