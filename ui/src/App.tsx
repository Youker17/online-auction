import Modal from "./components/Modal"
import {useState} from 'react'




function App() {
  const onclick = () => {
    console.log('hello world')
    setOpen(true)
  }
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full flex justify-center items-center">
      <button className="btn text-xs btn-primary px-5 rounded-none" onClick={onclick}>hello world</button>
      <Modal open={open} onExit={()=>setOpen(false)} className="modal bg-slate-600 bg-opacity-50 backdrop-blur-md">
        <div className="p-5">
          <h1 className="text-3xl">Hello world</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </Modal>
    </div>
  )
}

export default App
