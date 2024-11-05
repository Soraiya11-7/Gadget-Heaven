# 

## **Req. Document** 
[https://drive.google.com/file/d/1bj5mt236WT9lXq6q78Fnexym6U9loEXZ/view?usp=sharing](https://drive.google.com/file/d/1bj5mt236WT9lXq6q78Fnexym6U9loEXZ/view?usp=sharing)

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