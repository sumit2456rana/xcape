import React, { useEffect, useRef } from "react"
import closeIcon from '../assets/closeIcon.svg'
import searchIcon from '../assets/searchIcon.svg'
function SearchBar({ isSearchOpen, handleCloseSearch }) {
    const inputRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            inputRef.current.focus();
        }, 0);
    }, []);
    return (
        <div className={`fixed xl:px-[75px] px-5 flex justify-center items-center w-full h-[70px] duration-[0.3s] ease-out bg-white z-[1000000] ${isSearchOpen ? 'top-0' : 'top-[-70px]'}`}>
            <div className="flex w-full justify-center items-center">
                <div className="flex xl:w-1/3 w-full h-11 border items-center shadow-md gap-4 border-black px-4 pb-0.5">
                    <div className="flex flex-col w-full">
                        <label className="text-[11px] uppercase text-[#0008] font-medium">Search</label>
                        <input ref={inputRef} className="w-full outline-none" />
                    </div>
                    <hr className="border border-[#ccc] h-3/4" />
                    <div >
                        <img className="cursor-pointer" src={searchIcon} />
                    </div>
                </div>
                <img onClick={handleCloseSearch} className="ml-4 h-5 w-5 cursor-pointer" src={closeIcon} />
            </div>
            {isSearchOpen && <div onClick={handleCloseSearch} className="absolute w-full h-screen top-full left-0 right-0 bg-[rgba(18,18,18,0.5)]"></div>}
        </div>
    )
};

export default SearchBar;
