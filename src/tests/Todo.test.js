import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "../app/Provider";
import Todo from "../components/Todo";

describe("App Component", () => {
  let component, mockup;

  beforeEach(() => {
    mockup = {
      completed: false,
      text: "Tarea 2",
      id: 2
    };
  });

  beforeEach(() => {
    component = render(
      <Provider>
        <Todo {...mockup} />
      </Provider>
    );
  });

  it("Exists", () => {
    expect(component).toBeTruthy();
  });
});
