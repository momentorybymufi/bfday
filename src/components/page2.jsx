import { useState } from "react";

function Chocolate() {
  return (
    <div className="relative h-12 w-12 rotate-[-38deg]">
      {/* Chocolate */}
      <div className="absolute left-1 top-1 h-8 w-7 rounded-sm border border-[#704438] bg-[#93604d]">
        <div className="grid h-full grid-cols-2 grid-rows-2">
          <span className="border-r border-b border-[#704438] bg-[#ad7762]" />
          <span className="border-b border-[#704438] bg-[#9e6854]" />
          <span className="border-r border-[#704438] bg-[#9e6854]" />
          <span className="bg-[#ad7762]" />
        </div>
      </div>

      {/* Wrapper */}
      <div className="absolute bottom-0 right-0 h-7 w-7 bg-[#e42d45] [clip-path:polygon(0_0,100%_0,100%_75%,45%_100%)]" />
    </div>
  );
}

function Cross() {
  return (
    <span className="font-sans text-[42px] font-semibold leading-none text-[#d85c7c]">
      ×
    </span>
  );
}

export default function Page2({ onNext }) {
  const [found, setFound] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // When center box is clicked
  const handleCenterClick = () => {
    if (found) return;

    setFound(true);

    // Show success message after chocolate appears
    setTimeout(() => {
      setShowMessage(true);
    }, 500);
  };

  // NEXT button
  const handleNext = () => {
    // If chocolate is NOT found
    if (!found) {
      setShowMessage(true);
      return;
    }

    // If chocolate IS found
    onNext();
  };

  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#fbf3f2]">

      {/* ================= MESSAGE ================= */}
      {showMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/5 px-5 backdrop-blur-[2px]">

          <div className="animate-message w-full max-w-[380px] rounded-3xl border border-[#d85c7c]/25 bg-[#fffafa]/75 px-7 py-7 text-center shadow-xl backdrop-blur-md">

            {!found ? (
              <>
                {/* Before finding chocolate */}
                <p
                  className="text-3xl text-[#c94f6c] sm:text-4xl"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Sorryyy 🥺
                </p>

                <p className="mt-3 text-base leading-6 text-[#8f7075]">
                  First find the hidden chocolate 🍫
                </p>

                <p className="mt-1 text-sm text-[#aa8b90]">
                  I know you can find it! 👀
                </p>

                <button
                  onClick={() => setShowMessage(false)}
                  className="mt-5 rounded-full bg-[#d45173] px-7 py-2.5 text-sm text-white transition hover:scale-105 hover:bg-[#c74567] active:scale-95"
                >
                  Okayyy 💗
                </button>
              </>
            ) : (
              <>
                {/* After finding chocolate */}
                <p
                  className="text-3xl text-[#c94f6c] sm:text-4xl"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  You found it! 🍫
                </p>

                <p className="mt-2 text-sm text-[#9c777b]">
                  The chocolate was hiding here.
                </p>

                <button
                  onClick={() => setShowMessage(false)}
                  className="mt-5 rounded-full bg-[#d45173] px-7 py-2.5 text-sm text-white transition hover:scale-105 hover:bg-[#c74567] active:scale-95"
                >
                  Continue 💕
                </button>
              </>
            )}

          </div>
        </div>
      )}

      {/* ================= FULL PAGE ================= */}
      <div className="flex min-h-screen flex-col">

        {/* Heading */}
        <section className="flex justify-center px-6 pt-[8vh]">
          <h1
            className="text-center text-[32px] font-bold leading-[1.35] text-[#c84e6b] sm:text-[42px] md:text-[50px] lg:text-[58px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Fill in the blanks to get a
            <br />

            <span className="inline-flex items-center gap-2">
              chocolate
              <Chocolate />
            </span>
          </h1>
        </section>

        {/* Divider */}
        <div className="mt-[7vh] h-px w-full bg-[#ead9d8]" />

        {/* ================= PUZZLE ================= */}
        <section className="flex flex-1 flex-col items-center justify-center px-4">

          <div className="grid grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7">

            {/* 1 */}
            <div className="flex aspect-square w-[90px] items-center justify-center rounded-[17px] border-[3px] border-[#d85c7c] bg-[#fcf5f4] sm:w-[120px] md:w-[140px] lg:w-[155px]">
              <Chocolate />
            </div>

            {/* 2 */}
            <div className="flex aspect-square w-[90px] items-center justify-center rounded-[17px] border-[3px] border-[#d85c7c] bg-[#fcf5f4] sm:w-[120px] md:w-[140px] lg:w-[155px]">
              <Cross />
            </div>

            {/* 3 */}
            <div className="flex aspect-square w-[90px] items-center justify-center rounded-[17px] border-[3px] border-[#d85c7c] bg-[#fcf5f4] sm:w-[120px] md:w-[140px] lg:w-[155px]">
              <Cross />
            </div>

            {/* 4 */}
            <div className="flex aspect-square w-[90px] items-center justify-center rounded-[17px] border-[3px] border-[#d85c7c] bg-[#fcf5f4] sm:w-[120px] md:w-[140px] lg:w-[155px]">
              <Cross />
            </div>

            {/* ================= CENTER BLANK ================= */}
            <button
              type="button"
              onClick={handleCenterClick}
              disabled={found}
              className={`flex aspect-square w-[90px] items-center justify-center rounded-[17px] border-[3px] border-[#d85c7c] bg-[#fcf5f4] transition-all duration-300 sm:w-[120px] md:w-[140px] lg:w-[155px] ${
                !found
                  ? "cursor-pointer hover:scale-105 hover:bg-[#f9e9e8]"
                  : "cursor-default"
              }`}
            >
              {found && (
                <div className="animate-chocolate">
                  <Chocolate />
                </div>
              )}
            </button>

            {/* 6 */}
            <div className="flex aspect-square w-[90px] items-center justify-center rounded-[17px] border-[3px] border-[#d85c7c] bg-[#fcf5f4] sm:w-[120px] md:w-[140px] lg:w-[155px]">
              <Cross />
            </div>

            {/* 7 */}
            <div className="flex aspect-square w-[90px] items-center justify-center rounded-[17px] border-[3px] border-[#d85c7c] bg-[#fcf5f4] sm:w-[120px] md:w-[140px] lg:w-[155px]">
              <Cross />
            </div>

            {/* 8 */}
            <div className="flex aspect-square w-[90px] items-center justify-center rounded-[17px] border-[3px] border-[#d85c7c] bg-[#fcf5f4] sm:w-[120px] md:w-[140px] lg:w-[155px]">
              <Cross />
            </div>

            {/* 9 */}
            <div className="flex aspect-square w-[90px] items-center justify-center rounded-[17px] border-[3px] border-[#d85c7c] bg-[#fcf5f4] sm:w-[120px] md:w-[140px] lg:w-[155px]">
              <Chocolate />
            </div>

          </div>

          {/* ================= NEXT ================= */}
          <button
            onClick={handleNext}
            className="mt-[6vh] mb-[5vh] flex h-[65px] w-[250px] items-center justify-center gap-5 rounded-full bg-[#d45173] font-serif text-[27px] text-white transition hover:scale-105 hover:bg-[#c74668] active:scale-95 sm:h-[72px] sm:w-[300px]"
          >
            Next
            <span className="text-[36px] font-light">→</span>
          </button>

        </section>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        .animate-chocolate {
          animation: chocolateAppear 0.55s ease-out forwards;
        }

        .animate-message {
          animation: messageAppear 0.4s ease-out forwards;
        }

        @keyframes chocolateAppear {
          0% {
            opacity: 0;
            transform: scale(0.2) rotate(-30deg);
          }

          60% {
            opacity: 1;
            transform: scale(1.15) rotate(8deg);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes messageAppear {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(15px);
          }

          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

    </main>
  );
}