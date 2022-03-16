import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("Header의 title props와 같은 텍스트가 렌더링 되어야 합니다.(getBy)", () => {
    render(<Header title="my header" />);
    const headerElement = screen.getByText(/my header/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("Header는 head tag여야 합니다.", () => {
    render(<Header title="my header" />);
    // header가 여러개일 경우 뒤에 옵션을 통해서 테스트 가능.
    const headerElement = screen.getByRole("heading", { name: "my header" });
    expect(headerElement).toBeInTheDocument();
  });

  it("title 속성이 h2인 태그가 있어야 합니다.", () => {
    render(<Header title="my header" />);
    // header가 여러개일 경우 뒤에 옵션을 통해서 테스트 가능.
    const headerElement = screen.getByTitle("h2");
    expect(headerElement).toBeInTheDocument();
  });

  it("header가 있어야합니다.", () => {
    render(<Header title="my header" />);
    // header가 여러개일 경우 뒤에 옵션을 통해서 테스트 가능.
    const headerElement = screen.getByTestId("header-1");
    expect(headerElement).toBeInTheDocument();
  });

  it("Header의 title props와 같은 텍스트가 렌더링 되어야 합니다.(findBy)", async () => {
    render(<Header title="my header" />);
    const headerElement = await screen.findByText(/my header/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("해당하는 text가 포함되어 있지 않아야 합니다.", async () => {
    render(<Header title="my header" />);
    const headerElement = screen.queryByText(/blabla/i);
    expect(headerElement).not.toBeInTheDocument();
  });

  it("header tag가 2개여야 합니다.", async () => {
    render(<Header title="my header" />);
    const headerElement = screen.getAllByRole("heading");
    expect(headerElement.length).toBe(2);
  });
});
