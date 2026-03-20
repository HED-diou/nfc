import React from 'react';
import { Mail, Phone, ExternalLink, Linkedin, Download } from 'lucide-react';
import { generateVCF } from '../utils/vcfGenerator';
import './ProfileCard.css';

const ProfileCard = ({ profile }) => {
  if (!profile) return <div className="profile-not-found">Profile not found</div>;

  return (
    <div className="profile-container" style={{ '--theme-primary': profile.theme.primary, '--theme-gradient': profile.theme.gradient, '--theme-shadow': profile.theme.shadow }}>
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-cover"></div>
          <div className="profile-avatar-container">
            <img src={profile.photoUrl} alt={`${profile.name} ${profile.lastName}`} className="profile-avatar" />
          </div>
        </div>
        
        <div className="profile-info">
          <h1 className="profile-name">{profile.name} {profile.lastName}</h1>
          <h2 className="profile-title">{profile.title}</h2>
          <p className="profile-bio">{profile.bio}</p>
          
          <div className="profile-contact-grid">
            <a href={`mailto:${profile.email}`} className="contact-item">
              <div className="icon-wrapper"><Mail size={20} /></div>
              <span>Email</span>
            </a>
            <a href={`tel:${profile.phone}`} className="contact-item">
              <div className="icon-wrapper"><Phone size={20} /></div>
              <span>Call</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="icon-wrapper"><Linkedin size={20} /></div>
              <span>LinkedIn</span>
            </a>
            <a href={profile.website} target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="icon-wrapper"><ExternalLink size={20} /></div>
              <span>ResearchGate</span>
            </a>
          </div>

          <button 
            className="add-contact-btn" 
            onClick={() => generateVCF(profile)}
          >
            <Download size={20} />
            <span>Save Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
