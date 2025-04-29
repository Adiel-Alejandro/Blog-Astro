import { useState, useEffect } from "react";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const music = document.getElementById("bg-music");
    if (!music) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    music.addEventListener("play", handlePlay);
    music.addEventListener("pause", handlePause);

    return () => {
      music.removeEventListener("play", handlePlay);
      music.removeEventListener("pause", handlePause);
    };
  }, []);

  const toggleMusic = () => {
    const music = document.getElementById("bg-music");
    if (!music) return;

    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  };

  return (
    <button className="magic-button" onClick={toggleMusic}>
      {isPlaying ? "⏸️ Pausar música" : "🎵 Reproducir música"}
    </button>
  );
}

