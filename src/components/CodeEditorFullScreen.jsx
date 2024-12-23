import React, { useState, useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';

const CodeEditorFullScreen = () => {
  // Initial language and code setup
  const [language, setLanguage] = useState('java');

  const [code, setCode] = useState('// Start typing your code here');

  useEffect(() => {
    // Dynamically resize the editor on window resize
    const handleResize = () => {
      setEditorSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Initial resize
    handleResize();

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [editorSize, setEditorSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

   // Handle language change
   const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  // Handle code change
  const handleCodeChange = (value) => {
    setCode(value);
  };

   // List of languages Monaco supports
   const languages = [
    'javascript', 'typescript', 'html', 'css', 'json', 'python', 'go', 'java',
    'csharp', 'cpp', 'ruby', 'php', 'sql', 'markdown', 'yaml', 'dockerfile',
    'bash', 'swift', 'objective-c', 'rust', 'kotlin', 'lua', 'haskell'
  ];
  
  return (
    <div style={{ height: '100vh', width: '100vw', margin: 0, padding: 0 }}>
      <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}>
        {/* Dropdown to select language */}
        <select value={language} onChange={handleLanguageChange} style={{ padding: '8px', fontSize: '14px' }}>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <MonacoEditor
        height={`${editorSize.height}px`} // Make editor height equal to the window height
        width={`${editorSize.width}px`}  // Make editor width equal to the window width
        language={language}
        value={code}
        onChange={handleCodeChange}
        theme="vs-dark"
        options={{
          selectOnLineNumbers: true,
          suggestOnTriggerCharacters: true,
          quickSuggestions: true, // Enable suggestions while typing
        }}
      />
    </div>
  );
};

export default CodeEditorFullScreen;
