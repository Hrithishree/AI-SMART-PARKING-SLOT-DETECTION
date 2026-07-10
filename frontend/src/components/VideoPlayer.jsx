// src/components/VideoPlayer.jsx
import React from "react";

export default function VideoPlayer({ videoRef, videoSrc, onTimeUpdate }) {
  return (
    <video
      ref={videoRef}
      src={videoSrc}
      controls
      width={480}
      height={270}
      style={{ borderRadius: 12, background: "#000" }}
      onTimeUpdate={onTimeUpdate}
    />
  );
}
