import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
    const [menu, setMenu] = useState({
        isOpen: false,
        startOpenAnimation: false,
        startCloseAnimation: false,
    });

    function openMenu(): void {
        // Add the menu
        setMenu((prevState) => ({
            ...prevState,
            isOpen: true,
        }));

        // Start the opening animation
        setTimeout(() =>
            setMenu((prevState) => ({
                ...prevState,
                startOpenAnimation: true,
            }))
        );
    }

    function closeMenu(): void {
        // Start the closing animation
        setMenu((prevState) => ({
            ...prevState,
            startCloseAnimation: true,
        }));

        // Remove the menu and reset the state
        setTimeout(() => {
            setMenu({
                isOpen: false,
                startOpenAnimation: false,
                startCloseAnimation: false,
            });
        }, 500);
    }

    return (
        <nav className="navbar">
            <a href="#" className="navbar__brand">
                CO<span>MPLEXITY</span>
            </a>

            <div className="navbar__menu-icon" onClick={openMenu}>
                <div className="navbar__menu-icon-line" />
                <div className="navbar__menu-icon-line" />
                <div className="navbar__menu-icon-line" />
            </div>

            <div
                className={`navbar__menu ${menu.isOpen ? "navbar__menu--show" : ""} ${
                    menu.startOpenAnimation ? "navbar__menu--animate-in" : ""
                } ${menu.startCloseAnimation ? "navbar__menu--animate-out" : ""}`}
            >
                <div className="navbar__close-menu" onClick={closeMenu}>
                    <div className="navbar__close-icon">
                        <div className="navbar__close-icon-line" />
                        <div className="navbar__close-icon-line" />
                    </div>

                    <p className="close-menu__text">Close Menu</p>
                </div>

                <ul className="navbar__nav">
                    <li className="navbar__nav-link">
                        <a href="#">Home</a>
                    </li>

                    <li className="navbar__nav-link">
                        <a href="#">About</a>
                    </li>

                    <li className="navbar__nav-link">
                        <a href="#">Contact</a>
                    </li>

                    <li className="navbar__nav-link navbar__nav-link--button">
                        <a href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
