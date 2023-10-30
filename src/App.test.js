import { render, screen } from "@testing-library/react";
import App from "./App";
import Loging from "./Login-page/profile-page";

test("renders learn react link", () => {
  render(<App />);
  <Loging></Loging>;
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
