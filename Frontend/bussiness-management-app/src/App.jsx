import "./App.css";
import React,{useState} from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Mainpage from "./components/mainsection";
import Modal from "./components/modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <Mainpage />
      <Footer />
       <Modal isOpen={isModalOpen} onClose={closeModal} /> 
       <button onClick={openModal}>Open Modal</button> 
    </>
  );
}

export default App;
