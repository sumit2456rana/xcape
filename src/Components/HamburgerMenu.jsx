import React from "react"
import { NavLink } from "react-router-dom";

function HamburgerMenu({ openMenu }) {
    return (
        <div className={`xl:w-[30%] w-[65%] h-screen px-[5%] bg-bgTheme fixed top-[70px] duration-[0.25s] ease-linear z-50 ${openMenu ? 'right-0' : 'xl:right-[-30%] right-[-65%]'}`}>
            <div className="flex flex-col justify-around h-[90%] w-full">

                <ul>
                    <div className="relative pb-2">
                        <h1 className="uppercase text-xl font-bold">New Drops</h1>
                        <div className="text-center absolute top-[-5px] left-32 py-[4px] px-[12px] text-white text-[10px] font-bold rounded-2xl bg-red-600">2023</div>
                    </div>
                    <NavLink className="items">t-shirt</NavLink>
                    <NavLink className="items">shirts</NavLink>
                    <NavLink className="items">hoodies</NavLink>
                    <NavLink className="items">sweetshirts</NavLink>
                    <NavLink className="items">jeans</NavLink>
                    <NavLink className="items">cargos</NavLink>
                    <NavLink className="items">shorts</NavLink>
                    <NavLink className="items">accessories</NavLink>
                </ul>

                <ul>
                    <li className="items">
                        <NavLink>Size Chart</NavLink>
                    </li>
                    <li className="items">
                        <NavLink>FAQ</NavLink>
                    </li>
                </ul>

                <ul>
                    <li className="items">
                        <NavLink>About</NavLink>
                    </li>
                    <li className="items">
                        <NavLink>Retail location</NavLink>
                    </li>
                    <li className="items">
                        <NavLink>Careers</NavLink>
                    </li>
                    <li className="items">
                        <NavLink>Contact</NavLink>
                    </li>
                </ul>

                <ul>
                    <li className="uppercase text-lg font-semibold">
                        <NavLink>Member Login</NavLink>
                    </li>
                </ul>

                <div className="flex flex-col gap-4 w-full justify-between">
                    <ul className="flex w-full flex-wrap justify-between ">
                        <li className="items">
                            <NavLink>Instagram</NavLink>
                        </li>
                        <li className="items">
                            <NavLink>Youtube</NavLink>
                        </li>
                        <li className="items">
                            <NavLink>LinkedIn</NavLink>
                        </li>
                    </ul>
                    <ul className="flex w-full sm:gap-3 flex-wrap gap-0 justify-between  pt-2 border-t border-black">
                        <li className="uppercase md:text-[11px] text-[9px] font-medium text-[#0008] hover:text-[#000] duration-[0.3s] ease-linear">
                            <NavLink>Cookies</NavLink>
                        </li>
                        <li className="uppercase md:text-[11px] text-[9px] font-medium text-[#0008] hover:text-[#000] duration-[0.3s] ease-linear">
                            <NavLink>Privacy Policy</NavLink>
                        </li>
                        <li className="uppercase md:text-[11px] text-[9px] font-medium text-[#0008] hover:text-[#000] duration-[0.3s] ease-linear">
                            <NavLink>Return / Refund</NavLink>
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    )
};

export default HamburgerMenu;
