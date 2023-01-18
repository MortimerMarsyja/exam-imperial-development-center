// utils
import { routes } from "@utils/routes";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// components
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import SideNav from "@components/SideNav";
// containers
import GlobalContainer from "@containers/GlobalContainer";
import NotFound from "@pages/NotFound";
// providers
import { ToastContentProvider } from "@contexts/toastContext";
import { ThemeProvider } from "@contexts/themeContext";

const App = (): JSX.Element => {
  return (
    <div>
      <ThemeProvider>
        <ToastContentProvider>
          <BrowserRouter>
            <GlobalContainer />
            <Navbar />
            <div className="page-layout">
              <SideNav />
              <div className="page-content">
                <Routes>
                  {routes.map((route) => (
                    <Route
                      key={route.name}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
            <Footer>
              <div>
                Imperial website v<sub>0.0.1</sub>
              </div>
            </Footer>
          </BrowserRouter>
        </ToastContentProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
