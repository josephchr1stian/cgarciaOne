

import React from "react";
import {Twitter} from "next/dist/lib/metadata/types/twitter-types";
import {TwitterMetadata} from "next/dist/lib/metadata/generate/opengraph";


function MyButton() {
  return (
      <button className= "bg-black w-40  py-0.5 px-0.5 font-semibold  text-white text-center rounded">
          <a href="https://github.com/josephchr1stian">Github</a>
      </button>
  )
}
function Linkdin() {
    return (
        <button className= "bg-black w-40  py-0.5 px-0.5
      font-semibold  text-white text-center rounded">
            <a href="https://www.linkedin.com/in/joseph-garcia-85972b223/"> LinkedIn</a>
        </button>
    )
}
export default function Home() {
  return (

      <div className="relative...">
          <h1 className="bg-white  text-slate-800 text-0 font-bold py-5 px-10  text-right"> Welcome </h1>
          <div className="flex items-center flex-row ">
            <p className= "bg-transparent py-80 px-80"> </p>
            < MyButton />

            <Linkdin/>

          </div>
      </div>

  );
}
