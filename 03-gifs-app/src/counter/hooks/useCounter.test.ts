import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should initialize with default value of 10", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
  });

  test("should initialize with value 20", () => {
    const { result } = renderHook(() => useCounter(20));
    expect(result.current.counter).toBe(20);
  });

  test("should increment counter when increment is called", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.counter).toBe(11);
  });

  test("should decrement counter when decrement is called", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.decrement();
    });
    expect(result.current.counter).toBe(9);
  });

  test("should reset counter to initial value when decrement is called", () => {
    const initialValue=20;
    const { result } = renderHook(() => useCounter(initialValue));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.counter).toBe(19)
    act(() => {
      result.current.reset();
    });
    expect(result.current.counter).toBe(initialValue);
  });
});
