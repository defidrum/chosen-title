import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

 {/* Add all pages here, not all components need a route, a page may consist of several components but not all components need a route.
              A home page component needs a route so a user can visit it.
              A button would not need a route because it is apart of the page */}

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

// All components must be exported to be visible on the UI
export default App