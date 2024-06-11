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
       <Modal isOpen={isModalOpen} onClose={closeModal} /> {/* Render the Modal component */}
       <button onClick={openModal}>Open Modal</button> {/* Button to open the modal */}
    </>
  );
}

export default App;
