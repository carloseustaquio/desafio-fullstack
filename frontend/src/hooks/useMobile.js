import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";

export default function useMobile(mobileBreakpoint = 768) {
  const [mobile, setMobile] = useState(false);
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    windowWidth < mobileBreakpoint ? setMobile(true) : setMobile(false);
  }, [windowWidth]);

  return [mobile];
}
