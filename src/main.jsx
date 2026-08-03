// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";

// createRoot(document.getElementById("root")).render(
//   <HelmetProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//     ,
//   </HelmetProvider>,

//   // <HelmetProvider>
//   //   <App />
//   // </HelmetProvider>,
// );



import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);