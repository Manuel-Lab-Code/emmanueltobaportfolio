import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { Home } from "@/pages/Home";

const NotFound = lazy(() =>
  import("@/pages/NotFound").then((m) => ({ default: m.NotFound }))
);

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <Suspense fallback={null}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </RootLayout>
  );
}

export default App;
