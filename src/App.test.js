import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  const { getByTestId } = render(<App />);
  const buttonElement = screen.getByTestId("getTodos");

  fireEvent.click(buttonElement);

  await waitFor(
    () => {
      expect(getByTestId("currentTodo")).toBeInTheDocument();
    },
    {
      timeout: 5000,
    }
  );
});
