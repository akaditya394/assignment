import { Route, Routes } from "react-router-dom"
import About from "./pages/About/About"
import ContactUs from "./pages/ContactUs/ContactUs"
import GenerateInvoice from "./pages/GenerateInvoice/GenerateInvoice"
import Home from "./pages/Home/Home"
import Invoices from "./pages/Invoices/Invoices"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/generateinvoice" element={<GenerateInvoice />} />
      <Route path="/invoices" element={<Invoices />} />
    </Routes>
  )
}

export default App


