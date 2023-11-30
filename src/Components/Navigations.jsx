import React from "react"

function Navigations() {
  return (
      <ul className="gap-10 hidden lg:flex">
        <li className="font-bold uppercase text-[13px] duration-[0.3s] ease-linear hover:text-[#0005] cursor-pointer">New Drops</li>
        <li className="font-bold uppercase text-[13px] duration-[0.3s] ease-linear hover:text-[#0005] cursor-pointer">Tops</li>
        <li className="font-bold uppercase text-[13px] duration-[0.3s] ease-linear hover:text-[#0005] cursor-pointer">Bottoms</li>
        <li className="font-bold uppercase text-[13px] duration-[0.3s] ease-linear hover:text-[#0005] cursor-pointer">Accessories</li>
      </ul>
  )
};

export default Navigations;
