"use client";
import { useRef, useState } from "react";
import { Photo } from "@/components/Photo";
import { studio, works } from "@/data/studio";
export function Gallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  function open(index: number) {
    setSelected(index);
    dialog.current?.showModal();
  }
  const work = works[selected];
  return (
    <section id="works" className="section gallery-section">
      <div className="section-heading" data-reveal>
        <div>
          <p className="eyebrow">ПОРТФОЛИО СТУДИИ</p>
          <h2>
            Красота
            <br />
            <em>в деталях.</em>
          </h2>
        </div>
        <p>
          Несколько образов наших мастеров.
          <br />
          Больше работ и жизни студии — в Instagram.
        </p>
      </div>
      <div className="gallery">
        {works.map((w, i) => (
          <figure key={w.image} className={`work work-${i}`} data-reveal>
            <button
              onClick={() => open(i)}
              aria-label={`Открыть фото: ${w.title}`}
            >
              <Photo name={w.image} alt={w.alt} />
              <span className="zoom" aria-hidden="true">
                ↗
              </span>
            </button>
            <figcaption>
              <span>{w.title}</span>
              <small>{w.category}</small>
            </figcaption>
          </figure>
        ))}
      </div>
      <a
        className="text-link"
        href={studio.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        Больше образов в Instagram <span aria-hidden="true">↗</span>
      </a>
      <dialog
        ref={dialog}
        aria-label={work.title}
        className="lightbox"
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current.close();
        }}
      >
        <button
          autoFocus
          className="close-dialog"
          aria-label="Закрыть фото"
          onClick={() => dialog.current?.close()}
        >
          ×
        </button>
        <Photo name={work.image} alt={work.alt} />
        <div className="lightbox-caption">
          <p>{work.title}</p>
          <a
            href={`https://www.instagram.com/nurbibi.beauty.studio/reel/${work.post}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Публикация в Instagram ↗
          </a>
        </div>
      </dialog>
    </section>
  );
}
