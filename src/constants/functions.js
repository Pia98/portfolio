import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const scrollToSmooth = (e, targetId) => {
  e.preventDefault();
  const target = document.getElementById(targetId);
  if (target) {
    const offset = window.innerHeight * 0.05;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  }
};

//to solve the scroll to id problem of react router
//is called as soon as location changes
export function ScrollToElementById() {
  const { hash } = useLocation(); //returns current location

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.replace("#", "")); //resolve id of section to scroll to
      if (target) {
        const offset = window.innerHeight * 0.05;
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: top,
          behavior: "smooth",
        });
      }
    }
  }, [hash]);

  return null;
}
