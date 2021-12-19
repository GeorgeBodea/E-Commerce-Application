import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from '../pages/HomePage'

export default function AllRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" component={Homepage}></Route>
        </Routes>
      </Router>
    </>
  )

}