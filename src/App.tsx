import './App.css'
import { Dialog } from './Dialog'

function App() {

  return (
    <div className='bg-black/80 h-screen'>
      <Dialog
      title='Remove your subscription'
      description='Your payment profile will be deleted after the subscrptiption is expired.'
      onCancel={()=>{}}
      onComplete={()=>{}}
      variant='dark'
      >
        <button className="px-2 py-1 rounded-md bg-black text-white cursor-pointer">Delete account</button>
      </Dialog>
    </div>
  )
}

export default App
