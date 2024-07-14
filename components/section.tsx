import anime from "animejs";
import { useEffect, useRef, useState } from "react";
import { Wrapper } from "./wrapper";

type Props = {
  description: string[];
  title: string;
};

export function Section({ description, title }: Props) {
  const [index, setIndex] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const childSpan = document.createDocumentFragment();
    for (const chat of description[index]) {
      const span = document.createElement("span");
      span.className = "letter";
      span.style.opacity = "0";
      span.appendChild(document.createTextNode(chat));
      childSpan.appendChild(span);
    }
    textRef.current.innerHTML = "";
    textRef.current.appendChild(childSpan);

    const animation = anime.timeline({
      targets: document.querySelectorAll(".letter"),
      delay: anime.stagger(100),
      loop: false,
    });

    animation.add({
      opacity: 1,
      complete: () => {
        if (index === description.length - 1) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
      },
    });
  }, [index, description]);

  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 lg:text-4xl dark:text-white">
        {title}
      </h2>
      <div
        ref={textRef}
        className="text-base text-slate-600 lg:text-lg dark:text-slate-400"
      />
    </>
  );
}
