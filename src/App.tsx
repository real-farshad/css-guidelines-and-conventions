import lastOfUsPart2 from "./assets/last-of-us-part-2.jpg";
import mortalKombat11 from "./assets/mortal-kombat-11.jpg";
import Header from "./components/Header";
import Recommended from "./components/Recommended";
import Popular from "./components/Popular";
import Explore from "./components/Explore";
import Copyright from "./components/Copyright";
import "./styles/App.css";

function App() {
    // Mock data
    const recomendations = [
        {
            category: "Best story",
            title: {
                text: "The Last of Us",
                keyword: "Part II",
            },
            brief: "Vivamus hendrerit ex porttitor orci sodales auctor. Integer pharetra feugiat lacus. Curabitur at diam sed elit sodales fringilla ut eu magna.",
            description: [
                "Nullam ultrices consequat massa, at bibendum nunc. Etiam pulvinar varius est, bibendum non. Proin feugiat sodales eros, eget rutrum leo maximus vitae. Aliquam pulvinar felis ac neque bibendum, a hendrerit nunc ultrices.",
                "Fusce sodales dapibus libero, sit amet hendrerit leo sodales vel aliquet elit tortor eget dui.",
            ],
            link: "#",
            image_src: lastOfUsPart2,
            frameColor: "rgb(186, 231, 142)",
        },
        {
            category: "Best Fighting Game",
            title: {
                text: "Mortal Kombat",
                keyword: "11",
            },
            brief: "Quisque sit amet vulputate ipsum, sed sollicitudin felis. Donec molestie metus ut odio placerat, in pharetra dui vestibulum.",
            description: [
                "Maecenas suscipit nibh at nisi tincidunt consequat. Nullam ac massa at nibh laoreet convallis. Praesent et lectus consectetur, cursus tortor non, tempor lectus. Duis fringilla nibh vel mollis lacinia.",
                "Maecenas aliquam elit gravida gravida ultrices. In porttitor gravida mi, nec scelerisque nisi aliquet nec. Aenean pellentesque hendrerit sapien, quis imperdiet leo bibendum in.",
            ],
            link: "#",
            image_src: mortalKombat11,
            frameColor: "rgb(255, 225, 170)",
        },
    ];

    return (
        <>
            <Header />

            <main>
                <Recommended data={recomendations[0]} reverseLayout={false} backgroundColor={true} darkenImage={false} />

                <Recommended data={recomendations[1]} reverseLayout={true} backgroundColor={false} darkenImage={true} />

                <Popular />

                <Explore />
            </main>

            <footer>
                <Copyright />
            </footer>
        </>
    );
}

export default App;
