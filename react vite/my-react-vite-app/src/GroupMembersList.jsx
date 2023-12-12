import React from 'react';

function GroupMembersList({ members }) {
  return (
    <div>
      {members.map((member, index) => (
        <p key={index}>{member.name}</p>
      ))}
    </div>
  );
}

export default GroupMembersList;
