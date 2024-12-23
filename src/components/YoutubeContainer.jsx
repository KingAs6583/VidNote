const YoutubeContainer = ({ videoLink }) => {
  
  const getVideoId = (youtubeLink) => {
    return youtubeLink.replace('https://youtu.be/', '');
  }

  return (
    <>
      {/* YouTube iframe */}
      <div className="iframe-container" style={{ width: '100%', height: '100%' }}>
        <iframe
          title="YouTube Video"
          width="100%"
          height="50%"
          src={`https://www.youtube.com/embed/${getVideoId(videoLink)}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default YoutubeContainer;