import React from "react";
import { screen, fireEvent, render } from "@testing-library/react";
import { Provider } from "../app/Provider";
import RemoveTodo from "../containers/RemoveTodo";

describe("App Component", () => {
  let component, mockup, state;

  beforeEach(() => {
    mockup = {
      id: 1,
    };
  });

  beforeEach(() => {
    component = render(
      <Provider>
        <RemoveTodo {...mockup} />
      </Provider>
    );
  });

  it("Exists", () => {
    expect(component).toBeTruthy();
  });
});
