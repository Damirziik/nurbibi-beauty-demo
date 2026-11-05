import { Header } from "@/components/Header";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Services } from "@/sections/Services";
import { Gallery } from "@/sections/Gallery";
import { Booking } from "@/sections/Booking";
import { studio } from "@/data/studio";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к содержимому
      </a>
      <Header />
      <main id="main">
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">КАСКЕЛЕН · BEAUTY STUDIO</p>
            <h1>
              Ваша красота.
              <br />
              <em>Ваш характер.</em>
            </h1>
            <p className="hero-description">
              Пространство стиля и гармонии.
              <br />
              Макияж, волосы и внимание к каждой детали.
            </p>
            <div className="hero-actions">
              <a className="button" href="#booking">
                Выбрать свой образ <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#services">
                Наши услуги <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-bottom">
              <span>NURBIBI BEAUTY STUDIO</span>
              <span>С любовью к вашей индивидуальности</span>
            </div>
          </div>
          <div className="hero-visual">
            <Photo
              name="hero"
              alt="Работа Nurbibi Beauty Studio: макияж в тёплых оттенках и вечерняя причёска"
              priority
            />
            <div className="photo-label">
              <span>THE ART OF BEING YOU</span>
              <span>01 / NURBIBI</span>
            </div>
            <span className="hero-seal" aria-hidden="true">
              NB<span>BEAUTY STUDIO</span>
            </span>
          </div>
        </section>
        <div className="ribbon" aria-hidden="true">
          <span>MAKEUP</span>
          <i>✧</i>
          <span>HAIR</span>
          <i>✧</i>
          <span>NAILS</span>
          <i>✧</i>
          <span>BROWS</span>
          <i>✧</i>
          <span>LASHES</span>
        </div>
        <section id="about" className="section about" data-reveal>
          <p className="eyebrow">ЗНАКОМЬТЕСЬ, NURBIBI</p>
          <div>
            <h2>
              Место, где можно
              <br />
              побыть <em>собой.</em>
            </h2>
            <div className="about-text">
              <p>
                Nurbibi Beauty Studio — пространство красоты в Каскелене. Здесь
                создают макияж и причёски, работают с цветом волос, оформляют
                брови и ресницы, ухаживают за ногтями.
              </p>
              <p>
                Приходите с идеей, фотографией или просто желанием перемен.
                Начнём с того, что нравится именно вам.
              </p>
            </div>
          </div>
        </section>
        <Services />
        <Gallery />
        <Booking />
      </main>
      <footer className="footer">
        <a className="wordmark" href="#home">
          NURBIBI<span>BEAUTY STUDIO</span>
        </a>
        <a href={studio.instagram} target="_blank" rel="noopener noreferrer">
          @nurbibi.beauty.studio ↗
        </a>
        <span>Каскелен, Казахстан</span>
        <small>Concept website · 2026</small>
      </footer>
      <Reveal />
    </>
  );
}
