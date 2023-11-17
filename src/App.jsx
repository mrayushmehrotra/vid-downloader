import React, { useState } from "react";
import { downloadInstagramVideo } from "./api";
import "./index.css";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoData, setvideoData] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const handleDownload = async () => {
    if (videoUrl) {
      setisLoading(true);
      try {
        const data = await downloadInstagramVideo(videoUrl);
        setvideoData(data);
      } catch (error) {
        console.log(error);
      }
      setisLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className="heading">Instagram Reel Video Downloader</h1>
          <input
            type="text"
            className="input"
            placeholder="Reel Url"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />

          {isLoading ? (
            <div>
              <h1>Loading..</h1>
            </div>
          ) : (
            videoData && (
              <div className="video-section">
                <video className="video-player" controls>
                  <source src={videoData.media} type="video/mp4" />
                  Your Browser does not support video tag
                </video>
              </div>
            )
          )}
          <button className="button" onClick={handleDownload}>
            <span>Download</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
