import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

const NoteTakingComponent = ({noteContent,setNoteContent}) => {
  
  // Handle note change
  const handleNoteChange = (value) => {
    setNoteContent(value);
  };

  return (
    <>
      {/* Note-taking area */}
      <div>
        <ReactQuill
          value={noteContent}
          onChange={handleNoteChange}
          theme="snow"
          placeholder="Write your notes here..."
          style={{ height: '220px', marginTop: '10px' }}
        />
      </div>
    </>
  );
};

export default NoteTakingComponent;