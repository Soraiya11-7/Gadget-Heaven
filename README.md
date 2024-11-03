# React + Vite

 ## **React-Toast Install** 
```
npm install react-hot-toast
```
```
import toast, { Toaster } from 'react-hot-toast';



const notify = () => toast.success('Successfully created!');


<button onClick={notify}>Make me a toast</button>
<Toaster />
```