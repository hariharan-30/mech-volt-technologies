import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/Common/Loader";

import { useEffect, useState } from "react";
import FloatingButtons from "./components/Common/FloatingButtons";
import ScrollProgress from "./components/Common/ScrollProgress";
import ScrollToTop from "./components/Common/ScrollToTop";

import { Toaster } from "react-hot-toast";
import StructuredData from "./components/SEO/StructuredData";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    // <>
    //   <Toaster
    //     position="top-right"
    //     reverseOrder={false}
    //     toastOptions={{
    //       duration: 3000,
    //       style: {
    //         borderRadius: "12px",
    //         background: "#fff",
    //         color: "#1e293b",
    //       },
    //     }}
    //   />
    //   <ScrollToTop />
    //   <ScrollProgress />

    //   <FloatingButtons />
    //   <Navbar />
    //   <StructuredData />
    //   <AppRoutes />
    //   <Footer />
    // </>
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "12px",
            background: "#fff",
            color: "#1e293b",
          },
        }}
      />

      <StructuredData />

      <ScrollToTop />

      <ScrollProgress />

      <FloatingButtons />

      <Navbar />

      <AppRoutes />

      <Footer />
    </>
  );
};

export default App;
