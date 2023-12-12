import React from 'react';

function Grpmembers() {
  const Students = [
    "Nathan Israel",
    "Natinael Wondimagegnehu ",
    "Olbia Letta ",
    "Temesgen Getye",
    "Osman Hassan",
    "Rahel Belay",
    "Rediet Belay",
    "Robel Teshome",
    "Ruth Tadesse",
    "Ruth Zenabu",
    "Salahuddin Hafiz",
    "Salem Habte",
    "samual keleb",
    "Seid Yesuf ",
    "solomon sheleme",
    "surafel nigusie",
  ];

  const Studentsmap = Students.map(function (name, index) {
    return (
      <p key={index}>
        student {index + 1} {name}
      </p>
    );
  });

  return (
    <div className="stud">{Studentsmap}</div>
  );
}

export default Grpmembers;
