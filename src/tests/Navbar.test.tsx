import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

test("", () => {
    render(<Navbar />);

    const brand = screen.getByText(/MPLEXITY/i);
    expect(brand).toBeInTheDocument();
});
