import React, { useState } from "react";
import { team, consultants } from "../../data/company";
import "./team.css";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const allStaff = [...team, ...consultants];

  return (
    <main className="team-container">
      <header className="team-header">
        <span className="team-subtitle">Meet the Experts</span>
        <h1 className="team-title">Our Leadership Team</h1>
        <p className="team-description">
          A group of dedicated professionals driving innovation and excellence across industries.
        </p>
      </header>

      <section className="team-grid">
        {allStaff.map((member, index) => (
          <article key={index} className="team-card">
            <div className="card-image-wrapper">
              <img
                src={member.image}
                alt={member.name}
                className="card-image"
              />
              <span className="card-badge">{member.role}</span>
            </div>

            <div className="card-content">
              <div className="card-meta">
                <h2 className="card-name">{member.name}</h2>
                {member.company && <p className="card-company">{member.company}</p>}
              </div>

              <p className="card-bio">{member.bio}</p>

              {member.specialties && (
                <div className="card-specialties">
                  {member.specialties.slice(0, 3).map((specialty, idx) => (
                    <span key={idx} className="specialty-tag">
                      {specialty}
                    </span>
                  ))}
                </div>
              )}

              <button
                className="card-action-btn"
                onClick={() => setSelectedMember(member)}
                aria-label={`View professional journey of ${member.name}`}
              >
                <span>View Full Journey</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-arrow">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Modern Dialog/Modal Overlay */}
      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setSelectedMember(null)}
              aria-label="Close modal"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="modal-layout">
              <div className="modal-hero">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="modal-image"
                />
                <div className="modal-hero-overlay"></div>
              </div>

              <div className="modal-body">
                <header className="modal-header">
                  <span className="modal-tag">{selectedMember.role}</span>
                  <h2 className="modal-name">{selectedMember.name}</h2>
                  {selectedMember.company && <p className="modal-subtext">{selectedMember.company}</p>}
                </header>

                <div className="modal-scroll-container">
                  <div className="modal-bio-section">
                    <h3 className="modal-section-title">Biography & Journey</h3>
                    <p className="modal-bio">
                      {selectedMember.about || selectedMember.bio}
                    </p>
                  </div>

                  {selectedMember.specialties && (
                    <div className="modal-spec-section">
                      <h3 className="modal-section-title">Core Focus areas</h3>
                      <div className="modal-specialties-tags">
                        {selectedMember.specialties.map((specialty, idx) => (
                          <span key={idx} className="modal-specialty-tag">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Team;