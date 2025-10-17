"use client";

import { useEffect, useState } from 'react';

interface ClientVideoProps {
  src: string;
  className?: string;
}

export default function ClientVideo({ src, className = "w-full h-full object-cover" }: ClientVideoProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    // Return a placeholder during server-side rendering
    return <div className={className} style={{ backgroundColor: '#f0f0f0' }} />;
  }
  
  return (
    <video 
      className={className} 
      autoPlay 
      muted 
      loop 
      playsInline
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
