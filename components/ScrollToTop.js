import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // Optional: Verwende scrollIntoView für sanften Übergang zu einem Ref-Element
      document.documentElement.scrollIntoView({ behavior: "smooth" });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null;
};

export default ScrollToTop;
