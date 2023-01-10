import { Outlet } from 'react-router-dom'
import LayoutPage from './layout/layout'

function App() {
  return (
    <LayoutPage>
      <Outlet />
    </LayoutPage>
  )
}

export default App
