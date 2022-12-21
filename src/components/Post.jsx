import { Navigate, useNavigate, Route, Routes } from 'react-router-dom'

function Post() {
  const status = 200

  const navigate = useNavigate()
  if (status === 404) {
    return <Navigate to='/notfound' />
  }
  const onClick = () => {
    navigate('/about')
    console.log('Hello')
  }
  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>Heellllooooo WOrldddyyyyy</h1>} />
      </Routes>
    </div>
  )
}
export default Post
