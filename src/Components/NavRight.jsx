import React from "react"
import hamburgerIcon from '../assets/hamburgerIcon.svg'
import cartIcon from '../assets/cartIcon.svg'
import searchIcon from '../assets/searchIcon.svg'
import closeIcon from '../assets/closeIcon.svg'
function NavRight({openMenu , handleOpenMenu , handleCloseMenu , handleOpenSearch}) {
    return (
        <div className="flex gap-10 items-center">
            <img onClick={handleOpenSearch} className="cursor-pointer" src={searchIcon} />
            <img src={cartIcon} />
            {openMenu ? <img className="cursor-pointer" onClick={handleCloseMenu} src={closeIcon} /> : <img className="cursor-pointer" onClick={handleOpenMenu} src={hamburgerIcon} />}
        </div>
    )
};

export default NavRight;
