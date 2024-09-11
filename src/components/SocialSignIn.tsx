'use client'; // Add this line at the top of the file

import React from 'react';

interface SocialSignInProps {
  provider: string;
  onSignIn: () => void;
  className?: string;
  children?: React.ReactNode;
}

const SocialSignIn: React.FC<SocialSignInProps> = ({ provider, onSignIn, className, children }) => {
  return (
    <button onClick={onSignIn} className={className}>
      {children || `Sign in with ${provider}`}
    </button>
  );
};

export default SocialSignIn;