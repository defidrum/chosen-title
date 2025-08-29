
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import NASCLALicensingCourse from "./components/NASCLALicensingCourse"
import RealEstateDevelopmentCourse from "./components/RealEstateDevelopmentCourse"
import MentorshipProgram from "./components/MentorshipProgram"
import ScrollToTop from "./components/common/ScrollToTop"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/redevelopment" element={<RealEstateDevelopmentCourse/>}/>
          <Route path="/nasclaprep" element={<NASCLALicensingCourse/>}/>
          <Route path="/mentorship" element={<MentorshipProgram/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App