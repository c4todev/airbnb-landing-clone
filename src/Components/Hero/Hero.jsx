import { useState } from "react";
import Card from "./Card";

import ShowMore from "react-show-more-button/dist/module";

export default function Hero() {
  return (
    <ShowMore
      maxHeight={2605}
      classNameButton="bg-[#222222] text-[#FFF] py-3 px-6 rounded-lg"
    >
      <div className="mt-[20.5rem] ml-16 mr-16 grid gap-x-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
        <Card />
      </div>
      <p className="text-black text-lg tracking-wide font-medium text-center">
        Continue exploring homes
      </p>
    </ShowMore>
  );
}
