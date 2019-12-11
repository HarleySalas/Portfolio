import React, { useState, useEffect, useContext } from "react";
import { ScrollContext } from "../context/ScrollContext";

import { usePrevious } from "../utils";

const useActiveSection = () => {
  const [scrollHeight, setScrollHeight] = useContext(ScrollContext);
  const [activeSection, setActiveSection] = useState(null);
  const prevSection = usePrevious(activeSection);

  //use to get scroll position of each section
  const section = sectionId => {
    let sectionPos = null;
    if (document.readyState === "complete") {
      sectionPos = document.getElementById(sectionId);
    }
    if (sectionPos) {
      return sectionPos.offsetTop;
    } else {
      return sectionPos;
    }
  };

  useEffect(() => {
    //determine the scroll value that a section should be selected
    const observer = window.innerHeight / 2 + scrollHeight;

    //Determine the active section.
    if (observer < section("about") && prevSection !== null) {
      setActiveSection(null);
    }
    if (
      observer >= section("about") &&
      observer < section("skillset") &&
      prevSection !== "about"
    ) {
      setActiveSection("about");
    }
    if (
      observer >= section("skillset") &&
      observer < section("portfolio") &&
      prevSection !== "skillset"
    ) {
      setActiveSection("skillset");
    }
    if (
      observer >= section("portfolio") &&
      observer < section("contact") &&
      prevSection !== "portfolio"
    ) {
      setActiveSection("portfolio");
    }
    if (observer >= section("contact") && prevSection !== "contact") {
      setActiveSection("contact");
    }
  }, [scrollHeight]);

  return activeSection;
};

export default useActiveSection;
