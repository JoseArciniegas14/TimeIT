import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "../../css/style.css";

gsap.registerPlugin(ScrollTrigger);

function Start() {
  React.useEffect(() => {
    gsap.from("#title", { opacity: 0, duration: 1, y: -50 });
    gsap.from("#btn", { opacity: 0, duration: 1, delay: 0.5 });
    // ... rest of the gsap code

    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)"
    );
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    // create
    let mm = gsap.matchMedia();

    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 600px)", () => {
      // this setup code only runs when viewport is at least 600px wide

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      });

      //create scrolltrigger for each details section
      //trigger photo animation when headline of each details section
      //reaches 80% of window height
      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1");
        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false,
        });
      });

      return () => {
        // optional
        // custom cleanup code here (runs when it STOPS matching)
        console.log("mobile");
      };
    });
  }, []);

  return (
    <div className="bg-neutral-900">
      <nav className="bg-transparent fixed top-0 left-0 right-0 flex items-center justify-center p-4">
        <input type="checkbox" id="menu-toggle" className="hidden" />
        <label htmlFor="menu-toggle" className="text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M3 12h18M3 6h18M3 18h18"></path>
          </svg>
        </label>
        <h1 className="menu text-white text-lg font-bold ml-2">Menú</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#inicio" className="text-white"></a>
          </li>
          <li>
            <a href="#quienes-somos" className="text-white">
              Quiénes somos
            </a>
          </li>
          <li>
            <a href="#documentacion" className="text-white">
              Documentación
            </a>
          </li>
          <li>
            <Link to="/auth" className="text-white">
              Entrar a la app
            </Link>
          </li>
        </ul>
        <ul
          className="hidden absolute top-12 left-0 right-0 bg-white text-black p-4"
          id="menu"
        >
          <li>
            <a href="#quienes-somos" className="block py-2">
              Quiénes somos
            </a>
          </li>
          <li>
            <a href="#documentacion" className="block py-2">
              Documentación
            </a>
          </li>
          <li>
            <Link to="/auth" className="block py-2">
              Entrar a la app
            </Link>
          </li>
        </ul>
      </nav>

      <section id="Inicio">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="m-5 text-6xl text-center text-white p-10" id="title">
            TimeIT
          </h1>
          <div className="flex justify-center items-center">
            <Link
              to="/auth"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Ingresar a TimeIT
            </Link>
          </div>
        </div>
      </section>
      <section
        id="quienes-somos"
        className="flex flex-row items-center justify-center min-h-screen"
      >
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-4xl text-white mb-8">Quiénes somos</h2>
          <p className="text-white mb-4">Jose - Desarrollador Full Stack</p>
          <p className="text-white mb-4">Robin - Desarrollador Backend</p>
          <p className="text-white mb-4">Jesus - Ingeniero de Software</p>
          <p className="text-white mb-4">Cristian - Analista de Datos</p>
        </div>
      </section>
      <div className="gallery">
        <div className="left text-white mb-4">
          <div className="desktopContent">
            <div className="desktopContentSection">
              <h1>Jose</h1>
              <p>
                Desarrollador Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Explicabo soluta, voluptas quidem modi magnam
                optio tenetur at voluptatum, magni neque odit laboriosam
                architecto nisi laborum. Incidunt et ab fugit temporibus!
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>Robin</h1>
              <p>
                Desarrollador Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Harum obcaecati corporis eaque nemo porro quod,
                necessitatibus minima culpa, error deleniti similique ea qui,
                beatae fugit nostrum natus magnam accusantium. Perferendis.
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>Cristian</h1>
              <p>
                Desarrollador Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Porro quia quo nesciunt quod eaque, ut quisquam minima!
                Delectus iure fugit quae minima illo, sed alias, molestias optio
                similique quam iusto.
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>Jesus</h1>
              <p>
                Desarrollador Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Enim sapiente, aliquam debitis, assumenda itaque
                repudiandae voluptatum natus facilis corrupti adipisci impedit
                in ex perferendis eaque nemo, molestias laudantium possimus
                velit.
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>Julian</h1>
              <p>
                Desarrollador Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Harum obcaecati corporis eaque nemo porro quod,
                necessitatibus minima culpa, error deleniti similique ea qui,
                beatae fugit nostrum natus magnam accusantium. Perferendis.
              </p>
            </div>
          </div>
        </div>

        <div className="right">
          {/* <!-- mobile content --> */}
          <div className="mobileContent">
            <div className="mobilePhoto red"></div>
            <h1>Jose</h1>
            <p>Desarrollador</p>

            <div className="mobilePhoto green"></div>
            <h1>Robin</h1>
            <p>Desarrollador</p>

            <div className="mobilePhoto pink"></div>
            <h1>Jesús</h1>
            <p>Desarrollador</p>

            <div className="mobilePhoto blue"></div>
            <h1>Cristian</h1>
            <p>Desarrollador</p>

            <div className="mobilePhoto black"></div>
            <h1>Julian</h1>
            <p>Desarrollador</p>
          </div>



          {/* <!-- desktop content --> */}
          <div className="desktopPhotos">
            <div className="desktopPhoto red"></div>
            <div className="desktopPhoto green"></div>
            <div className="desktopPhoto pink"></div>
            <div className="desktopPhoto blue"></div>
            <div className="desktopPhoto black"></div>
          </div>
        </div>
      </div>

      <div className="spacer"></div>
      <section
    id="documentacion">
      <h1 className="text-white mb-4 text-center">Documentación</h1>
            <div class="ui raised very padded text container segment">
  <h2 class="ui header">Hola</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in cupiditate numquam beatae pariatur maxime nulla? Nobis cum consequuntur, delectus facilis reiciendis doloribus debitis ducimus harum quasi sint soluta dolore.</p>
  <p></p>
</div>
    </section>

<section id="footer">
  {/* Footer */}
  <footer className="bg-gray-800 py-4">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h2 className="text-white text-lg font-semibold">TimeIT</h2>
          <p className="text-gray-400 mt-2">Tu plataforma de gestión de tiempo</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-white text-lg font-semibold mb-2">Enlaces</h3>
          <ul className="text-gray-400">
            <li className="mb-1"><a href="#" className="hover:text-white">Inicio</a></li>
            <li className="mb-1"><a href="#" className="hover:text-white">Acerca de</a></li>
            <li className="mb-1"><a href="#" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-white text-lg font-semibold mb-2">Redes Sociales</h3>
          <ul className="text-gray-400">
            <li className="mb-1"><a href="#" className="hover:text-white">Facebook</a></li>
            <li className="mb-1"><a href="#" className="hover:text-white">Twitter</a></li>
            <li className="mb-1"><a href="#" className="hover:text-white">Instagram</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-white text-lg font-semibold mb-2">Contacto</h3>
          <p className="text-gray-400">Email: info@timeit.com</p>
          <p className="text-gray-400">Teléfono: +1234567890</p>
        </div>
      </div>
    </div>
  </footer>
</section>
    


    </div>

  );
}

export { Start };
