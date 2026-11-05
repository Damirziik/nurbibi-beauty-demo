import { services, whatsapp } from "@/data/studio";
export function Services() {
  return (
    <section id="services" className="section services">
      <div className="services-intro" data-reveal>
        <p className="eyebrow">НАПРАВЛЕНИЯ</p>
        <h2>
          Ваш образ.
          <br />
          <em>Наше внимание.</em>
        </h2>
        <p>
          От любимого ежедневного ритуала
          <br />
          до подготовки к важному событию.
        </p>
        <span className="service-mark" aria-hidden="true">
          NB
        </span>
      </div>
      <div className="service-list">
        {services.map((s, i) => (
          <details key={s.name} data-reveal>
            <summary>
              <span className="service-number">0{i + 1}</span>
              <h3>{s.name}</h3>
              <span className="service-en">{s.en}</span>
              <span className="plus" aria-hidden="true">
                +
              </span>
            </summary>
            <div className="service-detail">
              <p>{s.text}</p>
              <a
                href={whatsapp(s.name)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Уточнить стоимость и записаться ↗
              </a>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
