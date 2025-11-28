"use client";

interface DownloadButtonProps {
  className?: string;
}

export default function DownloadButton({ className = "" }: DownloadButtonProps) {
  const appStoreUrl = "https://apps.apple.com/app/ai-headshot-editor-glowtap/id6754992714";

  return (
    <a
      href={appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/Assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
        alt="Download on the App Store"
        className={`cursor-pointer hover:opacity-80 transition-opacity ${className}`}
      />
    </a>
  );
}
