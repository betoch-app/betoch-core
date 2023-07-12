import React, { RefObject, useEffect } from "react";

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: any) => {
  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref?.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    if (ref) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return ref;
};

export default useOutsideClick;
