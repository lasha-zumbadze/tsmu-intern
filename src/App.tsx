import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import { router as rootRouter } from "./routes";
import { ThemeContextProvider } from "./context/ThemeContext";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeContextProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={rootRouter} />
        </QueryClientProvider>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 2000,
            },
            error: {
              duration: 2000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#f2f2f2",
              color: "#333",
              border: "1px solid #34acf7",
            },
          }}
        />
      </HelmetProvider>
    </ThemeContextProvider>
  );
}

export default App;
