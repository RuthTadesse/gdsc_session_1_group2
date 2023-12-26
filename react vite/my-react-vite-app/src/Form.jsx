import React, { useState } from 'react';

const Form = ({ onSaveNote }) => {
  const [main, setMain] = useState('');
  const [sub, setSub] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      main,
      sub,
      content,
    };

    onSaveNote(newNote);

    // Clear the form after saving
    setMain('');
    setSub('');
    setContent('');
  };

  return (
    <main>
      <form className="ttform" onSubmit={(e) => handleSubmit(e)}>
        <h2>Take notes</h2>
        <input
          type="text"
          placeholder="Main"
          value={main}
          onChange={(e) => setMain(e.target.value)}
        />
        <input
          type="text"
          placeholder="SubTopic"
          value={sub}
          onChange={(e) => setSub(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button type="submit">Save</button>
      </form>
    </main>
  );
};

export default Form;