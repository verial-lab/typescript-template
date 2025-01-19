import { log } from "../app";

describe("log", () => {
  test("logs a message to console", () => {
    const consoleSpy = jest.spyOn(console, "log");
    log("test message");
    expect(consoleSpy).toHaveBeenCalledWith("test message");
    consoleSpy.mockRestore();
  });

  test("logs an empty string", () => {
    const consoleSpy = jest.spyOn(console, "log");
    log("");
    expect(consoleSpy).toHaveBeenCalledWith("");
    consoleSpy.mockRestore();
  });

  test("logs special characters", () => {
    const consoleSpy = jest.spyOn(console, "log");
    log("!@#$%^&*()");
    expect(consoleSpy).toHaveBeenCalledWith("!@#$%^&*()");
    consoleSpy.mockRestore();
  });
});
