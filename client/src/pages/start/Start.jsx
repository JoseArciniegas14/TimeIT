import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../../css/style.css";
import "../../scss/index.scss";

gsap.registerPlugin(ScrollTrigger);

function Start() {
  React.useEffect(() => {
    gsap.from("#title", { opacity: 0, duration: 1, y: -50 });
    gsap.from("#btn", { opacity: 0, duration: 1, delay: 0.5 });
    // ... rest of the gsap code
  }, []);

  return (
    <div>
      <nav class="bg-transparent fixed top-0 left-0 right-0 flex items-center justify-center p-4">
        <input type="checkbox" id="menu-toggle" class="hidden">
          {" "}
        </input>
        <label for="menu-toggle" class="text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-6 h-6"
          >
            <path d="M3 12h18M3 6h18M3 18h18"></path>
          </svg>
        </label>
        <h1 class="menu text-white text-lg font-bold ml-2">Menú</h1>
        <ul class="flex space-x-4">
          <li>
            <a href="#inicio" class="text-white"></a>
          </li>
          <li>
            <a href="#quienes-somos" class="text-white">
              Quiénes somos
            </a>
          </li>
          <li>
            <a href="#documentacion" class="text-white">
              Documentación
            </a>
          </li>
          <li>
            <a href="login.html" class="text-white">
              Entrar a la app
            </a>
          </li>
        </ul>
        <ul
          class="hidden absolute top-12 left-0 right-0 bg-white text-black p-4"
          id="menu"
        >
          <li>
            <a href="#quienes-somos" class="block py-2">
              Quiénes somos
            </a>
          </li>
          <li>
            <a href="#documentacion" class="block py-2">
              Documentación
            </a>
          </li>
          <li>
            <a href="login.html" class="block py-2">
              Entrar a la app
            </a>
          </li>
        </ul>
      </nav>

      <section id="Inicio">
        <div class="flex flex-col items-center justify-center min-h-screen">
          <h1 class="m-5 text-6xl text-center text-white p-10" id="title">
            TimeIT
          </h1>
          <div class="flex justify-center items-center">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onclick="window.location.href='login.html'"
              id="btn"
            >
              Ingresar a TimeIT
            </button>
          </div>
        </div>
      </section>
      <section
        id="quienes-somos"
        class="flex flex-row items-center justify-center min-h-screen"
      >
        <div class="w-full flex flex-col items-center justify-center">
          <h2 class="text-4xl text-white mb-8">Quiénes somos</h2>
          <p class="text-white mb-4">Jose - Desarrollador Full Stack</p>
          <p class="text-white mb-4">Robin - Desarrollador Backend</p>
          <p class="text-white mb-4">Jesus - Ingeniero de Software</p>
          <p class="text-white mb-4">Cristian - Analista de Datos</p>
        </div>
      </section>
      <div class="gallery">
        <div class="left text-white mb-4">
          <div class="desktopContent">
            <div class="desktopContentSection">
              <h1>Jose</h1>
              <p>
                Desarrollador Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Explicabo soluta, voluptas quidem modi magnam
                optio tenetur at voluptatum, magni neque odit laboriosam
                architecto nisi laborum. Incidunt et ab fugit temporibus!
              </p>
            </div>
            <div class="desktopContentSection">
              <h1>Robin</h1>
              <p>
                Desarrollador Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Harum obcaecati corporis eaque nemo porro quod,
                necessitatibus minima culpa, error deleniti similique ea qui,
                beatae fugit nostrum natus magnam accusantium. Perferendis.
              </p>
            </div>
            <div class="desktopContentSection">
              <h1>Cristian</h1>
              <p>
                Desarrollador Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Porro quia quo nesciunt quod eaque, ut quisquam minima!
                Delectus iure fugit quae minima illo, sed alias, molestias optio
                similique quam iusto.
              </p>
            </div>
            <div class="desktopContentSection">
              <h1>Jesus</h1>
              <p>
                Desarrollador Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Enim sapiente, aliquam debitis, assumenda itaque
                repudiandae voluptatum natus facilis corrupti adipisci impedit
                in ex perferendis eaque nemo, molestias laudantium possimus
                velit.
              </p>
            </div>
          </div>
        </div>

        <div class="right">
          {/* <!-- mobile content --> */}
          <div class="mobileContent">
            <div class="mobilePhoto red"></div>
            <h1>Jose</h1>
            <p>Desarrollador</p>

            <div class="mobilePhoto green"></div>
            <h1>Robin</h1>
            <p>Desarrollador</p>

            <div class="mobilePhoto pink"></div>
            <h1>Jesús</h1>
            <p>Desarrollador</p>

            <div class="mobilePhoto blue"></div>
            <h1>Cristian</h1>
            <p>Desarrollador</p>
          </div>

          {/* <!-- desktop content --> */}
          <div class="desktopPhotos">
            <div class="desktopPhoto red"></div>
            <div class="desktopPhoto green"></div>
            <div class="desktopPhoto pink"></div>
            <div class="desktopPhoto blue"></div>
          </div>
        </div>
      </div>

      <div className="spacer"></div>
    </div>
  );
}

export { Start };
