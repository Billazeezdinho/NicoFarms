import React, { useState } from "react";
import { team, consultants } from "../data/company";
import "./team.css";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const allStaff = [...team, ...consultants];

  return (
    <main className="nico-team-page">
      <header className="nico-team-header">
        <h1 className="nico-main-title">Our Expert Leadership</h1>
        <div className="nico-title-underline"></div>
      </header>

      <section className="nico-members-stack">
        {allStaff.map((member, index) => (
          <div key={index} className="nico-premium-card">
            <div className="nico-visual-frame">
              <div className="nico-image-box">
                <img src={member.image} alt={member.name} className="nico-member-img" />
              </div>
              <div className="nico-orange-frame-accent"></div>
            </div>

            <div className="nico-content-box">
              <span className="nico-role-badge">{member.role}</span>
              <h2 className="nico-member-name">{member.name}</h2>
              {member.company && <p className="nico-company-tag">{member.company}</p>}

              <div className="nico-main-details">
                <p className="nico-bio-text">{member.bio}</p>

                {member.specialties && (
                  <div className="nico-spec-section">
                    <h4>Core Expertise:</h4>
                    <ul className="nico-spec-grid">
                      {member.specialties.map((specialty, itemIndex) => (
                        <li key={itemIndex}>{"\u2713"} {specialty}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button className="nico-story-btn" onClick={() => setSelectedMember(member)}>
                View Professional Journey
              </button>
            </div>
          </div>
        ))}
      </section>

      {selectedMember && (
        <div className="nico-modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="nico-modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="nico-close-modal" onClick={() => setSelectedMember(null)}>
              &times;
            </button>

            <div className="nico-modal-media">
              <img src={selectedMember.image} alt={selectedMember.name} className="nico-modal-image" />
            </div>

            <div className="nico-modal-details">
              <span className="modal-label">The Story of</span>
              <h2 className="modal-title">{selectedMember.name}</h2>
              <p className="modal-role">{selectedMember.role}</p>
              {selectedMember.company && <p className="modal-company">{selectedMember.company}</p>}
              <div className="modal-scroll-area">
                <p className="modal-about-text">{selectedMember.about || selectedMember.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Team;
