import { useState } from "react";

import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Page5 from "./components/page5";
import Page6 from "./components/page6";

function App() {
  const [page, setPage] = useState(1);

  const goBack = () => {
    setPage((currentPage) => Math.max(1, currentPage - 1));

    // Scroll to top when going back
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goNext = (nextPage) => {
    setPage(nextPage);

    // Scroll to top when going forward
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen">

      {/* ================= BACK BUTTON ================= */}
      {page > 1 && (
        <button
          onClick={goBack}
          aria-label="Go back"
          className="
            fixed
            left-4
            top-4
            z-[9999]

            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full
            border
            border-[#d9a6a6]
            bg-[#fffaf5]/90

            text-2xl
            text-[#a87362]

            shadow-md
            backdrop-blur-sm

            transition-all
            duration-200

            hover:scale-110
            hover:bg-[#f8e5e5]

            active:scale-90

            sm:left-6
            sm:top-6
            sm:h-12
            sm:w-12
          "
        >
          ←
        </button>
      )}

      {/* ================= PAGE 1 ================= */}
      {page === 1 && (
        <Page1
          onNext={() => goNext(2)}
        />
      )}

      {/* ================= PAGE 2 ================= */}
      {page === 2 && (
        <Page2
          onNext={() => goNext(3)}
        />
      )}

      {/* ================= PAGE 3 ================= */}
      {page === 3 && (
        <Page3
          onNext={() => goNext(4)}
        />
      )}

      {/* ================= PAGE 4 ================= */}
      {page === 4 && (
        <Page4
          onNext={() => goNext(5)}
        />
      )}

      {/* ================= PAGE 5 ================= */}
      {page === 5 && (
        <Page5
          onNext={() => goNext(6)}
        />
      )}

      {/* ================= PAGE 6 ================= */}
      {page === 6 && (
        <Page6 />
      )}

    </div>
  );
}

export default App;