import { useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setHeight } from "../store";
import throttle from "lodash.throttle";

const useScrollPosition = (divRef) => {
  const scrollTopRef = useRef(0);
  const dispatch = useDispatch();
  const scrolledHeight = useSelector((store) => store.scrolledHeight);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (divRef.current) {
        scrollTopRef.current = divRef.current.scrollTop;
        dispatch(setHeight(scrollTopRef.current));
      }
    }, 200);

    const div = divRef.current;

    if (div) {
      div.scrollTop = scrolledHeight;
      div.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (div) {
        div.removeEventListener("scroll", handleScroll);
      }
    };
  }, [divRef, dispatch, scrolledHeight]);

  return scrollTopRef;
};

export default useScrollPosition;
