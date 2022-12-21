import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import Post from './components/Post'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/post/*' element={<Post />}></Route>
          </Routes>

          {/* <Card>
            <NavLink to='/' activeclassname='active'>
              Home
            </NavLink>
            <NavLink to='/about' activeclassname='active'>
              About
            </NavLink>
          </Card>

          <AboutIconLink /> */}
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
