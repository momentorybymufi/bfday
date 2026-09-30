import React, { useState } from "react";

export default function Page4({ onNext }) {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [
    {
      src: "/memory1.png",
    },
    {
      src: "/memory2.png",
    },
    {
      src: "/memory3.png",
    },
  ];

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const previousPhoto = () => {
    setCurrentPhoto(
      (prev) => (prev - 1 + photos.length) % photos.length
    );
  };

  return (
    <div className="min-h-screen w-full bg-[#f8e9e9]/70">

      <main className="flex min-h-screen w-full flex-col items-center px-5 py-30 sm:px-8 sm:py-14">

        {/* ================= MEMORY CARD ================= */}

        <section
          className="
            relative
            w-full
            max-w-[850px]
            overflow-hidden
            rounded-[30px]
            border
            border-[#e7cdd0]
            bg-[#f8e9e9]
            px-5
            py-10
            shadow-[0_15px_40px_rgba(120,70,80,0.12)]
            sm:rounded-[35px]
            sm:px-10
            sm:py-14
            md:px-16
            md:py-16
          "
        >

          {/* ================= TITLE ================= */}

          <div className="text-center">

            <h1
              className="
                font-serif
                text-3xl
                font-bold
                leading-tight
                text-[#c94d69]
                sm:text-4xl
                md:text-5xl
              "
            >
              Our Precious
              <br />
              Memories 💌
            </h1>

          </div>


          {/* ================= SMALL LABELS ================= */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-between
              px-3
              font-serif
              text-sm
              text-[#4b4664]
              sm:px-8
              sm:text-base
            "
          >

            <span>
              FROM: Me🍂
            </span>

            <span>
              To:My Love❤️
            </span>

          </div>


          {/* ================= PHOTO AREA ================= */}

          <div
            className="
              relative
              mx-auto
              mt-4
              aspect-[4/3]
              w-full
              max-w-[650px]
              overflow-hidden
              rounded-2xl
              border-2
              border-[#dcaeb8]
              bg-[#f4dddd]
            "
          >

            {/* PHOTO */}

            <img
              key={currentPhoto}
              src={photos[currentPhoto].src}
              alt={photos[currentPhoto].caption}
              className="
                h-full
                w-full
                object-cover
                animate-[memoryFade_0.45s_ease-in-out]
              "
            />


            {/* ================= LEFT ARROW ================= */}

            <button
              onClick={previousPhoto}
              aria-label="Previous photo"
              className="
                absolute
                left-4
                top-1/2
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-[#f8e9e9]
                text-3xl
                text-[#c94d69]
                shadow-md
                backdrop-blur-sm
                transition
                hover:scale-110
                hover:bg-white
                active:scale-95
                sm:left-4
                sm:h-14
                sm:w-14
                sm:text-4xl
              "
            >
              ←
            </button>


            {/* ================= RIGHT ARROW ================= */}

            <button
              onClick={nextPhoto}
              aria-label="Next photo"
              className="
                absolute
                right-4
                top-1/2
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-[#f8e9e9]
                text-3xl
                text-[#c94d69]
                shadow-md
                backdrop-blur-sm
                transition
                hover:scale-110
                hover:bg-white
                active:scale-95
                sm:right-4
                sm:h-14
                sm:w-14
                sm:text-4xl
              "
            >
              →
            </button>

          </div>




          {/* ================= BOTTOM TEXT ================= */}

          <div
            className="
              mt-8
              flex
              flex-col
              gap-2
              font-serif
              text-sm
              text-[#5b526c]
              sm:flex-row
              sm:justify-between
              sm:text-base
            "
          >

            <span>
              DATE: BF Day
            </span>

            <span>
              VALID FOR: Forever
            </span>

            <span className="italic text-center text-[#c94d69]">
              With love, your girl ❤️
            </span>

          </div>

        </section>


        {/* ================= NEXT BUTTON ================= */}

        <button
          onClick={onNext}
          className="
            mt-10
            flex
            w-full
            max-w-[340px]
            items-center
            justify-center
            gap-4
            rounded-full
            bg-[#d65372]
            px-10
            py-4
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


      {/* ================= ANIMATION ================= */}

      <style>{`
        @keyframes memoryFade {
          from {
            opacity: 0;
            transform: scale(1.03);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

    </div>
  );
}