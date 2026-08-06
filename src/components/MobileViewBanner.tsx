import React, { useState } from 'react';
import { Smartphone, X, Copy, Check } from 'lucide-react';

export const MobileViewBanner: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [copied, setCopied] = useState(false);

  if (!visible) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="light-notice-banner">
      <span className="banner-icon">
        <Smartphone size={18} />
      </span>
      <span>
        <strong>📱 Best Experience:</strong> Please open in mobile view or view on your iPhone / smartphone.
      </span>
      <button 
        onClick={handleCopyLink}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          background: '#f3f4f6',
          border: '1px solid #d1d5db',
          padding: '4px 10px',
          borderRadius: '16px',
          fontSize: '0.75rem',
          cursor: 'pointer',
          color: '#374151',
          fontWeight: 600,
          marginLeft: '8px'
        }}
        title="Copy URL to phone"
      >
        {copied ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
      <button 
        className="banner-close-btn" 
        onClick={() => setVisible(false)}
        aria-label="Close banner"
      >
        <X size={16} />
      </button>
    </div>
  );
};
