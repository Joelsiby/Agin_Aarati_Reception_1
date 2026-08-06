import React, { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  isPlaying: boolean;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ isPlaying }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch(console.error);
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="video-bg-container">
      <video
        ref={videoRef}
        className="video-bg"
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/reception_background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
