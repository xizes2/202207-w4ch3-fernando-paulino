import { render, screen } from "@testing-library/react";
import { GlobalContext } from "../../store/context/GlobalContext";
import Info from "./Info";

describe("Given an Info component", () => {
  describe("When it's called with isCalling true", () => {
    const expectedcallingInfo = "Calling...";

    render(
      <GlobalContext.Provider
        value={{
          phoneNumber: "",
          isCalling: true,
        }}
      >
        <Info />
      </GlobalContext.Provider>
    );
    const callingInfo = screen.getByText("Calling...");

    test("Then it should show a span tag", () => {
      expect(callingInfo).toBeInTheDocument();
    });
    test("Then it should show a span tag with the text 'Calling...' inside", () => {
      expect((callingInfo as HTMLElement).textContent).toBe(
        expectedcallingInfo
      );
    });
  });
});
