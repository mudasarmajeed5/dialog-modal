import './App.css'
import { Dialog } from './Dialog'

function App() {

  return (
    <div className='bg-black/80 h-screen'>
      <div>The app has the following options. 
        <Dialog
      title='Delete Account'
      description='This action is irreversible'
      onCancel={()=>{}}
      onComplete={()=>{}}
      // variant='dark'
      >
        <button className="px-2 py-1 rounded-md bg-black text-white cursor-pointer">Delete account</button>
      </Dialog>
      </div>
    </div>
  )
}

export default App
