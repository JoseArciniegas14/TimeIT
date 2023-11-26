import React from 'react';

const Menu = () => {
  const handleMenuItemClick = (event) => {
    // Remover la clase "--active" de todos los elementos del menú
    document.querySelectorAll('.text--menu').forEach((item) => {
      item.classList.remove('--active');
    });

    // Agregar la clase "--active" al elemento clickeado
    event.target.classList.add('--active');

    // Obtener el elemento "rectangle" correspondiente al elemento clickeado
    const rectangle = event.target.nextElementSibling;

    // Remover la clase "--active" de todos los elementos "rectangle"
    document.querySelectorAll('.rectangle').forEach((rect) => {
      rect.classList.remove('--active');
    });

    // Agregar la clase "--active" al elemento "rectangle" correspondiente
    rectangle.classList.add('--active');
  };

  return (
    <body class="m-0">
    <div class="MENU relative w-full h-24 ">
        <div class="logo-with-text absolute w-48 h-12">
            <img class="icono-menu absolute w-12 h-12 top-0 left-0" src="img/icono-menu.svg" />
        <div class="titulo absolute h-10 font-semibold text-3xl text-center tracking-normal">TimeiT</div>
        </div>
            <div class="HABITOS-MENU-BUTTON absolute w-20 h-8">
                <a class="text--menu absolute text-xl font-bold left-0 h-8 tracking-normal text-center no-underline" href="habitos.html">Hábitos</a>
                <div class="rectangle w-full bg-gray-600 absolute h-1 left-0 rounded"></div>
            </div>
            <div class="NOTAS-MENU-BUTTON absolute w-16 h-8">
                <a class="text--menu absolute text-xl font-bold left-0 h-8 tracking-normal text-center no-underline" href="notas.html">Notas</a>
                <div class="rectangle w-full bg-gray-600 absolute h-1 left-0 rounded"></div>
            </div>
            <div class="RECORDATORIO-MENU absolute w-40 h-8">
                <a class="text--menu absolute text-xl font-bold left-0 h-8 tracking-normal text-center no-underline" href="recordatorio.html">Recordatorios</a>
                <div class="rectangle w-full bg-gray-600 absolute h-1 left-0 rounded"></div>
            </div>
            <div class="INICIO-MENU-BUTTON absolute w-16 h-8">
                <a class="text--menu--active absolute  text-xl font-bold left-0 h-8 tracking-normal text-center no-underline" href="index.html">Inicio</a>
                <div class="rectangle--active w-full bg-gray-400 absolute h-1 left-0 rounded"></div>
            </div>
            <div class="PROFILE absolute w-48 h-12">
                <img class="PROFILE-ICON absolute w-12 h-12 top-0 object-cover" src="img/PROFILE-ICON.png" />
                <div class="PROFILE-NAME absolute h-8 left-0 font-extrabold text-gray-600 text-xl text-center tracking-normal">NAME</div>
            </div>
           

    </div>
    
</body>
  );
};

const App = () => {
  return (
    <>
      <Menu />
      <div className="box">
        <div className="BACKGROUND-CINTA relative h-full top-0 left-0 bg-gray-900"></div>
      </div>

    </>
  );
};

export default App;
