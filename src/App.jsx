import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "./components/ui/toaster"
import emailjs from "@emailjs/browser"
import { useEffect } from "react"

function App() {

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY);
  }, []);

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
