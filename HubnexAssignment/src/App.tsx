
import Hero from "./Pages/Hero1Page";
import CaseStudy from "./Pages/CaseStudy2Page";
import PartnerPage from "./Pages/PartnerPage";
import Blogs from "./Pages/Blogs";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    {/* <Hero></Hero>
    <CaseStudy></CaseStudy>
    <PartnerPage></PartnerPage>
    <Blogs></Blogs>
    <AboutUsPage></AboutUsPage>
    <ContactUsPage></ContactUsPage> */}
    


    <Router>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/casestudy" element={<CaseStudy />} />
                <Route path="/partner" element={<PartnerPage />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactUsPage />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
