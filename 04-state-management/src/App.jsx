import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CounterApp from "./components/CounterApp";
function App() {

  return (
    <div className="App position-relative">
      <Header />
      <CounterApp />
      <Footer />
    </div>
  );
}

export default App;
