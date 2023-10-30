import { IconHammer, IconStairs } from "@tabler/icons-react";
import { IconCoin, IconHeartHandshake, IconWall } from "@tabler/icons-react";
import { useState } from "react";

export const requerimientos = [
  {
    name: "Dinero",
    IconComp: IconCoin,
    description:
      "Se necesitan alrededor de 1'200.000 jardines en todo Bogotá con dinero recaudado en conjunto con la secretaria de ambiente y el distrito. Esto equivale al menos a 30.000 millones de pesos.",
    img: "https://alponiente.com/wp-content/uploads/2021/11/OVRCF3SJERFWNA5EP633KZJRWY.jpg",
  },
  {
    name: "Materiales",
    IconComp: IconWall,
    description:
      "Se usara alrededor de 52.800 m² de lona tensada, cuerdas, sistema tensor, mangueras, tierra negra, regaderas para el mantenimiento y plantas, en general una conocida como Tulsí.",
    img: "https://cdn.britannica.com/87/207887-050-F48CB55D/basil.jpg",
  },
  {
    name: "Alianzas",
    IconComp: IconHeartHandshake,
    description:
      "Junto con el distrito y la secretaría de ambiente, compraremos los recursos necesarios y los pondremos a disposición de la ciudadania para mejorar las condiciones de salud. A partir de ese momento, nuestro equipo estará dispuesto para el manteminiento necesario.",
    img: "https://3.bp.blogspot.com/-rMXKd53odMI/WbbW3BgeEKI/AAAAAAAAAHM/8jN5SH-gN0whl7qllC7NklH5bcVBirPvACLcBGAs/s1600/Los%2BAcuerdos%2Bde%2BCooperaci%25C3%25B3n%2BEstrat%25C3%25A9gicos%2B%2528ACE%2529.jpg",
  },
  {
    name: "Mantenimiento",
    IconComp: IconHammer,
    description:
      "Nos encargaremos del mantenimiento de los jardines, lo cual incluye reparar los jardines, mantener firmes las lonas, monitorear las plantas y regarlas si es necesario.",
    img: "https://i.imgur.com/unJLQZc.png",
  },
  {
    name: "Metodología",
    IconComp: IconStairs,
    description: (
      <>
        <ol>
          <li>Estudio ambiental de la zona </li>
          <li>Estudio estructural a las fachadas</li>
          <li>Análisis de viabilidad y seguridad </li>
          <li>Producción y manufactura de piezas a la medida </li>
          <li>Instalación de anclajes, cuerdas, lona, sistema de riego</li>
          <li>Prueba de resistencia </li>
          <li>Instalación y pruebas sistemas de monitoreo </li>
          <li>Se esparce el sustrato geotextil </li>
          <li>Introducción de la vegetación por medio de semillas </li>
          <li>Mantenimiento periodico</li>
        </ol>
      </>
    ),
  },
];

export default () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-2 px-2 xl:px-8 p-4 w-[90%] mx-auto">
        <h1 className="font-semibold w-full text-2xl xl:text-4xl mb-4 text-center xl:text-left">
          Requerimientos
        </h1>
        <div className="grid grid-cols-2 grid-rows-3 xl:grid-rows-1 xl:grid-cols-5 gap-2 xl:gap-8 w-full xl:w-[80%] mx-auto p-2 h-full">
          {requerimientos.map((r, i) => (
            <div
              key={r.name}
              onClick={() => setActive(i)}
              className={`flex-1 flex flex-col gap-4 items-center justify-center h-full shadow-md xl:shadow-xl rounded-xl border border-stone-200 cursor-pointer p-3 xl:py-12`}
            >
              <r.IconComp size={85} stroke={1} className="text-teal-600 " />
              <p className="text-base xl:text-xl">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center relative bg-gradient-to-t from-teal-500 to-indigo-400 flex-1 pt-4 xl:pt-0 mt-[15vh]">
        <div className="w-[95%] xl:w-[70%] h-full bg-white p-4 xl:p-8 top-[-10vh] translate-y-[-15vh] rounded-xl shadow-xl border border-stone-200">
          <h2 className="font-semibold text-3xl text-center xl:text-left">
            {requerimientos[active].name}
          </h2>
          <div className="flex flex-col xl:flex-row items-center h-full">
            {(() => {
              const a = requerimientos[active];

              return (
                <>
                  <div className="flex items-center justify-center xl:mx-[5%]">
                    <a.IconComp
                      size={90}
                      stroke={1}
                      className="text-teal-600"
                    />
                  </div>
                  <div className="flex flex-col gap-2 h-full">
                    <p className="p-4 text-xl">{a.description}</p>
                    {a?.img && (
                      <div className="flex items-center justify-center mb-8 h-[30vh] w-full xl:w-[50%] mx-auto bg-stone-100 rounded-md overflow-hidden">
                        <img
                          src={a?.img}
                          className="w-full h-full object-cover bottom-0"
                        />
                      </div>
                    )}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </>
  );
};
