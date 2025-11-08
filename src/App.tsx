import './App.css'
import { Dialog } from './Dialog'

function App() {

  return (
    <div className='bg-black/80 h-screen'>
      <Dialog
      title='Delete Account'
      description='This action is irreversible'
      onCancel={()=>{}}
      onComplete={()=>{}}
      // disabled
      >
        <div className="text-center">
          
        <button className="px-2 py-1 rounded-md bg-black text-white cursor-pointer">Delete account</button>
        </div>
      </Dialog>
    </div>
  )
}

export default App
