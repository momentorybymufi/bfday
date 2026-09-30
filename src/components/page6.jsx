import React from "react";

export default function Page6() {
  return (
    <div className="min-h-screen w-full bg-[#f8e9e9] text-[#5d5260]">

      <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 py-12 sm:px-8">

        {/* ================= SOFT BACKGROUND DETAILS ================= */}

        <div className="pointer-events-none absolute left-[8%] top-[15%] h-24 w-24 rounded-full bg-white/30 blur-3xl" />

        <div className="pointer-events-none absolute bottom-[15%] right-[8%] h-32 w-32 rounded-full bg-[#e8b9bd]/20 blur-3xl" />

        {/* ================= MAIN LETTER ================= */}

        <section
          className="
            relative
            w-full
            max-w-[850px]
            rounded-[28px]
            border
            border-[#e5cacc]
            bg-[#f9eeee]
            px-7
            py-12
            shadow-[0_20px_60px_rgba(130,80,90,0.12)]
            sm:rounded-[35px]
            sm:px-12
            sm:py-14
            md:px-20
            md:py-16
          "
        >

          {/* ================= TOP SMALL TEXT ================= */}

          <p
            className="
              text-center
              font-serif
              text-xs
              tracking-[0.18em]
              text-[#a67d73]
              sm:text-sm
            "
          >
            ✦ FROM YOUR GIRL, WITH LOVE ✦
          </p>


          {/* ================= THANK YOU ================= */}

          <h1
            className="
              mt-4
              text-center
              font-serif
              text-4xl
              font-semibold
              italic
              text-[#c65b70]
              sm:text-5xl
              md:text-6xl
            "
          >
            Thank You
          </h1>


          {/* ================= SUBTITLE ================= */}

          <h2
            className="
              mt-2
              text-center
              text-xl
              font-black
              tracking-wide
              text-[#182238]
              sm:text-2xl
              md:text-3xl
            "
          >
            FOR ALWAYS BEING THERE
            <span className="ml-1 text-[#d94d6c]">❤️</span>
          </h2>


          {/* ================= DIVIDER ================= */}

          <div className="mx-auto mt-5 h-px w-24 bg-[#d8afb1]" />


          {/* ================= MESSAGE ================= */}

          <p
            className="
              mx-auto
              mt-6
              max-w-[620px]
              text-center
              text-sm
              leading-7
              text-[#70636c]
              sm:text-base
              sm:leading-8
            "
          >
            You make every small thing brighter and happier.
            I'm lucky to have you — thanks for being the sweetest
            part of my days.
          </p>


          {/* ================= SMALL HEART ================= */}

          <div className="mt-4 text-center text-[#d55370]">
            ♥
          </div>


          {/* ================= BOTTOM SIGNATURE ================= */}

          <p
            className="
              mt-3
              text-center
              font-serif
              text-sm
              italic
              text-[#9c7272]
              sm:text-base
            "
          >
            — With love, your GIRL ❤️
          </p>


          {/* ================= CHARACTER ================= */}

          <div
            className="
              mt-4
              flex
              justify-center
              sm:justify-end
            "
          >
            <img
              src="/character.png"
              alt="Cute character"
              className="
                w-[250px]
                object-contain
                drop-shadow-[0_8px_12px_rgba(100,60,60,0.12)]
                sm:w-[155px]
                md:w-[175px]
              "
            />
          </div>


          {/* ================= DECORATIVE HEARTS ================= */}

          <span
            className="
              absolute
              left-[8%]
              top-[25%]
              rotate-[-12deg]
              text-xl
              text-[#d98a98]/50
            "
          >
            ♡
          </span>

          <span
            className="
              absolute
              right-[8%]
              top-[20%]
              rotate-[15deg]
              text-lg
              text-[#d98a98]/40
            "
          >
            ♡
          </span>

          <span
            className="
              absolute
              bottom-[12%]
              left-[10%]
              text-sm
              text-[#d98a98]/40
            "
          >
            ✦
          </span>

        </section>

      </main>

    </div>
  );
}