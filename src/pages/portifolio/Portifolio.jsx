import { useState } from 'react';
import SectionHead from '../../components/SectionHead'
import Header from '../../components/Header';
import HeaderImage from '../../images/portfolio.jpg'
import {FaCrown} from 'react-icons/fa'
import './portifolio.css';




const Portifolio = () => {

  const [activeSection, setActiveSection] = useState("all");

  const changeSection = (section) => {
    setActiveSection(section);
  };


  return (
   <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et eveniet voluptas sequi aspernatur reiciendis. Voluptatibus minus nihil suscipit sunt.
    </Header>
    <section className="portifolio">
        <div className="container portifolio__container">    
                <SectionHead icon={FaCrown} title='Main Services'/>
        </div>
    </section>
    <div className="portifolio__wrapper">
    <nav id="nav">
        <ul>
          <li>
          <button
              onClick={() => changeSection("all")}
              className={activeSection === "all" ? "active" : "all"}
            >
              All
          </button>

          </li>
          <li>
            <button 
              onClick={() => changeSection("services")}
              className={activeSection === "services" ? "active" : "services"}
              >
                Services
              </button>
          </li>
          <li>
            <button 
              onClick={() => changeSection("supplies")}
              className={activeSection === "supplies" ? "active" : "supplies"}
              >
              Supplies
            </button>
          </li>
          <li>
            <button 
              onClick={() => changeSection("food")}
              className={activeSection === "food" ? "active" : "food"}
              >
                Food
            </button>
          </li>
          <li>
            <button 
              onClick={() => changeSection("moringa")}
              className={activeSection === "moringa" ? "active" : "moringa"}
                >
                  Moringa
            </button>
          </li>
        </ul>
      </nav>

      {activeSection === "all" && (
        <>
          <Services />
          <Supplies />
          <Food />
          <Moringa />
        </>
      )}
      {activeSection === "services" && <Services />}
      {activeSection === "supplies" && <Supplies />}
      {activeSection === "food" && <Food />}
      {activeSection === "moringa" && <Moringa />}
    </div>
   </>
  )
}

export default Portifolio