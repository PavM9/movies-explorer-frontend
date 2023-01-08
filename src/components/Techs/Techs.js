import './Techs.css';

const Techs = () => {
  return (
    <section className="container techs" id="techs">
      <h2 className="main__heading">Технологии</h2>
      <div className="techs__content">
        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__subtitle">
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии,
          которые применили в&nbsp;дипломном проекте.
        </p>
        <ul className='techs__stack'>
          <li className='techs__stack-item'>HTML</li>
          <li className='techs__stack-item'>CSS</li>
          <li className='techs__stack-item'>JS</li>
          <li className='techs__stack-item'>React</li>
          <li className='techs__stack-item'>Git</li>
          <li className='techs__stack-item'>Express.js</li>
          <li className='techs__stack-item'>mongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
