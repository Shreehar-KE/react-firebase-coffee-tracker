import { useState } from "react"

export default function Authentication() {
  const [isRegistration, setIsRegistration] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState('')

  async function handleAuthenticate() {

  }

  return (
    <>
      <h2 className="sign-up-text">{isRegistration ? 'Sign Up' : 'Login'}</h2>
      <p>{isRegistration ? 'Create an account' : 'Sign in to your account!'}</p>
      <input value={email} onChange={(e) => { setEmail(e.target.value) }}
        placeholder="Email" type="email" />
      <input value={password} onChange={(e) => { setPassword(e.target.value) }}
        placeholder="********" type="password" />
      <button onClick={handleAuthenticate}><p>Submit</p></button>
      <hr />
      <div className="register-content">
        <p>{isAuthenticated ? 'Already have an account' : 'Don\'t have an account?'}</p>
        <button onClick={() => { setIsRegistration(!isRegistration) }}><p>
          {isRegistration ? 'Sign In ' : 'Sign Up'}</p></button>
      </div>
    </>
  )
}
