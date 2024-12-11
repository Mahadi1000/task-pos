import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface FullScreenStateProps {
  isFullscreen: boolean;
  setIsFullscreen: Dispatch<SetStateAction<boolean>>;
  toggleFullScreen?: () => void;
}

export default function useFullScreen(): FullScreenStateProps {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return { isFullscreen, setIsFullscreen, toggleFullScreen };
}
