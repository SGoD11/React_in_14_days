import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import '../styles/TeamMemberList.css';  // Custom styles for masonry layout

function TeamMemberList() {
  const teamMembers = [
    {
      id: 1,
      name: 'Alice',
      role: 'Frontend Developer',
      imageUrl: 'https://via.placeholder.com/150',
      bio: 'Alice is a highly skilled frontend developer with 5 years of experience.',
      socialLinks: [
        { platform: 'linkedin', url: 'https://linkedin.com/in/alice' },
        { platform: 'github', url: 'https://github.com/alice' }
      ]
    },
    {
      id: 2,
      name: 'Bob',
      role: 'UI/UX Designer',
      imageUrl: 'https://via.placeholder.com/150',
      bio: 'Bob specializes in creating user-friendly and visually appealing designs.',
      socialLinks: [
        { platform: 'linkedin', url: 'https://linkedin.com/in/bob' },
        { platform: 'dribbble', url: 'https://dribbble.com/bob' }
      ]
    },
    {
      id: 3,
      name: 'Charlie',
      role: 'Project Manager',
      imageUrl: 'https://via.placeholder.com/150',
      bio: 'Charlie has led teams on successful projects across various industries.',
      socialLinks: [
        { platform: 'linkedin', url: 'https://linkedin.com/in/charlie' }
      ]
    },
    // More team members...
  ];

  return (
    <div className="masonry-grid">
      {teamMembers.map(member => (
        <div className="masonry-grid-item" key={member.id}>
          <TeamMemberCard
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
            bio={member.bio}
            socialLinks={member.socialLinks}
          />
        </div>
      ))}
    </div>
  );
}

export default TeamMemberList;
