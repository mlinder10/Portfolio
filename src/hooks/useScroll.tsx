import { RefObject, useEffect, useRef } from "react";

type ObservableElementAction = {
  element: RefObject<HTMLElement | null>;
  action: (e: IntersectionObserverEntry) => void;
};

export default function useObserveScroll(
  container: RefObject<HTMLElement | null>,
  elements: ObservableElementAction[]
) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    document.getElementsByTagName("body")[0];
    function handleScroll() {
      if (container.current) {
        observer.current?.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        for (let i = 0; i < entries.length; i++) {
          elements[i].action(entries[i]);
        }
      });

      for (const element of elements) {
        if (element.element.current) {
          observer.current.observe(element.element.current);
        }
      }
    }

    if (container.current) {
      container.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      container.current?.removeEventListener("scroll", handleScroll);
    };
  }, [container]);
}
