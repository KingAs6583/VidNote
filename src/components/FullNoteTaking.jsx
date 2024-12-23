import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

const FullNoteTaking = ({ videoId }) => {
  const [noteContent, setNoteContent] = useState('');

  // Handle note change
  const handleNoteChange = (value) => {
    setNoteContent(value);
  };


  // Function to save notes as a .txt file
  const saveAsTextFile = () => {
    const blob = new Blob([noteContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'notes.txt';
    link.click();
    window.URL.revokeObjectURL(url);
  };


  return (
    <div>
      {/* YouTube iframe */}
      <div className="iframe-container" style={{ width: '100%', height: '100%' }}>
        <iframe
          title="YouTube Video"
          width="100%"
          height="50%"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        />
      </div>

      {/* Open in a new tab button */}
      <div style={{ marginTop: '10px' }}>
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-primary">Open Video in New Tab</button>
        </a>
      </div>

      {/* Note-taking area */}
      <div style={{ marginTop: '20px' }}>
        <h3>Take Notes:</h3>
        <ReactQuill
          value={noteContent}
          onChange={handleNoteChange}
          theme="snow"
          placeholder="Write your notes here..."
          style={{ height: '200px', marginTop: '10px' }}
        />
      </div>
    </div>
  );
};

export default FullNoteTaking;
