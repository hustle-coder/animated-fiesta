import { Routes, Route, Link } from 'react-router'
import { useParams } from 'react-router'
import './App.css'

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav style={{ marginTop: '2rem' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '1rem 0' }}>
            <Link to="/" style={{ fontSize: '1.2rem' }}>Home</Link>
          </li>
          <li style={{ margin: '1rem 0' }}>
            <Link to="/about" style={{ fontSize: '1.2rem' }}>About (Static Route)</Link>
          </li>
          <li style={{ margin: '1rem 0' }}>
            <Link to="/user/123" style={{ fontSize: '1.2rem' }}>User 123 (Dynamic Route)</Link>
          </li>
          <li style={{ margin: '1rem 0' }}>
            <Link to="/user/456" style={{ fontSize: '1.2rem' }}>User 456 (Dynamic Route)</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is a static route.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  )
}

function User() {
  const { id } = useParams()
  
  return (
    <div>
      <h1>User Page</h1>
      <p style={{ fontSize: '1.5rem', color: '#646cff' }}>User ID: {id}</p>
      <p>This is a dynamic route with a parameter.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
  )
}

export default App
