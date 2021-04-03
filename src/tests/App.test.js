import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "../app/Provider";
import App from "../components/App";

describe("App Component", () => {
  let component;

  beforeEach(() => {
    component = render(
      <Provider>
        <App />
      </Provider>
    );
  });

  it("Exists", () => {
    expect(component).toBeTruthy();
  });
  
  it("Show Todo App title", () => {
    expect(screen.getByText(/Todo App/)).toBeInTheDocument();
  });
});
