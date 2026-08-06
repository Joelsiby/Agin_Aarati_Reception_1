import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, MapPin } from 'lucide-react';

interface AudioPlayerProps {
  shouldPlay: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ shouldPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Alfa Horizon Business Centre, Goshree Rd, opposite ICTT, Vallarpadam, Kochi, Ernakulam, Kerala 682504");

  useEffect(() => {
    if (!audioRef.current) return;
    if (shouldPlay) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    }
  }, [shouldPlay]);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Audio playback error:", err);
          setIsPlaying(false);
        });
    }
  };

  return (
    <div className="audio-player-fixed">
      {/* HTML Audio element pointing to /reception_music.mp3 */}
      <audio ref={audioRef} loop src="/reception_music.mp3" preload="auto" />

      {/* Go to Maps Button */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="audio-toggle-btn liquid-glass-map-btn"
        aria-label="Go to Maps Location"
        title="Go to Location on Google Maps"
      >
        <MapPin size={16} color="#ffffff" />
      </a>

      {/* Play / Pause Music Toggle Button */}
      <button
        onClick={toggleAudio}
        className={`audio-toggle-btn ${isPlaying ? 'playing' : ''}`}
        aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
        title={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        {isPlaying ? (
          <Pause size={16} />
        ) : (
          <Play size={16} style={{ marginLeft: '2px' }} />
        )}
      </button>
    </div>
  );
};
