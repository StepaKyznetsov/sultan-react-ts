import { render, screen, fireEvent } from "@testing-library/react";
import ChangeProductInput from "../ui/ChangeProductInput/ChangeProductInput";

describe("ChangeProductInput", () => {
  const props = {
    name: "name",
    field: "field",
    type: "text",
    id: "test-id",
    handleKeyPress: jest.fn(),
  };

  it("Корректный рендер пропсов", () => {
    render(<ChangeProductInput {...props} />);

    expect(screen.getByText("name:")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveValue("field");
  });

  it("Обновление инпута после вызове handleChange", () => {
    render(<ChangeProductInput {...props} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, {
      target: {
        value: "new",
      },
    });

    expect(input).toHaveValue("new");
  });

  it("Вызов метода handleKeyPress при нажатии Enter", () => {
    render(<ChangeProductInput {...props} />);

    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
    });

    expect(props.handleKeyPress).toHaveBeenCalledTimes(1);
  });
});
