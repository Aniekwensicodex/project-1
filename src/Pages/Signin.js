import React, {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {user_signin} from "../Redux/Actions/userActions"
import {useNavigate} from "react-router-dom"

const Signin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const userAuth = useSelector((state) => state.userAuth)
  const {userDetail, loading, error} = userAuth

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(user_signin(email, password))
  }

  useEffect(() => {
    if (userDetail) {
      navigate("/")
    }
  }, [userDetail, navigate])

  return (
    <div>
      <div className="container">
        <div className="justify-content-center align-items-center text-center">
          <div className="col-md-8">
            <form onSubmit={submitHandler}>
              <div className="col-md-6">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>

            <div>
              <button type="submit">Submit</button>
              <p>
                Don't have an account? <a href="/signup">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
