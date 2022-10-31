import React from "react"
import "./App.css"
import ParticlesBg from "particles-bg"
import Content from "./pages/content/Content"
import Header from "./pages/header/Header"

const App = () => {
  return (
    <>
      <ParticlesBg type="circle"
        bg={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          minHeight: 675
        }}
      />
      <div style={{ color: '#fff' }}>
        <Header />
        <Content />
      </div>
    </>
  )
}

export default App