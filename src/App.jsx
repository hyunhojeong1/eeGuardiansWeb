// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AppLanding } from "./pages/AppLanding";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/eeGuardiansWeb/" element={<Home />} />
              <Route path="/eeGuardiansWeb/app/:id" element={<AppLanding />} />
              <Route path="/eeGuardiansWeb/privacy/:id" element={<PrivacyPolicy />} />
              <Route path="/eeGuardiansWeb/contact" element={<Contact />} />


            </Routes>
          </main>
        </div>
      </Router>
    </>
  )
}

export default App
