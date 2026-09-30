import React, { useEffect, useState } from "react";

export default function Page3({ onNext }) {
  // =========================
  // TYPING MESSAGE
  // =========================

  const fullText =
    "I just want to remind you how special you are to me. May your life shine as bright as your smile, and may you always be happy.";

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;

      if (index >= fullText.length) {
        clearInterval(typing);
      }
    }, 55);

    return () => clearInterval(typing);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#f8e9e9]/70">


         {/* ================= BROTHER CHARACTER ================= */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-12px]
              top-[80px]
              z-20
              w-[125px]
              sm:right-[5px]
              sm:top-[145px]
              sm:w-[145px]
              md:right-[15px]
              md:w-[165px]
            "
          >

            <img
              src="/sister.png"
              alt="Brother cartoon"
              className="w-full object-contain"
            />

          </div>

      <main className="flex min-h-screen w-full flex-col items-center px-7 py-40 sm:px-8 sm:py-18">

        {/* ================= LETTER ================= */}

        <section
          className="
            relative
            w-full
            max-w-[850px]
            overflow-hidden
            rounded-[40px]
            bg-[#f8e9e9]
            px-6
            py-12
            shadow-lg
            sm:px-8
            sm:py-14
            md:px-16
            md:py-16
          "
        >

          {/* Paper line */}
          <div
            className="
              absolute
              left-0
              right-0
              top-[15px]
              h-px
              bg-[#f8e9e9]
              sm:top-[145px]
            "
          />

          {/* ================= TOP ================= */}

          <div className="relative z-10 text-center">

            <p
              className="
                text-sm
                tracking-[0.35em]
                text-[#4b4664]
                sm:text-base
              "
            >
              A LETTER
            </p>

            <h1
              className="
                mt-2
                font-serif
                text-2xl
                font-bold
                tracking-wide
                text-[#cf4569]
                sm:text-4xl
                md:text-5xl
              "
            >
              FROM YOUR GIRL ✦
            </h1>

          </div>



          {/* ================= LETTER CONTENT ================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              mt-4
              max-w-[680px]
              text-center
              sm:mt-20
            "
          >

            {/* Dear sis */}

            <h2
              className="
                font-serif
                text-2xl
                font-semibold
                italic
                text-[#d34b6c]
                sm:text-4xl
              "
            >
              Dear 💖
            </h2>


            {/* ================= TYPING TEXT ================= */}

            <p
              className="
                mt-2
                min-h-[150px]
                text-base
                leading-8
                text-[#4b4664]
                sm:min-h-[120px]
                sm:text-lg
                sm:leading-9
              "
            >
              {typedText}

              <span className="ml-1 inline-block animate-pulse text-[#d65372]">
                |
              </span>
            </p>


            {/* ================= SIGNATURE ================= */}

            <div className="mt-8 flex items-center justify-center gap-2">

              <span className="text-xl text-[#cf4569]">
                —
              </span>

              <p
                className="
                  font-serif
                  text-lg
                  font-semibold
                  italic
                  text-[#4b4664]
                  sm:text-2xl
                "
              >
                With love, your Girl 💌
              </p>

            </div>

          </div>



        </section>
           {/* ================= STAMP ================= */}

          <div
            className="
              absolute
              bottom-[250px]
              left-[-5px]
              flex
              h-[100px]
              w-[100px]
              rotate-[-8deg]
              items-center
              justify-center
              rounded-full
              border-[5px]
              border-dotted
              border-[#cf4569]
              sm:h-[145px]
              sm:w-[145px]
            "
          >

            <div
              className="
                flex
                h-[82px]
                w-[82px]
                items-center
                justify-center
                rounded-full
                border-2
                border-[#cf4569]
                sm:h-[105px]
                sm:w-[105px]
              "
            >

              <div className="text-center">

                <p
                  className="
                    text-[9px]
                    font-semibold
                    tracking-widest
                    text-[#cf4569]
                    sm:text-xs
                  "
                >
                  HAPPY
                </p>

                <div className="my-1 text-3xl text-[#cf4569]">
                  ♥
                </div>

                <p
                  className="
                    text-[9px]
                    font-semibold
                    tracking-widest
                    text-[#cf4569]
                    sm:text-xs
                  "
                >
                  BIRTHDAY
                </p>

              </div>

            </div>

          </div>

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