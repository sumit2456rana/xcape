import React, { useState } from "react"
import Logo from "./Logo";
import Navigations from "./Navigations";
import NavRight from "./NavRight";
import HamburgerMenu from "./HamburgerMenu";
import SearchBar from "./SearchBar";

function Navbar() {
    const [openMenu , setOpenMenu] = useState(false);
    const [isSearchOpen , setIsSearchOpen] = useState(false);
    function handleOpenMenu() {
        setOpenMenu(true);
    }
    function handleCloseMenu() {
        setOpenMenu(false);
    }
    function handleOpenSearch() {
        setIsSearchOpen(true);
    }
    function handleCloseSearch() {
        setIsSearchOpen(false);
    }
    return (
        <>
        <div className="bg-bgTheme px-[5%] h-[70px] flex justify-between items-center w-full fixed top-0 border-b z-[1000] border-[#70707030]">
            <Logo />
            <Navigations />
            <NavRight handleOpenSearch={handleOpenSearch} openMenu={openMenu} handleCloseMenu={handleCloseMenu} handleOpenMenu={handleOpenMenu} />
        </div>
        <SearchBar isSearchOpen={isSearchOpen} handleCloseSearch={handleCloseSearch} />
        <div onClick={handleCloseMenu} className={`${openMenu ? 'block' : 'hidden'} w-full h-screen duration-[.3s] ease-linear fixed z-50 top-0 left-0 bg-[rgba(0,0,0,.4)] hamclosecontainer`}></div>
        <HamburgerMenu openMenu={openMenu} />
        </>
    )
};

export default Navbar;
