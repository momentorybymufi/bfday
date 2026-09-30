import React from "react";

function DancingCharacters() {
  return (
    <svg
      viewBox="0 0 520 300"
      className="mx-auto w-full max-w-[450px]"
      xmlns="http://www.w3.org/2000/svg"
    >

      {/* ================= BOY ================= */}

      <g className="boy-dance">

        {/* Head */}
        <circle
          cx="150"
          cy="90"
          r="48"
          fill="#f7c85c"
          stroke="#303030"
          strokeWidth="6"
        />

        {/* Hair */}
        <g className="boy-head">
        <path
          d="M105 65 Q120 35 150 45 Q178 30 195 60"
          fill="none"
          stroke="#303030"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <path
          d="
            M115 66 L112 48
            M130 58 L130 40
            M147 57 L150 38
            M165 58 L172 42
            M181 68 L190 51
          "
          stroke="#303030"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Eyes */}
        <circle cx="135" cy="88" r="4" fill="#303030" />
        <circle cx="166" cy="88" r="4" fill="#303030" />

        {/* Smile */}
        <path
          d="M137 105 Q150 117 165 104"
          fill="none"
          stroke="#303030"
          strokeWidth="5"
          strokeLinecap="round"
        />
        </g>
        {/* Body */}
        <path
          d="M116 137 Q150 125 183 138 L195 205 Q150 220 105 205 Z"
          fill="#168acb"
          stroke="#303030"
          strokeWidth="6"
        />

        {/* Shirt stripe */}
        <path
          d="M111 165 Q150 175 190 165 L192 181 Q150 190 109 180 Z"
          fill="#f5eee2"
        />

        {/* Left arm */}
        <path
          className="boy-left-arm"
          d="M115 145 Q87 165 98 195"
          fill="none"
          stroke="#303030"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Right arm */}
        <path
          className="boy-right-arm"
          d="M183 145 Q210 160 207 184"
          fill="none"
          stroke="#303030"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Shorts */}
        <path
          d="M108 203 L150 208 L143 255 L105 248 Z"
          fill="#9b713c"
          stroke="#303030"
          strokeWidth="6"
        />

        <path
          d="M150 208 L192 203 L205 246 L168 256 Z"
          fill="#9b713c"
          stroke="#303030"
          strokeWidth="6"
        />

        {/* Legs */}
        <path
  className="boy-left-leg"
  d="M122 249 L113 279"
  stroke="#303030"
  strokeWidth="7"
  strokeLinecap="round"
/>

       <path
  className="boy-right-leg"
  d="M180 250 L201 276"
  stroke="#303030"
  strokeWidth="7"
  strokeLinecap="round"
/>
</g>

      {/* ================= GIRL ================= */}

      <g className="girl-dance">

        {/* Head */}
        <g className="girl-head">
        <circle
          cx="350"
          cy="92"
          r="48"
          fill="#f7c85c"
          stroke="#303030"
          strokeWidth="6"
        />

        {/* Hair */}
        <path
          d="
            M308 73
            Q300 35 328 40
            Q350 20 372 40
            Q402 32 396 75
          "
          fill="#303030"
        />

        {/* Hair strands */}
        <path
          d="
            M315 58 L302 45
            M326 51 L322 33
            M342 47 L343 28
            M360 48 L367 31
            M377 54 L390 39
          "
          stroke="#303030"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Pink bows */}
        <path
          d="M310 62 Q292 45 296 68 Q299 78 315 68"
          fill="#ef6683"
          stroke="#303030"
          strokeWidth="4"
        />

        <path
          d="M391 62 Q410 45 407 68 Q403 78 388 68"
          fill="#ef6683"
          stroke="#303030"
          strokeWidth="4"
        />

        {/* Eyes */}
        <circle cx="334" cy="90" r="4" fill="#303030" />
        <circle cx="366" cy="90" r="4" fill="#303030" />

        {/* Smile */}
        <path
          d="M333 106 Q350 119 367 104"
          fill="none"
          stroke="#303030"
          strokeWidth="5"
          strokeLinecap="round"
        />
</g>
        {/* Dress */}
        <path
          d="
            M332 136
            Q350 126 369 136
            L410 218
            Q350 235 290 218 Z
          "
          fill="#f05b7c"
          stroke="#303030"
          strokeWidth="6"
        />

        {/* Left arm */}
        <path
  className="girl-left-arm"
  d="M310 155 Q278 139 278 111"
  fill="none"
  stroke="#303030"
  strokeWidth="7"
  strokeLinecap="round"
/>

        {/* Right arm */}
        <path
  className="girl-right-arm"
  d="M391 155 Q423 140 423 111"
  fill="none"
  stroke="#303030"
  strokeWidth="7"
  strokeLinecap="round"
/>

        {/* Legs */}
        <path
  className="girl-left-leg"
  d="M323 218 L320 267"
  stroke="#303030"
  strokeWidth="7"
  strokeLinecap="round"
/>

<path
  className="girl-right-leg"
  d="M377 218 L398 260"
  stroke="#303030"
  strokeWidth="7"
  strokeLinecap="round"
/>

      </g>

    </svg>
  );
}


export default function Page1({ onNext }) {

  return (
    <div className="min-h-screen w-full bg-[#fffaf5]">

      <main className="min-h-screen w-full px-5 py-6 sm:px-10">

        {/* Top */}
    


        {/* Content */}
        <section className="mx-auto flex min-h-[calc(100vh-50px)] max-w-5xl flex-col items-center">

          {/* Heading */}

          <div className="mt-8 text-center">

            <p className="text-xs tracking-[0.3em] text-gray-500">
              FOR MY LOVELY
            </p>

            <h1 className="mt-2 font-serif text-4xl font-semibold tracking-[0.18em] text-[#df4e70]">
              NAME ✦
            </h1>

          </div>


          {/* Happy */}

          <div className="mt-14 text-center">

            <div className="relative inline-block">

              <h2 className="font-serif text-[60px] font-semibold italic leading-none text-[#e34d70] sm:text-[75px]">
                Happy
              </h2>

              <div className="absolute left-1/2 top-[18%] -translate-x-1/2 -translate-y-1/2 rotate-[-3deg] bg-[#f7b8c3] px-3 py-1 text-xs">
                BOYFRIEND
                <br />
                day
              </div>

            </div>

            <h3 className="mt-3 text-3xl font-black text-[#182238] sm:text-4xl">
              MY DEAR ❤️
            </h3>

          </div>


          {/* Message */}

          <p className="mt-7 max-w-[650px] text-center text-sm leading-7 text-[#414141]">

            You've always been my biggest supporter,
            my secret keeper, and my forever partner-in-crime. 😘
            On this{" "}

            <span className="font-semibold text-[#e34d70]">
              BFday
            </span>

            , I just want you to know how lucky I am
            to have you as my person.

          </p>


          {/* Stars */}

          <div className="mt-7 flex gap-3 text-lg text-[#e34d70]">
            ✦ ✦ ✦
          </div>


          {/* Dancing characters */}

          <div className="mt-8 w-full max-w-[500px]">
            <DancingCharacters />
          </div>


          {/* Button */}

          <button
            onClick={onNext}
            className="
              mt-4
              mb-8
              rounded-full
              bg-[#f8c4cc]
              px-8
              py-2.5
              text-sm
              text-[#dc4869]
              transition
              hover:scale-105
              active:scale-95
            "
          >
            NEXT ❤️
          </button>

        </section>

      </main>

    </div>
  );
}