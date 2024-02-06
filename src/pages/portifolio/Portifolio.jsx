import { useState } from 'react';
import SectionHead from '../../components/SectionHead'
import Header from '../../components/Header';
import HeaderImage from '../../images/portfolio.jpg'
import {FaCrown} from 'react-icons/fa'
import './portifolio.css';
import OfficeServices from '../../components/OfficeServices';
import Supplies from '../../components/Supplies';
import Food from '../../components/Food';
import Moringa from '../../components/Moringa';
import Janitorial from '../../components/Janitorial';
import Fumigation from '../../components/Fumigation';




const Portifolio = () => {

  const [activeSection, setActiveSection] = useState("all");

  const changeSection = (section) => {
    setActiveSection(section);
  };


  return (
   <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Header>
    <section className="portifolio">
        <div className="container portifolio__container">    
            <SectionHead icon={<FaCrown/>} title='Main Services' subtitle="What We Do Best" />
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
          <li>
            <button 
              onClick={() => changeSection("janitorial")}
              className={activeSection === "janitorial" ? "active" : "janitorial"}
                >
                  Janitorial
            </button>
          </li>
          <li>
            <button 
              onClick={() => changeSection("fumigation")}
              className={activeSection === "fumigation" ? "active" : "fumigation"}
                >
                  Fumigation
            </button>
          </li>
        </ul>
      </nav>

      {activeSection === "all" && (
        <>
          <OfficeServices />
          <Supplies />
          <Food />
          <Moringa />
          <Janitorial />
          <Fumigation />
        </>
      )}
      {activeSection === "services" && <OfficeServices />}
      {activeSection === "supplies" && <Supplies />}
      {activeSection === "food" && <Food />}
      {activeSection === "moringa" && <Moringa />}
      {activeSection === "janitorial" && <Janitorial />}
      {activeSection === "fumigation" && <Fumigation />}
    </div>
   </>
  )
}

export default Portifolio