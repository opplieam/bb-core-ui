import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <MantineProvider defaultColorScheme="dark">
        <App />
      </MantineProvider>
    </QueryClientProvider>
  </>
);
