import React, { useState, useEffect } from 'react';

interface EnvelopeOpeningProps {
  onOpenComplete: () => void;
  onOpenStart: () => void;
}

export const EnvelopeOpening: React.FC<EnvelopeOpeningProps> = ({ onOpenComplete, onOpenStart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRetrieving, setIsRetrieving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      onOpenStart(); // Start playing music & video on user click

      const retrievalTimer = setTimeout(() => {
        setIsRetrieving(true);
      }, 1000);

      const finalTimer = setTimeout(() => {
        onOpenComplete();
      }, 3500);

      return () => {
        clearTimeout(retrievalTimer);
        clearTimeout(finalTimer);
      };
    }
  }, [isOpen, onOpenComplete, onOpenStart]);

  const retrievalTransition = {
    transition: 'all 1800ms cubic-bezier(0.4, 0, 0.2, 1)'
  };

  return (
    <div className="envelope-overlay-wrapper">
      <div
        className="envelope-3d-scene"
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true);
          }
        }}
      >
        {/* 1. LEFT FLAP */}
        <div
          className="envelope-flap"
          style={{
            zIndex: 40,
            transform: isRetrieving
              ? 'translate3d(-200vw, 0, -2000px)'
              : 'translate3d(-140px, 0, -20px)',
            ...retrievalTransition
          }}
        >
          <img
            src="/envelop_new.png"
            className="envelope-img"
            style={{ transform: 'rotate(-90deg) scale(2.5)' }}
            alt="Left flap"
          />
        </div>

        {/* 2. RIGHT FLAP */}
        <div
          className="envelope-flap"
          style={{
            zIndex: 40,
            transform: isRetrieving
              ? 'translate3d(200vw, 0, -2000px)'
              : 'translate3d(140px, 0, -10px)',
            ...retrievalTransition
          }}
        >
          <img
            src="/envelop_new.png"
            className="envelope-img"
            style={{ transform: 'rotate(90deg) scale(2.5)' }}
            alt="Right flap"
          />
        </div>

        {/* 3. BOTTOM FLAP */}
        <div
          className="envelope-flap"
          style={{
            zIndex: 50,
            transform: isRetrieving
              ? 'translate3d(0, 200vh, -2000px)'
              : 'translate3d(0, 140px, 0px)',
            ...retrievalTransition
          }}
        >
          <img
            src="/envelop_new.png"
            className="envelope-img"
            style={{ transform: 'rotate(180deg) scale(3.2)' }}
            alt="Bottom flap"
          />
        </div>

        {/* 4. TOP FLAP */}
        <div
          className="envelope-flap"
          style={{
            zIndex: 60,
            transform: isRetrieving
              ? 'translate3d(0, -200vh, -2000px)'
              : 'translate3d(0, -140px, 20px)',
            ...retrievalTransition
          }}
        >
          <img
            src="/envelop_new.png"
            className="envelope-img"
            style={{ transform: 'scale(2.8)' }}
            alt="Top flap"
          />
        </div>

        {/* 5. LOGO SEAL BUTTON */}
        {!isRetrieving && (
          <div
            className={`envelope-seal-container ${isOpen ? 'fade-out' : ''}`}
          >
            <img src="/logo.png" className="envelope-logo-img" alt="Click to open" />
            <p className="envelope-click-text">
              Click to Open
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
