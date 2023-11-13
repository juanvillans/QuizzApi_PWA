import React from "react";

export default function Question(props) {

  const [options, setOptions] = React.useState([]);
  React.useEffect(() => {
    let mix = [...props.incorrect];
    console.log('cargaron las opciones')
    mix.splice(Math.trunc(Math.random() * 4), 0, props.correct);
    setOptions(mix);
  }, [props.title]);

  const lis = options.map((option, i) => {
    let statusStyle = "transparent";

    if (props.selected[props.id] == option) {
      statusStyle = "bg-color3 border-color3";
    } else statusStyle = "border-color1";

    if (props.allowResults) {
      if (props.correct == option) {
        statusStyle = "bg-green-300 border-green-300";
      } else if (props.selected[props.id] == option ) {
          statusStyle = "opacity-75 bg-red-200 border-red-200"
      } else statusStyle = "opacity-75 border-color2"
    }
    return (
      <li
        className={
          `${statusStyle}z-50 relative cursor-pointer rounded-lg border font-medium  px-3 text-xs py-1`
        }
        key={props.id}
        onClick={() => props.toggleAnswer(props.id, option)}
      >
        {decodeURIComponent(option)}
      </li>
    );
  });

  return (
    <article className="relative border-b-2 z-50 py-6 border-col ">
      <h2 className=" font-bold z-50  sm:text-xl mb-3">{decodeURIComponent(props.title)}</h2>
      <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6 z-50">{lis}</ul>
    </article>
  );
}
