import { useNavigate, useLocation } from "react-router";
import { useEffect } from "react";

function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
}

export default useScrollToHash;
