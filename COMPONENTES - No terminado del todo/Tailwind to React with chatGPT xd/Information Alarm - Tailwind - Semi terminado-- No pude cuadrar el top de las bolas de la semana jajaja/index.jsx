import React from 'react';
import './globals.css';
import './css/styleguide.css';
import './css/style.css';

const App = () => {
  const switchButtonRef = React.useRef(null);
  const sphereContainerRef = React.useRef(null);
  const arrowButtons = document.querySelectorAll('.arrow');
  const ellipses = document.querySelectorAll('.ellipse, .ellipse-2, .ellipse-3, .ellipse-4, .ellipse-5, .ellipse-6, .ellipse-7');

  const handleSwitchButtonClick = () => {
    switchButtonRef.current.classList.toggle('left');
    sphereContainerRef.current.classList.toggle('left');
  };

  const handleArrowButtonClick = (button) => {
    button.classList.toggle('ejey');
  };

  const handleEllipseClick = (ellipse) => {
    ellipses.forEach((otherEllipse) => {
      if (otherEllipse !== ellipse) {
        otherEllipse.classList.remove('hover');
      }
    });
    ellipse.classList.toggle('hover');
  };

  React.useEffect(() => {
    switchButtonRef.current.addEventListener('click', handleSwitchButtonClick);

    arrowButtons.forEach((button) => {
      button.addEventListener('click', () => handleArrowButtonClick(button));
    });

    ellipses.forEach((ellipse) => {
      ellipse.addEventListener('click', () => handleEllipseClick(ellipse));
    });

    return () => {
      switchButtonRef.current.removeEventListener('click', handleSwitchButtonClick);
      arrowButtons.forEach((button) => {
        button.removeEventListener('click', () => handleArrowButtonClick(button));
      });
      ellipses.forEach((ellipse) => {
        ellipse.removeEventListener('click', () => handleEllipseClick(ellipse));
      });
    };
  }, []);

  return (
    <div class="alarm-information relative bg-black">
      <div class="overlap absolute rounded">
        <div class="time-rectangle absolute h-56 rounded">

            <div class="rectangle h-56 top-0 left-0 bg-gray-900 absolute rounded"></div>
            <div class="time-hour absolute h-48">
              <div class="time--day--night absolute h-12 font-semibold text-white text-3xl text-center tracking-normal">a.m.</div>
              <div class="time--tittle absolute h-48 left-0 font-semibold text-white text-center tracking-normal">4:50</div>
            </div>

        </div>

        <div class="calendar-week relative h-20">
              <div class="rectangle-2 h-20 top-0 left-0 bg-gray-900 rounded">
                <div class="ellipse relative w-12 h-12">
                  <div class="text-calendar relative h-8 font-semibold text-black text-xl text-center tracking-normal">SU</div>
                </div>
                <div class="ellipse-2 relative w-12 h-12">
                  <div class="text-calendar-2 relative h-8 font-semibold text-black text-xl text-center tracking-normal">MO</div>
                </div>
                <div class="ellipse-3 relative w-12 h-12">
                  <div class="text-calendar-3 relative h-8 font-semibold text-black text-xl text-center tracking-normal">TU</div>
                </div>
                <div class="ellipse-4 relative w-12 h-12">
                  <div class="text-calendar-4 relative h-8 font-semibold text-black text-xl text-center tracking-normal">WE</div>
                </div>
                <div class="ellipse-5 relative w-12 h-12">
                  <div class="text-calendar-5 relative h-8 font-semibold text-black text-xl text-center tracking-normal">TH</div>
                </div>
                <div class="ellipse-6 relative w-12 h-12">
                  <div class="text-calendar-6 relative h-8 font-semibold text-black text-xl text-center tracking-normal">FR</div>
                </div>
                <div class="ellipse-7 relative w-12 h-12">
                  <div class="text-calendar-7 relative h-8 font-semibold text-black text-xl text-center tracking-normal">SA</div>
                </div>

            </div>
        </div>


        <div class="notification absolute h-20">
          <div class="rectangulo--container relative h-20 rounded">
            <div class="rectangle-2 h-20 top-0 left-0 bg-gray-900 absolute rounded"></div>
            <div class="title-rectangle absolute h-8 font-semibold text-white text-xl text-center tracking-normal">10 minutos</div>
            <img class="img absolute w-12 h-12" src="img/bell-pin-fill.svg" />
            <img class="arrow relative w-8 h-8" src="img/arrow-down.svg" />
          </div>
        </div>


        <div class="song absolute h-20">
          <div class="rectangulo--container relative h-20 rounded">
            <div class="rectangle-2 h-20 top-0 left-0 bg-gray-900 absolute rounded"></div>
            <img class="img absolute w-12 h-12" src="img/musicnote.svg" />
            <div class="title-rectangle absolute h-8 font-semibold text-white text-xl text-center tracking-normal">Predeterminado</div>
            <img class="arrow relative w-8 h-8" src="img/arrow-down.svg" />
          </div>
        </div>


        <div class="interval absolute h-20">
          <div class="rectangulo--container relative h-20 rounded">
            <div class="rectangle-2 h-20 top-0 left-0 bg-gray-900 absolute rounded"></div>
            <div class="title-rectangle absolute h-8 font-semibold text-white text-xl text-center tracking-normal">Seleccionar intervalos</div>
            <img class="arrow relative w-8 h-8" src="img/arrow-down.svg" />
            <img class="img absolute w-12 h-12" src="img/rotate-left.svg" />
          </div>
        </div>


        <div class="overlap-2 absolute h-56">
          <div class="state-rectangle absolute h-56 top-0 left-0">
            <p class="text-time-remaining absolute h-6 font-medium text-white text-base text-center tracking-normal">La alarma sonara en 15 horas y 27 minutos</p>
            <div class="state-text absolute h-12 font-semibold text-white text-4xl text-center tracking-normal">Estado</div>
          </div>
          <div class="sphere-container absolute w-32 h-14"><div class="sphere relative w-12 h-12 bg-gray-400"></div></div>
        </div>


        <div class="rectangle-note absolute rounded">
          <div class="title-note absolute h-8 font-normal text-white text-2xl text-center tracking-normal">Titulo Nota 3</div>
          <div class="rectangle-3 w-64 h-1 bg-gray-400 absolute rounded"></div>
          <div class="text-note absolute h-6 font-normal text-white text-base text-center tracking-normal">Añadir texto</div>
        </div>
      </div>

      
      <img class="edit-light absolute w-16 h-16" src="img/edit-light.svg" />
      <div class="menu absolute w-12 h-10 rounded">
        <div class="rectangle-4 w-8 h-0 absolute rounded"></div>
        <div class="rectangle-5 w-8 h-0 absolute rounded"></div>
        <div class="rectangle-6 w-8 h-0 absolute rounded"></div>
      </div>
    </div>

  );
};

export default App;


