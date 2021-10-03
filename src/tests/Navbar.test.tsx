import { render, screen } from "@testing-library/react";
import Recommended from "../components/Recommended";

const mockData = {
    category: "My Category",
    title: { text: "A Random Title", keyword: "Title Keyword" },
    brief: "A short explanation.",
    description: ["First paragraph", "Second paragraph"],
    link: "my_random_link.com",
    image_src: "my-image.jpg",
    frameColor: "rgb(150, 150, 150)",
};

// Smoking test
it("should render and not throw any errors", () => {
    render(<Recommended data={mockData} reverseLayout={false} addBackgroundColor={false} />);
});

// Unit tests
describe("recommended section", () => {
    beforeEach(() => {
        render(<Recommended data={mockData} reverseLayout={false} addBackgroundColor={false} />);
    });

    it("should have right category", () => {
        const categories = screen.getAllByText(/my category/i);
        expect(categories[0]).toBeInTheDocument();
    });

    it("should have right title text", () => {
        const titleTexts = screen.getAllByText(/a random title/i);
        expect(titleTexts[0]).toBeInTheDocument();
    });

    it("should have right title keyword", () => {
        const titleKeywords = screen.getAllByText(/title keyword/i);
        expect(titleKeywords[0]).toBeInTheDocument();
    });

    it("should have right brief", () => {
        const brief = screen.getByText(/a short explanation./i);
        expect(brief).toBeInTheDocument();
    });

    it("should have right number of description paragraphs", () => {
        const descriptionParagraphs = screen.getAllByTestId("recommended-description");
        expect(descriptionParagraphs.length).toBe(2);
    });

    it("should have right description paragraphs", () => {
        const descriptionFirstParagraph = screen.getByText(/first paragraph/i);
        const descriptionSecondParagraph = screen.getByText(/second paragraph/i);

        expect(descriptionFirstParagraph).toBeInTheDocument();
        expect(descriptionSecondParagraph).toBeInTheDocument();
    });

    it("should have right link address", () => {
        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "my_random_link.com");
    });

    it("should have right image src", () => {
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("src", "my-image.jpg");
    });

    it("should have right frame color", () => {
        const frame = screen.getByTestId("recommended-frame");
        expect(frame).toHaveStyle("borderColor: rgb(150, 150, 150)");
    });
});

// We could also add tests for reverseLayout and addBackgroundColor, but
// i think it would be unnecessary and slows down development
