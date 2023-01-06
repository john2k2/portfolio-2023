import { useEffect, useState } from "react";
import axios from "axios";

const AboutCompo = () => {
  const [about, setAbout] = useState([]);
  const [showText, setShowText] = useState(false);

  async function getSites() {
    const token = "Fj5mNQ2o0QmJI2CglVIt8_JjGaTnY_QXEDAdf5gBW80";
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get("https://api.netlify.com/api/v1/sites", {
      headers,
    });
    return response.data;
  }

  useEffect(() => {
    getSites().then((data) => {
      setAbout(data);
    });
  }, []);

  return (
    <section className="mx-auto w-[90vw] pb-4 xl:w-[70vw] 2xl:w-[50vw] ">
      <h2 className="py-8 text-4xl font-extrabold text-cameo md:text-6xl">
        <a name="about"></a>
        About
      </h2>
      <div className="flex items-baseline">
        <div className="hidden h-2 w-16 bg-cameo md:flex"></div>
        <p
          className="
        mb-8 w-full px-2 text-center text-xl font-bold text-white
        "
        >
          Como programador web con experiencia en HTML, CSS, JavaScript,
          Tailwind CSS, Bootstrap 5 y React JS, me he desempeñado en diversos
          proyectos de desarrollo web en los que he aplicado mis habilidades en
          estas tecnologías para crear sitios web atractivos y funcionales. Me
          gusta trabajar en equipo con otros desarrolladores y diseñadores para
          lograr resultados impresionantes y me esfuerzo por mantenerme
          actualizado con las últimas tendencias y herramientas en el campo del
          desarrollo web. Me apasiona el desarrollo web y siempre estoy buscando
          nuevas oportunidades para mejorar mis habilidades y conocimientos en
          esta área. <br />
          {!showText && (
            <a
              className=" m-8 w-full text-center text-xl font-bold capitalize text-cameo"
              href="#"
              onClick={() => setShowText(true)}
            >
              ver mas...
            </a>
          )}
        </p>
      </div>
      {showText && (
        <p className="mb-8 w-full text-center text-xl font-bold text-white">
          Además de mi experiencia en HTML, CSS, JavaScript, Tailwind CSS,
          Bootstrap 5 y React JS, también tengo habilidades en resolución de
          problemas y pensamiento lógico, lo que me permite solucionar problemas
          técnicos y encontrar soluciones creativas a desafíos en el desarrollo
          web. También tengo habilidades de comunicación y trabajo en equipo, lo
          que me permite colaborar efectivamente con otros miembros del equipo
          de desarrollo. Mi enfoque en la calidad y el detalle en mi trabajo me
          permite entregar resultados impresionantes y cumplir con los plazos
          establecidos.
        </p>
      )}
      <div className="w-full ">
        <h3 className="py-8 text-5xl font-extrabold text-cameo ">Skills</h3>
        <div className=" flex  w-full flex-wrap items-center justify-center gap-8 p-8 ">
          <div
            className="
          md:48 flex h-28 w-28 transform cursor-pointer flex-col items-center justify-center rounded-xl bg-bostonblue p-4 shadow-xl transition duration-500 ease-in-out  hover:-translate-y-1  hover:scale-110  hover:bg-palesky hover:text-white hover:shadow-lg focus:outline-none
          "
          >
            <img
              src="
            https://img.icons8.com/color/48/000000/react-native.png"
              alt=""
            />
            <p
              className="
          text-xl font-bold text-white
            "
            >
              React
            </p>
          </div>
          <div
            className="
            md:48 flex h-28 w-28 transform cursor-pointer flex-col items-center justify-center rounded-xl bg-bostonblue p-4 shadow-xl transition duration-500 ease-in-out hover:-translate-y-1  hover:scale-110  hover:bg-palesky  hover:text-white hover:shadow-lg focus:outline-none
          "
          >
            <img
              src="
            https://img.icons8.com/color/48/000000/javascript--v1.png"
              alt=""
            />
            <p
              className="
          text-xl font-bold text-white
            "
            >
              JavaScript
            </p>
          </div>
          <div
            className="
          md:48 flex h-28 w-28  transform cursor-pointer flex-col items-center justify-center rounded-xl bg-bostonblue p-4 shadow-xl transition duration-500 ease-in-out  hover:-translate-y-1  hover:scale-110  hover:bg-palesky hover:text-white hover:shadow-lg focus:outline-none
          "
          >
            <img
              src="
          https://img.icons8.com/color/48/000000/html-5--v1.png"
              alt=""
            />
            <p
              className="
          text-xl font-bold text-white
            "
            >
              HTML
            </p>
          </div>
          <div
            className="
          md:48 flex h-28 w-28  transform cursor-pointer flex-col items-center justify-center rounded-xl bg-bostonblue p-4 shadow-xl transition duration-500 ease-in-out  hover:-translate-y-1  hover:scale-110  hover:bg-palesky hover:text-white hover:shadow-lg focus:outline-none
          "
          >
            <img
              src="
          https://img.icons8.com/color/48/000000/css3.png"
              alt=""
            />
            <p
              className="
          text-xl font-bold text-white
            "
            >
              CSS
            </p>
          </div>
          <div
            className="
          md:48 flex h-28 w-28 transform cursor-pointer flex-col items-center justify-center rounded-xl bg-bostonblue p-4 shadow-xl transition duration-500 ease-in-out  hover:-translate-y-1  hover:scale-110  hover:bg-palesky hover:text-white hover:shadow-lg focus:outline-none
          "
          >
            <img
              src="
          https://img.icons8.com/color/48/000000/tailwindcss.png"
              alt=""
            />
            <p
              className="
           text-xl font-bold text-white
            "
            >
              Tailwind Css
            </p>
          </div>
          <div
            className="
          md:48 flex h-28 w-28  transform cursor-pointer flex-col items-center justify-center rounded-xl bg-bostonblue p-4 shadow-xl transition duration-500 ease-in-out  hover:-translate-y-1  hover:scale-110  hover:bg-palesky hover:text-white hover:shadow-lg focus:outline-none
          "
          >
            <img
              src="
          https://img.icons8.com/color/48/000000/bootstrap.png"
              alt=""
            />
            <p
              className="
          text-xl font-bold text-white
            "
            >
              Bootstrap
            </p>
          </div>
          <div
            className="
          md:48 flex h-28 w-28  transform cursor-pointer flex-col items-center justify-center rounded-xl bg-bostonblue p-4 shadow-xl transition duration-500 ease-in-out  hover:-translate-y-1  hover:scale-110  hover:bg-palesky hover:text-white hover:shadow-lg focus:outline-none
          "
          >
            <img
              src="
          https://img.icons8.com/color/48/000000/github--v1.png"
              alt=""
            />
            <p
              className="
          text-xl font-bold text-white
            "
            >
              Github
            </p>
          </div>
          <div
            className="
          md:48 flex h-28 w-28  transform cursor-pointer flex-col items-center justify-center rounded-xl bg-bostonblue p-4 shadow-xl transition duration-500 ease-in-out  hover:-translate-y-1  hover:scale-110  hover:bg-palesky hover:text-white hover:shadow-lg focus:outline-none
          "
          >
            <img
              src="
          https://img.icons8.com/color/48/000000/npm.png"
              alt=""
            />
            <p
              className="
          text-xl font-bold text-white
            "
            >
              NPM
            </p>
          </div>
          <div
            className="
          md:48 flex h-28 w-28  transform cursor-pointer flex-col items-center justify-center rounded-xl bg-bostonblue p-4 shadow-xl transition duration-500 ease-in-out  hover:-translate-y-1  hover:scale-110  hover:bg-palesky hover:text-white hover:shadow-lg focus:outline-none
          "
          >
            <img
              src="
          https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
              alt=""
            />
            <p
              className="
          text-xl font-bold text-white
            "
            >
              VS Code
            </p>
          </div>
          <div
            className="
          md:48 flex h-28 w-28  transform cursor-pointer flex-col items-center justify-center rounded-xl bg-bostonblue p-4 shadow-xl transition duration-500 ease-in-out  hover:-translate-y-1  hover:scale-110  hover:bg-palesky hover:text-white hover:shadow-lg focus:outline-none
          "
          >
            <img
              src="
          https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png"
              alt=""
            />
            <p
              className="
          text-xl font-bold text-white
            "
            >
              Photoshop
            </p>
          </div>
          <div
            className="
         md:48 flex h-28 w-28  transform cursor-pointer flex-col items-center justify-center rounded-xl bg-bostonblue p-4 shadow-xl transition duration-500 ease-in-out  hover:-translate-y-1  hover:scale-110  hover:bg-palesky hover:text-white hover:shadow-lg focus:outline-none
          "
          >
            <img
              src="
          https://img.icons8.com/color/48/000000/adobe-illustrator--v1.png"
              alt=""
            />
            <p
              className="
              text-xl font-bold text-white
              "
            >
              Illustrator
            </p>
          </div>
          <div
            className="
          md:48 flex h-28 w-28  transform cursor-pointer flex-col items-center justify-center rounded-xl bg-bostonblue p-4 shadow-xl transition duration-500 ease-in-out  hover:-translate-y-1  hover:scale-110  hover:bg-palesky hover:text-white hover:shadow-lg focus:outline-none
          "
          >
            <img
              src="
          https://img.icons8.com/color/48/000000/wordpress.png"
              alt=""
            />
            <p
              className="
          text-xl font-bold text-white
          "
            >
              Wordpress
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full ">
        <h2 className=" py-8  text-5xl font-extrabold text-cameo">
          <a name="portfolio"></a>
          PortFolio
        </h2>
        <div className="flex flex-wrap items-center justify-center">
          {about.map((item) => (
            <div
              key={item.id}
              className="
              relative m-4 flex w-80 flex-col items-center justify-center rounded-xl p-4 capitalize  shadow-xl transition duration-500 ease-in-out  hover:-translate-y-1  hover:scale-110  hover:bg-palesky hover:text-white hover:shadow-lg focus:outline-none md:h-60 md:w-52 lg:h-80 lg:w-80"
            >
              <a href={item.ssl_url} target="_blank" rel="noreferrer">
                <img
                  className="flex h-auto w-full object-cover"
                  src={item.screenshot_url}
                  alt={item.name}
                />
                <p className=" mt-4  w-auto text-center text-xl font-bold text-white ">
                  {item.name}
                </p>
              </a>
            </div>
          ))}
        </div>
        <div className="mb-8 flex w-full justify-center">
          <button
            className="
              mt-4 flex h-14 w-52 items-center justify-center rounded-full border-4 border-[#F9A826] bg-transparent text-xl font-bold text-white transition duration-500 ease-in-out hover:border-transparent hover:bg-[#F9A826] hover:text-white hover:shadow-lg focus:outline-none"
          >
            <a href="#">View More</a>
          </button>
        </div>
      </div>
    </section>
  );
};
export default AboutCompo;
