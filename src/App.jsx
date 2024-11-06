
import toast, { Toaster } from 'react-hot-toast';

function App() {
  
  const notify = () => toast.success('Successfully created!');

  return (
    <>
      <h1>Assignment-8</h1>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </>
  )
}

export default App
