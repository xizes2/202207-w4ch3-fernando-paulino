import { render, screen } from "@testing-library/react";
import { GlobalContext } from "../../store/context/GlobalContext";
import Actions from "./Actions";

describe("Given an Actions component", () => {
  const buttonText = "Call";

  describe("When it's called with isCalling true", () => {
    render(
      <GlobalContext.Provider
        value={{
          phoneNumber: "",
          isCalling: true,
        }}
      >
        <Actions />
      </GlobalContext.Provider>
    );

    const callButton = screen.getByText(buttonText);

    test("Then it should show the call button", () => {
      expect(callButton).toBeInTheDocument();
    });
  });

  describe("When it's called with phoneNumber length equal to 9", () => {
    test("Then it should show the call button activated", () => {
      render(
        <GlobalContext.Provider
          value={{
            phoneNumber: "123456789",
            isCalling: true,
          }}
        >
          <Actions />
        </GlobalContext.Provider>
      );

      const callButton = screen.getByText(buttonText);

      expect(callButton).toHaveClass("active");
    });
  });
});
