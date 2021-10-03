import metalGearRisingRevengeance from "../assets/metal-gear-rising-revengeance.jpg";
import "../styles/Popular.css";

export default function Popular() {
    return (
        <section className="popular-container">
            <div className="popular">
                <div className="popular__wallpaper">
                    <img src={metalGearRisingRevengeance} alt="Popular" />
                </div>
                <div className="popular__info">
                    <div className="popular__info-container">
                        <div className="popular__info-background" />

                        <h1 className="popular__title">
                            Metal Gear Rising: <span className="popular__title-keyword">Revengeance</span>
                        </h1>

                        <p className="popular__description">
                            Suspendisse at facilisis eros. Duis a elit ac erat ultrices mollis id eget lectus. Sed sed lectus et justo
                            mollis ullamcorper in a est. Donec a purus tempus, aliquet felis ut, malesuada justo.
                        </p>

                        <a className="popular__link" href="/#">
                            See More <span className="popular__link-line" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
