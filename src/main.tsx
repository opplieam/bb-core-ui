import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")!).render(
  <>
    <MantineProvider defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </>
);
