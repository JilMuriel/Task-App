import React from "react";
import { TaskContextProvider } from "./context";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <TaskContextProvider>
      <Container>
        <h1>Task</h1>
      </Container>
    </TaskContextProvider>
  );
}

export default App;
