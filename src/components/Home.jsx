import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='home-container'>
      <h1 className="home-title">Welcome</h1>
      <p>Here you can create LDS Sunday meetings to get data afterwards.</p>
      <p>You have to create an account to use the service</p>
      <p className="btn-span">
        <Link to="/login" className="btn-home">Login</Link>
      </p>
    </div>
  )
}

export default Home