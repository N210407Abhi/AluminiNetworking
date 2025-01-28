import React from 'react'
import graduationImage from '../assets/graduationcermony.png' 
import teamMember1 from '../assets/teammember1.jpg' 
const MainBody = ({showLoginHandler}) => {
    const teamMembers = [
        { name: "John Doe", role: "President", image: teamMember1 },
        { name: "Jane Smith", role: "Vice President", image: teamMember1 },
        { name: "Mike Johnson", role: "Secretary", image: teamMember1 },
        { name: "Sarah Williams", role: "Treasurer", image: teamMember1 },
        { name: "Alex Brown", role: "Event Coordinator", image: teamMember1 }
      ];
    
    //   const partners = [
    //     { name: "Partner 1", logo: partner1 },
    //     { name: "Partner 2", logo: partner2 },
    //     { name: "Partner 3", logo: partner3 },
    //     { name: "Partner 4", logo: partner4 },
    //     { name: "Partner 5", logo: partner5 },
    //     { name: "Partner 6", logo: partner6 }
    //   ];
  return (
    <>
    <div className="home-container">
      <div className="content-wrapper">
        <div className="text-content">
          <h1>Welcome To<br />Alumni Association</h1>
          <p>
            We are a group of alumni who care deeply about our alma mater 
            and the role it plays in our lives. The society is committed to fostering 
            communication, friendship, and cooperation among its members, as 
            well as promoting the development of the university. We hope that 
            through our efforts, the university will become better and better, and 
            the alumni will become more and more united.
          </p>
          <div className="cta-buttons">
            <button className="donate-btn">Donate</button>
            <button className="login-btn"  onClick={showLoginHandler}>Log in</button>
          </div>
        </div>
        <div className="image-content">
          <img src={graduationImage} alt="Graduation celebration" />
        </div>
      </div>
    </div>
    <div className="second-section">
    <div className="about-section">
      <h2>About Us</h2>
      
      <div className="info-cards">
        <div className="info-card">
          <h3>Our Mission</h3>
          <div className="expandable-content">
            <p>To foster a strong alumni community that supports both current students and fellow alumni through mentorship, networking, and professional development opportunities.</p>
          </div>
        </div>

        <div className="info-card">
          <h3>Our Vision</h3>
          <div className="expandable-content">
            <p>To create a vibrant, engaged alumni network that contributes to the continued growth and success of our university and its graduates.</p>
          </div>
        </div>

        <div className="info-card">
          <h3>Our Purpose</h3>
          <div className="expandable-content">
            <p>To maintain and strengthen the connection between alumni and the university while promoting the welfare of both the institution and its graduates.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="team-section">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>

    {/* <div className="partners-section">
      <h2>Our Proud <span>Partners</span></h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-logo">
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </div> */}
  </div>
  </>
  )
} 
export default MainBody;