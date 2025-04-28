"use client"; // Required for Next.js App Router

import { useEffect, useState } from "react";

export default function WebCounter() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Read visit count from localStorage, default to 0
    let count = localStorage.getItem("page_view");

    if (!count) {
      localStorage.setItem("page_view", "1"); // Set first-time visit
      setVisitCount(1);
    } else {
      count = Number(count);
      if (sessionStorage.getItem("visited") !== "true") {
        // Prevent multiple increments within the same session
        let newCount = count + 1;
        localStorage.setItem("page_view", newCount.toString());
        setVisitCount(newCount);
        sessionStorage.setItem("visited", "true"); // Mark session as visited
      } else {
        setVisitCount(count);
      }
    }

    // Inject the counter script dynamically
    const script = document.createElement("script");
    script.src =
      "https://counter6.optistats.ovh/private/counter.js?c=gz378r4yj2mxwrk3wpds78kmgcnsetxf&down=async";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []); // Runs only once when the component mounts

  return (
    <div className="flex flex-col items-center justify-center mt-[10px]">
      {/* <div className="h-[50px] w-[80px] text-[#ef5226] rounded-[30px] font-bold text-[25px] flex items-center justify-center mt-[10px]">
        {visitCount}
      </div> */}
      <div id="sfcgz378r4yj2mxwrk3wpds78kmgcnsetxf"></div>
      <noscript>
        <img
          src="https://counter6.optistats.ovh/private/freecounterstat.php?c=gz378r4yj2mxwrk3wpds78kmgcnsetxf"
          border="0"
          title="website counter"
          alt="website counter"
        />
      </noscript>
    </div>
  );
}