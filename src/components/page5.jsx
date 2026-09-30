import React, { useEffect, useRef, useState } from "react";

export default function Page5({ onNext }) {
  // =========================
  // SONG DATA
  // =========================

  const songs = [
    {
      name: "Perfect",
      image: "/song1.png",
      audio: "/song1.mp3",
    },
    {
      name: "Can't help falling in love",
      image: "/song2.png",
      audio: "/song2.mp3",
    },
    {
      name: "Until I Found You",
      image: "/song3.png",
      audio: "/song3.mp3",
    },
  ];

  // =========================
  // STATES
  // =========================

  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  // =========================
  // CURRENT SONG
  // =========================

  const song = songs[currentSong];

  // =========================
  // PLAY / PAUSE
  // =========================

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Audio could not play:", error);
        });
    }
  };

  // =========================
  // NEXT SONG
  // =========================

  const nextSong = () => {
    const nextIndex = (currentSong + 1) % songs.length;

    setCurrentSong(nextIndex);
    setIsPlaying(true);
  };

  // =========================
  // PREVIOUS SONG
  // =========================

  const previousSong = () => {
    const previousIndex =
      (currentSong - 1 + songs.length) % songs.length;

    setCurrentSong(previousIndex);
    setIsPlaying(true);
  };

  // =========================
  // CHANGE SONG
  // =========================

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    if (isPlaying) {
      audioRef.current
        .play()
        .catch((error) => {
          console.log("Audio could not play:", error);
          setIsPlaying(false);
        });
    }
  }, [currentSong]);

  // =========================
  // WHEN SONG FINISHES
  // =========================

  const handleSongEnded = () => {
    const nextIndex = (currentSong + 1) % songs.length;

    setCurrentSong(nextIndex);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#f8e9e9]/50">

     <main className="flex min-h-screen w-full flex-col items-center px-5 py-30 sm:px-8 sm:py-14">

        {/* ================= MEMORY CARD ================= */}

       <section 
  className="
    relative
    flex
    w-full
    max-w-[850px]
    flex-col
    items-center
    overflow-hidden
    rounded-[30px]
    border
    border-[#e7cdd0]
    bg-[#f8e9e9]
    px-5
    py-8
    text-center
    shadow-[0_15px_40px_rgba(120,70,80,0.12)]
    sm:rounded-[35px]
    sm:px-10
    sm:py-10
    md:px-16
    md:py-10
  "
>


        {/* =====================================
            MUSIC PLAYER
        ===================================== */}


          {/* ================= TITLE ================= */}

          <h1
            className="
              font-serif
              text-2xl
              font-semibold
              text-[#a87362]
              sm:text-2xl
              md:text-3xl
            "
          >
            A Few Songs For You
            <span className="ml-1">
              🤎
            </span>
          </h1>


          {/* ================= IMAGE ================= */}

          <div
            className="
            mx-auto
              mt-5
              h-[180px]
              w-[180px]
              overflow-hidden
              rounded-[28px]
              bg-white
              shadow-[0_12px_35px_rgba(160,110,90,0.12)]
              sm:h-[220px]
              sm:w-[220px]
              sm:rounded-[32px]
            "
          >

            <img
              key={song.image}
              src={song.image}
              alt={song.name}
              className="
                h-full
                w-full
                object-cover
                transition-all
                duration-500
              "
            />

          </div>


          {/* ================= STATUS ================= */}

          <p
            className="
              mt-4
              text-base
              tracking-[0.18em]
              text-[#a39b96]
              sm:text-lg
            "
          >
            {isPlaying ? "PLAYING" : "PAUSED"}
          </p>


          {/* ================= SONG NAME ================= */}

          <h2
            key={song.name}
            className="
              mt-4
              font-serif
              text-3xl
              font-semibold
              text-[#9b6b5c]
              transition-all
              duration-300
              sm:text-5xl
            "
          >
            {song.name}
          </h2>


          {/* ================= AUDIO ================= */}

          <audio
            ref={audioRef}
            src={song.audio}
            onEnded={handleSongEnded}
          />


          {/* ================= CONTROLS ================= */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-7
              sm:gap-10
            "
          >

            {/* PREVIOUS */}

            <button
              onClick={previousSong}
              aria-label="Previous song"
              className="
                text-3xl
                text-[#bd836e]
                transition
                hover:scale-110
                active:scale-90
                sm:text-5xl
              "
            >
              ◀
            </button>


            {/* PLAY / PAUSE */}

            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="
                flex
                h-[76px]
                w-[76px]
                items-center
                justify-center
                rounded-full
                border-[3px]
                border-[#b77d6a]
                text-3xl
                text-[#b77d6a]
                transition-all
                duration-200
                hover:scale-105
                hover:bg-[#f8e9e1]
                active:scale-95
                sm:h-[76px]
                sm:w-[76px]
                sm:text-4xl
              "
            >
              {isPlaying ? "Ⅱ" : "▶"}
            </button>


            {/* NEXT SONG */}

            <button
              onClick={nextSong}
              aria-label="Next song"
              className="
                text-3xl
                text-[#bd836e]
                transition
                hover:scale-110
                active:scale-90
                sm:text-5xl
              "
            >
              ▶
            </button>

          </div>


          {/* ================= SONG INDICATORS ================= */}

          <div className="mt-7 flex gap-2">

            {songs.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSong(index);
                  setIsPlaying(true);
                }}
                aria-label={`Song ${index + 1}`}
                className={`
                  h-2.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    currentSong === index
                      ? "w-8 bg-[#b77d6a]"
                      : "w-2.5 bg-[#dfc2b7]"
                  }
                `}
              />
            ))}

          </div>

        </section>


      {/* ================= NEXT BUTTON ================= */}

        <button
          onClick={onNext}
          className="
            mt-30
            absolute
            right-[12%]
            bottom-[7.5%]
            max-w-[340px]
            justify-center
            gap-2
            rounded-full
            bg-[#d65372]
            px-5
            py-2
            text-lg
            font-medium
            text-white
            shadow-md
            transition-all
            duration-200
            hover:scale-105
            hover:shadow-lg
            active:scale-95
          "
        >
          Next

          <span className="text-2xl">
            →
          </span>
          </button>

      </main>

    </div>
  );
}