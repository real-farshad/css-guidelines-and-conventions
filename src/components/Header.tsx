import headerBackground from "../assets/header-bg.jpg";
import Navbar from "./Navbar";
import "../styles/Header.css";

export default function Header() {
    return (
        <header>
            <Navbar />

            <div className="intro">
                <div className="intro__wallpaper">
                    <div className="intro__wallpaper-image">
                        <img src={headerBackground} alt="wallpaper" />
                    </div>
                    <div className="intro__wallpaper-shade" />
                </div>
                <div className="intro__info">
                    <div className="intro__title-container">
                        <h1 className="intro__title">
                            Only Your Choice <span className="intro__title-keyword">Matters</span>
                        </h1>
                    </div>
                    <div className="intro__description-container">
                        <p className="intro__description">
                            <span className="intro__description-text">
                                Curabitur, Fringilla Lectus, Elementum Iaculis Quam. In Hac Habitasse Platea Dictumst
                            </span>{" "}
                            <a href="#" className="arrow-icon">
                                <div className="arrow-icon__line arrow-icon__line--top" />
                                <div className="arrow-icon__line arrow-icon__line--middle" />
                                <div className="arrow-icon__line arrow-icon__line--bottom" />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
