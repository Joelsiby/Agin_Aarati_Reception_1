import React, { useState } from 'react';
import { DesktopMobileNotice } from './components/DesktopMobileNotice';
import { VideoBackground } from './components/VideoBackground';
import { InviteContent } from './components/InviteContent';
import { AudioPlayer } from './components/AudioPlayer';
import { EnvelopeOpening } from './components/EnvelopeOpening';

export const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenStart = () => {
    setIsPlaying(true);
  };

  const handleOpenComplete = () => {
    setIsOpened(true);
  };

  return (
    <div className="app-root-container">
      {/* Desktop Light Theme Notice Screen */}
      <div className="desktop-only-wrapper">
        <DesktopMobileNotice />
      </div>

      {/* Mobile View Full Screen Application */}
      <div className="mobile-only-wrapper">
        <main className="mobile-viewport">
          {/* Background Video */}
          <VideoBackground isPlaying={isPlaying} />

          {/* Envelope Opening Layer */}
          {!isOpened && (
            <EnvelopeOpening
              onOpenStart={handleOpenStart}
              onOpenComplete={handleOpenComplete}
            />
          )}

          {/* Invitation Content Layer */}
          <InviteContent />

          {/* Bottom Right Controls (Go to Maps & Music Button) */}
          <AudioPlayer shouldPlay={isPlaying} />
        </main>
      </div>
    </div>
  );
};

export default App;
