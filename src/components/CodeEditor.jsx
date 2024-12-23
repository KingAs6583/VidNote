import MonacoEditor from '@monaco-editor/react';

const CodeEditor = ({ code, setCode, language, isDarkModeOn }) => {

  // Handle code change (for saving or sending to a server)
  const handleCodeChange = (value) => {
    setCode(value);
  };

  // Optionally configure Monaco's settings
  const editorOptions = {
    selectOnLineNumbers: true,
    autoIndent: true,
    suggestOnTriggerCharacters: true, // Enables suggestion popup on triggers like `(`, `.` etc.
    wordBasedSuggestions: true, // Suggest words like variables, functions
    quickSuggestions: true, // Shows suggestions as you type
    contextmenu: true, // Show right-click context menu
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MonacoEditor
        className="editor-container"
        height="200px" // Height of the editor
        language={language} // Language to be used (can be python, go, etc.)
        value={code}
        onChange={handleCodeChange}
        theme={isDarkModeOn ? "vs-dark" : "vs-light"}  // You can switch between 'vs-light' or 'vs-dark'
        options={editorOptions} // Pass the editor options
      />
    </div>
  );
};

export default CodeEditor;
