import React, { useState } from 'react';

function VideoUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setSelectedFile(file);
    } else {
      alert('Please select a valid video file.');
      event.target.value = null;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      // Here you would typically handle the file upload to your server
      console.log('Uploading file:', selectedFile);
      // Add your upload logic here
    } else {
      alert('Please select a video file before submitting.');
    }
  };

  return (
    <div className="video-upload">
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
        />
        <button type="submit">Upload</button>
      </form>
      {selectedFile && (
        <p>Selected file: {selectedFile.name}</p>
      )}
    </div>
  );
}

export default VideoUpload;

