import firstThumbnail from "../assets/explore-first.jpg";
import secondThumbnail from "../assets/explore-second.jpg";
import thirdThumbnail from "../assets/explore-third.jpg";
import fourthThumbnail from "../assets/explore-fourth.jpg";
import fifthThumbnail from "../assets/explore-fifth.jpg";
import "../styles/Explore.css";

export default function Explore() {
    return (
        <section>
            <div className="explore">
                <div className="explore__thumbnail explore__thumbnail--first">
                    <div className="explore__thumbnail-image">
                        <img src={firstThumbnail} alt="first thumbnail" />
                    </div>
                </div>

                <div className="explore__thumbnail explore__thumbnail--second">
                    <div className="explore__thumbnail-image">
                        <img src={secondThumbnail} alt="second thumbnail" />
                    </div>
                </div>

                <div className="explore__thumbnail explore__thumbnail--third">
                    <div className="explore__thumbnail-image">
                        <img src={thirdThumbnail} alt="third thumbnail" />
                    </div>
                </div>

                <div className="explore__thumbnail explore__thumbnail--fourth">
                    <div className="explore__thumbnail-image">
                        <img src={fourthThumbnail} alt="fourth thumbnail" />
                    </div>
                </div>

                <div className="explore__thumbnail explore__thumbnail--fifth">
                    <div className="explore__thumbnail-image">
                        <img src={fifthThumbnail} alt="fifth thumbnail" />
                    </div>
                </div>

                <div className="explore__title-container">
                    <h1 className="explore__title">
                        Explore <span className="explore__title-keyword">More</span>
                    </h1>
                </div>

                <div className="explore__description-container">
                    <p className="explore__description">
                        Maecenas malesuada ut urna sed rhoncus. Sed iaculis, risus ut ultricies vestibulum, odio tortor varius sapien, vel
                        cursus nunc lectus nec velit.
                    </p>
                    <a className="explore__link" href="/#">
                        More Details <span className="explore__link-line" />
                    </a>
                </div>
            </div>
        </section>
    );
}
