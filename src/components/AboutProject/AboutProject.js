import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="container about" id="about">
      <h3 className="main__heading">О проекте</h3>
      <div className="about__columns">
        <div className="about__column">
          <h3 className="about__heading">Дипломный проект включал 5 этапов</h3>
          <p className="about__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__column">
          <h3 className="about__heading">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__schedule">
        <div className="about__backend">
          <div className="about__bar about__bar_type_backend">1 неделя</div>
          <span className="about__label">Back-end</span>
        </div>
        <div className="about__frontend">
          <div className="about__bar">4 недели</div>
          <span className="about__label">Front-end</span>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
