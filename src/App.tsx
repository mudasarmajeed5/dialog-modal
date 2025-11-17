import './App.css'
import { Dialog } from './Dialog'

function App() {

  return (
    <div className='bg-black/80 h-screen'>
      <Dialog
      title='Delete account'
      description='This action is irreversible.'

      > 
      <button className='px-2 py-1 outline m-10'>Delete</button>
      </Dialog>
    </div>
  )
}

export default App
