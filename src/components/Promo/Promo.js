import './Promo.css';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__banner">
        <h1 className="promo__title">
        Учебный проект студента факультета <nobr>Веб-разработки.</nobr>
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className="promo__button">
          Узнать больше
        </button>
      </div>
    </section>
  );
};

export default Promo;
