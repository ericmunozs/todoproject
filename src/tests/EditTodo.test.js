import React from "react";
import { screen, fireEvent, render } from "@testing-library/react";
import { Provider } from "../app/Provider";
import EditTodo from "../containers/EditTodo";

describe("App Component", () => {
  let component, mockup;

  beforeEach(() => {
    mockup = {
      id: 1,
      text: "Tarea 1",
    };
  });

  beforeEach(() => {
    component = render(
      <Provider>
        <EditTodo {...mockup} />
      </Provider>
    );
  });

  it("Exists", () => {
    expect(component).toBeTruthy();
  });

  it("EditTodo Icon clicked", () => {
    fireEvent.click(screen.getByLabelText("edit"));
    expect(screen.getByText(/Editar tarea/)).toBeInTheDocument();
  });
});
