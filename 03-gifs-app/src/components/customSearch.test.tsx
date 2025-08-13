import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { CustomSearch } from "./CustomSearch";

describe("Custom Search", () => {
  test("should render searchbar correctly", () => {
    const { container } = render(<CustomSearch onQuery={() => {}} />);

    expect(container).toMatchSnapshot();
    expect(screen.getByRole("textbox")).toBeDefined();
    expect(screen.getByRole("button")).toBeDefined();
  });

  test("should call onQuery with the correct value after 700ms", async () => {
    const onQuery = vi.fn();

    render(<CustomSearch onQuery={onQuery} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });

    await waitFor(() => {
      expect(onQuery).toHaveBeenCalled();
      expect(onQuery).toHaveBeenCalledWith("test");
    });
  });

  test("should call only once with last value (debounce)", async () => {
    const onQuery = vi.fn();

    render(<CustomSearch onQuery={onQuery} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "t" } });
    fireEvent.change(input, { target: { value: "te" } });
    fireEvent.change(input, { target: { value: "tes" } });
    fireEvent.change(input, { target: { value: "test" } });

    await waitFor(() => {
      expect(onQuery).toHaveBeenCalledWith("test");
      expect(onQuery).toHaveBeenCalledTimes(1);
    });
  });

  test("should call onQuery when button clicked with the input value", () => {
    const onQuery = vi.fn();

    render(<CustomSearch onQuery={onQuery} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });

    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(onQuery).toHaveBeenCalledTimes(1);
    expect(onQuery).toHaveBeenCalledWith('test');
  });


  test('should call onQuery when enter key pressed with the input value', () => { 
    const onQuery = vi.fn();

    render(<CustomSearch onQuery={onQuery} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test2" } });

    fireEvent.keyDown(input,{key: 'Enter', code:13});

    expect(onQuery).toHaveBeenCalledTimes(1);
    expect(onQuery).toHaveBeenCalledWith('test2');
   });
});
