import { render, fireEvent, screen } from "@testing-library/react";
import BackArrow from "../ui/BackArrow/BackArrow";
import { CATALOG } from "../constants";
import * as router from "react-router";

describe("BackArrow", () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  it("При клике должен произойти переход на страницу Каталог", () => {
    render(<BackArrow />);

    const backButton = screen.getByTestId("back-button");

    fireEvent.click(backButton);
    expect(navigate).toHaveBeenCalledWith(CATALOG);
  });
});
