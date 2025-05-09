import { useRef, useEffect, useState } from 'react';
import SrtParser from 'srt-parser-2';
import '/src/HeroVideo.css';

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [subtitles, setSubtitles] = useState([]);
  const [currentSubtitle, setCurrentSubtitle] = useState('');
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);

  // Load and parse SRT file
  useEffect(() => {
    const parser = new SrtParser();
    fetch('/public/Videos/Hogwart.srt')
      .then(response => response.text())
      .then(text => {
        const parsed = parser.fromSrt(text);
        setSubtitles(parsed);
      })
      .catch(error => console.error('Error loading subtitles:', error));
  }, []);

  // Convert SRT time format to milliseconds
  const parseTime = (timeString) => {
    const [hh, mm, ss, ms] = timeString.split(/:|,|;/).map(Number);
    return (hh * 3600 + mm * 60 + ss) * 1000 + ms;
  };

  // Update current subtitle based on video time
  useEffect(() => {
    const video = videoRef.current;
    if (!video || subtitles.length === 0) return;

    const updateSubtitle = () => {
      const currentTime = video.currentTime * 1000;
      const subtitle = subtitles.find(sub => 
        currentTime >= parseTime(sub.startTime) && 
        currentTime < parseTime(sub.endTime)
      );
      setCurrentSubtitle(subtitle ? subtitle.text : '');
    };

    video.addEventListener('timeupdate', updateSubtitle);
    return () => video.removeEventListener('timeupdate', updateSubtitle);
  }, [subtitles]);

  // Handle video playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = async () => {
      if (isManuallyPaused) return;
      
      try {
        await video.play();
        setIsPlaying(true);
      } catch (err) {
        setIsPlaying(false);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
        setIsPlaying(false);
      } else if (isVisible && !isHovered && !isManuallyPaused) {
        handlePlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && !isHovered && !isManuallyPaused) {
          handlePlay();
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.7 }
    );

    observer.observe(video);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        video.pause();
        setIsPlaying(false);
      } else if (isVisible && !isHovered && !isManuallyPaused) {
        handlePlay();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, isHovered, isManuallyPaused]);

  const togglePlayPause = async () => {
    if (!videoRef.current) return;
    
    if (videoRef.current.paused) {
      setIsManuallyPaused(false);
      await videoRef.current.play();
      setIsPlaying(true);
    } else {
      setIsManuallyPaused(true);
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    
    videoRef.current.currentTime = 0;
    if (!isManuallyPaused) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="hero-container">
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="hero-video"
          muted={isMuted}
          loop
          playsInline
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={togglePlayPause}
        >
          <source src="/Videos/Hogwart.mp4" type="video/mp4" />
          <track
            kind="subtitles"
            srcLang="en"
            src="/public/Videos/Hogwart.srt"
            default
          />
        </video>

        {currentSubtitle && (
          <div className="video-subtitle">
            {currentSubtitle}
          </div>
        )}

        <div className="video-controls-left">
          <button 
            className={`control-btn ${isPlaying ? 'pause' : 'play'}`}
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>

          <button 
            className="control-btn restart-btn"
            onClick={restartVideo}
            aria-label="Restart video"
          >
            ↻
          </button>

          <button 
            className="control-btn mute-btn"
            onClick={() => setIsMuted(!isMuted)}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? '🔇' : '🔊'}
          </button>
        </div>

        <div className="video-credit">
          Video by <b><i>SUNNYVIDS</i></b>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;