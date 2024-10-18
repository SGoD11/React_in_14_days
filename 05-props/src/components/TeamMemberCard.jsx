import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/TeamMemberCard.css'; // Custom styles for professional look

function TeamMemberCard({ name, role, imageUrl, bio, socialLinks }) {
  return (
    <Card className="team-card shadow-lg">
      <Card.Img variant="top" src={imageUrl} alt={name} className="team-image" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{role}</Card.Subtitle>
        <Card.Text>{bio}</Card.Text>
        <div className="social-links">
          {socialLinks.map(link => (
            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className={`fab fa-${link.platform}`}></i>
            </a>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default TeamMemberCard;
