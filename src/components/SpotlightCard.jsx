import { useRef } from "react";

export default function SpotlightCard({
  image,
  title,
  description,
  buttonHref = null,
  githubHref = null,
  manuscriptHref = null,
  video1Href = null,
  video2Href = null,
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="
        relative h-full
        bg-slate-800
        rounded-3xl
        p-px
        before:absolute
        before:w-80
        before:h-80
        before:-left-40
        before:-top-40
        before:bg-slate-400
        before:rounded-full
        before:opacity-0
        before:pointer-events-none
        before:transition-opacity
        before:duration-500
        before:translate-x-[var(--mouse-x)]
        before:translate-y-[var(--mouse-y)]
        before:z-10
        before:blur-[100px]
        after:absolute
        after:w-96
        after:h-96
        after:-left-48
        after:-top-48
        after:bg-indigo-500
        after:rounded-full
        after:opacity-0
        after:pointer-events-none
        after:transition-opacity
        after:duration-500
        after:translate-x-[var(--mouse-x)]
        after:translate-y-[var(--mouse-y)]
        after:hover:opacity-10
        after:z-30
        after:blur-[100px]
        overflow-hidden
      "
    >
      <div
        className="
          relative h-full
          bg-slate-900
          p-6 pb-8
          rounded-[inherit]
          z-20
          overflow-hidden
        "
      >
        {/* Radial gradient */}
        <div
          className="
            absolute
            bottom-0
            translate-y-1/2
            left-1/2
            -translate-x-1/2
            pointer-events-none
            -z-10
            w-1/2
            aspect-square
          "
          aria-hidden="true"
        >
          <div
            className="
              absolute inset-0
              bg-slate-800
              rounded-full
              blur-[80px]
            "
          />
        </div>

        <div className="flex flex-col h-full items-center text-center">

          {/* Image */}
          <div className="relative inline-flex">
            <div
              className="
                w-[40%]
                h-[40%]
                absolute
                inset-0
                m-auto
                -translate-y-[10%]
                blur-3xl
                -z-10
                rounded-full
                bg-indigo-600
              "
              aria-hidden="true"
            />

            <img
              className="inline-flex"
              src={image}
              width="200"
              height="200"
              alt={title}
            />
          </div>

          {/* Text */}
          <div className="grow mb-5">
            <h2 className="text-xl text-slate-200 font-bold mb-1">
              {title}
            </h2>

            <p className="text-sm text-slate-500">
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3">

            {/* View Project */}
            {buttonHref && (
              <a
                href={buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  justify-center
                  items-center
                  whitespace-nowrap
                  rounded-lg
                  bg-indigo-600
                  hover:bg-indigo-500
                  px-3
                  py-1.5
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  duration-150
                "
              >
                View Project
              </a>
            )}

            {/* GitHub */}
            {githubHref && (
              <a
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  justify-center
                  items-center
                  whitespace-nowrap
                  rounded-lg
                  bg-slate-800
                  hover:bg-slate-700
                  border
                  border-slate-700
                  px-3
                  py-1.5
                  text-sm
                  font-medium
                  text-slate-300
                  transition-colors
                  duration-150
                "
              >
                GitHub
              </a>
            )}

            {/* Manuscript */}
            {manuscriptHref && (
              <a
                href={manuscriptHref}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  justify-center
                  items-center
                  whitespace-nowrap
                  rounded-lg
                  bg-slate-800
                  hover:bg-slate-700
                  border
                  border-slate-700
                  px-3
                  py-1.5
                  text-sm
                  font-medium
                  text-slate-300
                  transition-colors
                  duration-150
                "
              >
                Manuscript
              </a>
            )}

            {/* Video 1 */}
            {video1Href && (
              <a
                href={video1Href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  justify-center
                  items-center
                  whitespace-nowrap
                  rounded-lg
                  bg-slate-800
                  hover:bg-slate-700
                  border
                  border-slate-700
                  px-3
                  py-1.5
                  text-sm
                  font-medium
                  text-slate-300
                  transition-colors
                  duration-150
                "
              >
                Video 1
              </a>
            )}

            {/* Video 2 */}
            {video2Href && (
              <a
                href={video2Href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  justify-center
                  items-center
                  whitespace-nowrap
                  rounded-lg
                  bg-slate-800
                  hover:bg-slate-700
                  border
                  border-slate-700
                  px-3
                  py-1.5
                  text-sm
                  font-medium
                  text-slate-300
                  transition-colors
                  duration-150
                "
              >
                Video 2
              </a>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}