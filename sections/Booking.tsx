"use client";
import { useState } from "react";
import { services, studio, whatsapp } from "@/data/studio";
export function Booking() {
  const [service, setService] = useState("");
  return (
    <section id="booking" className="booking section" data-reveal>
      <div>
        <p className="eyebrow">ВАШ СЛЕДУЮЩИЙ ВИЗИТ</p>
        <h2>
          Начнём с<br />
          <em>вашего желания.</em>
        </h2>
        <p className="booking-intro">
          Выберите направление — обсудим образ,
          <br className="desktop-break" /> подберём мастера и удобное время в
          WhatsApp.
        </p>
        <div className="contact-lines">
          <p>{studio.address}</p>
          <p>
            {studio.hours} <span>·</span> {studio.phone}
          </p>
        </div>
      </div>
      <div className="booking-panel">
        <span className="step">01 / ВЫБЕРИТЕ НАПРАВЛЕНИЕ</span>
        <label htmlFor="service">На что хотите записаться?</label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Помогите определиться</option>
          {services.map((s) => (
            <option key={s.name}>{s.name}</option>
          ))}
        </select>
        <div className="next-step">
          <span>02</span>
          <p>
            Мастер и время<span>Уточним в личной переписке</span>
          </p>
        </div>
        <a
          className="button light"
          href={whatsapp(service)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Продолжить в WhatsApp <span aria-hidden="true">↗</span>
        </a>
        <p className="booking-note">
          Запись подтверждается администратором в переписке.
        </p>
        <a
          className="instagram-link"
          href={studio.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Или напишите нам в Instagram ↗
        </a>
      </div>
    </section>
  );
}
