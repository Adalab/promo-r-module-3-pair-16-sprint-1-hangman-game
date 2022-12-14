import '../styles/App.scss';
import { useState } from 'react';

function App() {
  // constantes
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState([]);
  const [word, setWord] = useState('katakroker');

  // listeners
  const handleClick = () => {
    setNumberOfErrors(numberOfErrors + 1);
  };

  const handleUserLetter = (ev) => {
    let userLetter = ev.target.value;

    if (
      /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]$/.test(userLetter) === true ||
      ev.target.value === ''
    ) {
      setLastLetter(userLetter);
    } else {
      console.log('letra no válida');
      // se puede añadir mensaje para el usuario avisando de letra no válida
    }
  };

  // renderFunctions

  // ----------> nos hemos quedado en la lección 4, ejercicio 2. Modificando un array del estado

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');

    return wordLetters.map((eachLetter) => {
      //nos falta el key
      return <li className="letter"></li>;
    });
  };

  return (
    <div>
      <div className="page">
        <header>
          <h1 className="header__title">Juego del ahorcado</h1>
        </header>
        <main className="main">
          <section>
            <div className="solution">
              <h2 className="title">Solución:</h2>
              <ul className="letters">{renderSolutionLetters()}</ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">
                {/* <li className="letter">f</li>
                <li className="letter">q</li>
                <li className="letter">h</li>
                <li className="letter">p</li>
                <li className="letter">x</li> */}
              </ul>
            </div>
            <form className="form">
              <label className="title" htmlFor="last-letter">
                Escribe una letra:
              </label>
              <input
                pattern="/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1,50}$/"
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                onChange={handleUserLetter}
                value={lastLetter}
              />
            </form>
          </section>
          <section className={`dummy error-${numberOfErrors}`}>
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9 line"></span>
            <span className="error-8 line"></span>
            <span className="error-7 line"></span>
            <span className="error-6 head"></span>
            <span className="error-5 line"></span>
            <span className="error-4 line"></span>
            <span className="error-3 line"></span>
            <span className="error-2 line"></span>
            <span className="error-1 line"></span>
          </section>
          <input
            value="incrementar"
            type="button"
            onClick={handleClick}
          ></input>
        </main>
      </div>
    </div>
  );
}

export default App;
