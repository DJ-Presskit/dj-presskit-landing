"use client";
import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface VideoBackgroundProps {
  sources: { src: string; type: string }[];
  className?: string;
  sourceClass?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  sources,
  sourceClass,
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video
        .play()
        .then(() => {
          document.removeEventListener("touchstart", tryPlay);
          document.removeEventListener("click", tryPlay);
        })
        .catch(() => {});
    };

    tryPlay();

    document.addEventListener("touchstart", tryPlay, { once: true });
    document.addEventListener("click", tryPlay, { once: true });

    return () => {
      document.removeEventListener("touchstart", tryPlay);
      document.removeEventListener("click", tryPlay);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      x-webkit-airplay="allow"
      webkit-playsinline="true"
      disablePictureInPicture
      disableRemotePlayback
      controls={false}
      tabIndex={0}
      controlsList="nodownload nofullscreen noremoteplayback "
      className={twMerge(
        "absolute inset-0 w-full h-full object-cover object-center z-[-1]",
        className
      )}
      style={{ filter: "blur(5px) contrast(1.5)" }}
    >
      {sources.map((source) => (
        <source
          key={source.src}
          src={source.src}
          type={source.type}
          className={twMerge("", sourceClass)}
        />
      ))}
      Tu navegador no soporta videos HTML5.
    </video>
  );
};

export default VideoBackground;
