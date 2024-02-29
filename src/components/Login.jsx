
const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    let user = e.target.user.value
    let password = e.target.pass.value
    // console.log(user, password)
  }

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="title-login">Login</h1>
        <p className="label-login">Username</p>

        <form onSubmit={handleSubmit} className="login-form">
          <input type="text" name="user" />
          <p className="label-login">Password</p>
          <input type="password" name="pass" />
          <button  className="btn-login" value="send">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login