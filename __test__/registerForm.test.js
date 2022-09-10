import { faker } from "@faker-js/faker";
import { act, render, fireEvent } from "@testing-library/react";
import RegisterForm from "@/components/auth/register/form.register";

describe("Register Form", () => {
  const mockOnSubmit = jest.fn();

  it("fill input forms", async () => {
    const { getByPlaceholderText, getByRole } = render(
      <RegisterForm onSubmit={mockOnSubmit} />,
    );

    await act(async () => {
      fireEvent.change(getByPlaceholderText("Username"), {
        target: { value: faker.internet.userName() },
      });
      fireEvent.change(getByPlaceholderText("Email"), {
        target: { value: faker.internet.email() },
      });
      fireEvent.change(getByPlaceholderText("Password"), {
        target: { value: faker.internet.password(15) },
      });
    });

    await act(async () => {
      fireEvent.click(getByRole("button"));
    });

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  describe("with invalid email", () => {
    it("render email with validation error", async () => {
      const { getByPlaceholderText } = render(
        <RegisterForm onSubmit={mockOnSubmit} />,
      );

      const emailInput = getByPlaceholderText("Email");

      await act(async () => {
        fireEvent.change(emailInput, {
          target: { value: "invalid_email" },
        });
        fireEvent.focusOut(emailInput);
      });

      expect(emailInput).toHaveClass("border-red-500");
    });
  });

  describe("with invalid username", () => {
    it("render username with validation error", async () => {
      const { getByPlaceholderText } = render(
        <RegisterForm onSubmit={mockOnSubmit} />,
      );

      const usernameInput = getByPlaceholderText("Username");

      await act(async () => {
        fireEvent.change(usernameInput, {
          target: { value: "qq" }, // username min length is equal 3
        });
        fireEvent.focusOut(usernameInput);
      });

      expect(usernameInput).toHaveClass("border-red-500");
    });
  });

  describe("with invalid password", () => {
    it("render password with validation error", async () => {
      const { getByPlaceholderText } = render(
        <RegisterForm onSubmit={mockOnSubmit} />,
      );

      const passwordInput = getByPlaceholderText("Password");

      await act(async () => {
        fireEvent.change(passwordInput, {
          target: { value: "1234567" }, // username min length is equal 8
        });
        fireEvent.focusOut(passwordInput);
      });

      expect(passwordInput).toHaveClass("border-red-500");
    });
  });
});
