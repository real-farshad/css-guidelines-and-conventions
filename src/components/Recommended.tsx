import "../styles/Recommended.css";

interface propsInterface {
    data: {
        category: string;
        title: {
            text: string;
            keyword: string;
        };
        brief: string;
        description: string[];
        link: string;
        image_src: string;
        frameColor: string;
    };
    reverseLayout: boolean;
    addBackgroundColor: boolean;
}

export default function Recommended({ data, reverseLayout, addBackgroundColor }: propsInterface) {
    return (
        <section className={addBackgroundColor ? "secondary-background" : ""}>
            <div className={`recommended ${reverseLayout ? "recommended__reverse-layout" : ""}`}>
                <div className={`recommended__preview ${reverseLayout ? "recommended__preview--reverse-layout" : ""}`}>
                    <div
                        className={`recommended__preview-frame ${reverseLayout ? "recommended__preview-frame--reverse-layout" : ""}`}
                        style={{ borderColor: data.frameColor }}
                        data-testid="recommended-frame"
                    />
                    <div className="recommended__preview-image-container">
                        <div className="recommended__preview-image">
                            <img src={data.image_src} alt={`${data.title.text} ${data.title.keyword}`} />
                        </div>

                        <div className="recommended__info-sm">
                            <p className="recommended__category">{data.category}</p>

                            <h1 className="recommended__title">
                                {data.title.text} <span className="recommended__title-keyword">{data.title.keyword}</span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="recommended__info">
                    <div className="recommended__info-md-and-larger">
                        <p className="recommended__category">{data.category}</p>

                        <h1 className="recommended__title">
                            {data.title.text} <span className="recommended__title-keyword">{data.title.keyword}</span>
                        </h1>
                    </div>

                    <p className="recommended__brief">{data.brief}</p>

                    <div className="recommended__description">
                        {data.description.map((text, i) => {
                            return (
                                <p className="recommended__description-text" key={i} data-testid="recommended-description">
                                    {text}
                                </p>
                            );
                        })}
                    </div>

                    <a className="recommended__link" href={data.link}>
                        Show More <span className="recommended__link-line" />
                    </a>
                </div>
            </div>
        </section>
    );
}
