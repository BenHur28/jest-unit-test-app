import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Page", () => {
	it("renders a heading", () => {
		render(<Page />);

		const heading = screen.getByRole("heading");
		const headerText = "Home";

		expect(heading).toHaveTextContent(headerText);
	});

	it("Should have a disabled button", () => {
		render(<Page />);

		const buttonElement = screen.getByRole("button");

		expect(buttonElement).toBeDisabled();
	});

	it("Should have a className of blue", () => {
		render(<Page></Page>);

		const pElement = screen.getByTestId("paragraph-blue");

		expect(pElement).toHaveClass("blue");
	});
});
