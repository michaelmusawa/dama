import SectionHead from './SectionHead'
import {FaCrown} from 'react-icons/fa'

const OfficeServices = () => {
  return (
    <div className="office_services">
      <SectionHead title="Office Services" icon={<FaCrown/>} subtitle="What we offer for Offices"/>
      <div className="container office_services_wrapper">
        <div className="office_services_left-container">
          <div className="image_wrapper">
            <img src="#" alt="" />
            <img src="#" alt="" />
          </div>
        </div>

        <div className="office_services_right-container">

          <h4> Scanning Services</h4>
          <p>Many organizations have mountains of paper and boxes in their back office for regulatory compliance. Scanning services provides a cost-effective approach to reducing the number of documents in your office. 

            Why are paper documents a problem?  

            Going through filing cabinets to retrieve documents takes valuable time.  
            Boxes of paper take up valuable office space.  
            Offices experience downtime when searching for documents. 
            Security is a concern with only a key to lock away paper documents.</p>

          <h4>Printer Fleet Management </h4>
          <p>Printer fleet management means your employees aren't clearing jams, refilling paper or replacing toner. Instead, a person is on-site maintaining any and all print devices. They’re the first call for support. That person is trained on how to fix the little issues that arise and place service calls as needed. This means true proactive support, cleaning the device on schedule and stocking paper before it runs out. </p>

          <h4>Receptionist </h4>
          <p>This can mean filling in for receptionists during breaks or away time. Office services also involve conference room management where someone is dedicated to setting up audio/visual equipment and drinks, and making sure the space is clean before and after meetings. Office services can also mean shipping and receiving for your mail room.  </p>
        </div>
      </div>
    </div>
  )
}

export default OfficeServices