import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  it("input 엘리먼트가 렌더링 되어야 합니다.", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("input에 text가 입력이 되어야 합니다.", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });

    expect(inputElement.value).toBe("Go Grocery Shopping");
  });

  it("add 버튼을 클릭하면 setTodos 함수가 실행되어야 합니다..", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });

    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(buttonElement);

    expect(mockedSetTodo).toBeCalled();
  });

  it("add 버튼을 클릭하면 input은 비워져야 합니다.", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });

    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(buttonElement);

    expect(inputElement.value).toBe("");
  });
});
