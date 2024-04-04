import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PortfolioLayout from "./features/portfolio/PortfolioLayout";
import AllProjects from "./features/portfolio/projects/AllProjects";
import Portfolio from "./pages/Portfolio";
import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyle />
      <Toaster
        position="top-center"
        gutter={8}
        toastOptions={{
          style: {
            backgroundColor: "var(--color-black)",
          },
        }}
      />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PortfolioLayout>
                  <Portfolio />
                </PortfolioLayout>
              }
            />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/dashboard/*" element={<Router />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
