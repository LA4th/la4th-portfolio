import { useState, useEffect } from "react";

export default function UseMobileView(breakpoint = 768) {
  const [mobileView, setMobileView] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const handleSize = () => {
      setMobileView(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, [breakpoint]);

  return mobileView;
}