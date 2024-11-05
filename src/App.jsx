import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function App() {
  
  const notify = () => toast.success('Successfully created!');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  // Simulate sending data
  const sendData = () => {
   
      setIsModalVisible(true);
   
  };

  const closeModal = () => {
    setIsModalVisible(false);
    navigate('/');  // Navigate to home page after closing modal
  };

  return (
    <>
      <h1>Assignment-8</h1>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />


    <div className="flex flex-col items-center justify-center min-h-screen">
      <button onClick={sendData} className="px-4 py-2 bg-green-500 text-white rounded">
        Send Data
      </button>

      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">Success!</h2>
            <p className="mb-6">Your data has been sent successfully.</p>
            <button 
              onClick={closeModal} 
              className="px-4 py-2 bg-blue-500 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>

       
    </>
  )
}

export default App
