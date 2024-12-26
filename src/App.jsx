import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import CodeEditor from './components/CodeEditor'
import YoutubeContainer from './components/YoutubeContainer'
import AddVideoLink from './components/AddVideoLink';
import Controller from './components/Controller';
import NoteTakingComponent from './components/NoteTakingComponent';
import { fileExtensions } from './assets/FileExtentionObject';
import { useState, useEffect } from 'react';

function App() {

  {/*  dQw4w9WgXcQ*/ }
  const [videoLink, setVideoLink] = useState('yWF2jOb7gYA?list=PLGf6Ram2AQh2GpckMjstVH6AaTm0kPfgI');
  const [editor, setEditor] = useState('Normal');
  const [noteContent, setNoteContent] = useState('');
  const [lang, setLang] = useState('javascript');
  const [code, setCode] = useState('// Start typing your code here');
  const [isChecked, setIsChecked] = useState(false);

  // Toggle theme based on switch state
  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
  };

  // Apply theme on component mount and switch change
  useEffect(() => {
    document.body.className = isChecked ? 'dark' : 'light';
  }, [isChecked]);

  useEffect(() => {
    setVideoIdFromUrl();
  },[]);

  // Function to save notes as a .txt file
  const saveNoteContent = () => {
    const blob = new Blob([editor.toLowerCase() === "normal" ?
      noteContent : code], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = editor.toLowerCase() === "normal" ? 'notes.md' : 'notes.' + fileExtensions[lang];
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const setVideoIdFromUrl = () => {
    const queryString = window.location.search;
    // Create a URLSearchParams object
    const params = new URLSearchParams(queryString);
    // Retrieve a specific parameter by its name
    const paramValue = params.get('videolink');
    setVideoLink(!paramValue? videoLink : paramValue);
  };

  return (
    <div className="App">
      <p style={{ margin: "auto", textAlign: "center" }}>YouTube Video and Notes</p>
      <AddVideoLink setLink={setVideoLink} />
      <YoutubeContainer videoLink={videoLink} />
      <Controller videoLink={videoLink} onDropDownSelect={setEditor}
        onSave={saveNoteContent} setLang={setLang} selectedLang={lang}
        isChecked={isChecked} onToggle={handleToggle} />
      {editor.toLowerCase() === "normal" ?
        <NoteTakingComponent noteContent={noteContent} setNoteContent={setNoteContent} />
        :
        <CodeEditor code={code} setCode={setCode} language={lang} isDarkModeOn={isChecked} />}
    </div>
  )
}

export default App
