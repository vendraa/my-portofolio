import { useEffect, useState } from "react";

export const Background = () => {
  const [isDark, setIsDark] = useState(false);
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isDark) {
      generateStars();
      generateMeteors();
      setClouds([]);
    } else {
      generateClouds();
      setStars([]);
      setMeteors([]);
    }
  }, [isDark]);

  useEffect(() => {
    const handleResize = () => {
      if (isDark) {
        generateStars();
      } else {
        generateClouds();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isDark]);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: 0,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

    const generateClouds = () => {
    let multiplier = 1;

    if (window.innerWidth < 768) {
        multiplier = 0.6;
    } else if (window.innerWidth < 1280) {
        multiplier = 1;
    } else {
        multiplier = 2;
    }

    const numberOfClouds = Math.floor((window.innerWidth / 140) * multiplier);

    const newClouds = Array.from({ length: numberOfClouds }, (_, i) => {
        const isBig = Math.random() > 0.5; 
        return {
        id: i,
        size: isBig ? Math.random() * 200 + 150 : Math.random() * 100 + 60,
        x: Math.random() * 100,
        y: Math.random() * 80,
        opacity: isBig ? Math.random() * 0.25 + 0.2 : Math.random() * 0.5 + 0.5,
        type: isBig ? "cloud-big" : "cloud-small",
        animationDuration: isBig
            ? Math.random() * 20 + 25 
            : Math.random() * 10 + 8,
        };
    });

    setClouds(newClouds);
    };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {isDark ? (
        <>
          {stars.map((star) => (
            <div
              key={star.id}
              className="star animate-pulse-subtle"
              style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
              }}
            />
          ))}

          {meteors.map((meteor) => (
            <div
              key={meteor.id}
              className="meteor animate-meteor"
              style={{
                width: meteor.size * 50 + "px",
                height: meteor.size * 2 + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: meteor.delay + "s",
                animationDuration: meteor.animationDuration + "s",
              }}
            />
          ))}
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-sky" />
          {clouds.map((cloud) => (
            <div
              key={cloud.id}
              className={`cloud ${cloud.type} animate-cloudMove`}
              style={{
                width: cloud.size + "px",
                height: cloud.size * 2 + "px",
                left: cloud.x + "%",
                top: cloud.y + "%",
                opacity: cloud.opacity,
                filter: cloud.type === "cloud-big" ? "blur(40px)" : "blur(15px)",
                animationDuration: cloud.animationDuration + "s",
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};
