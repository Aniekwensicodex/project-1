import React, {useState, useEffect} from "react"
import {useDispatch} from "react-redux"
import {user_signup} from "../Redux/Actions/userActions"
import {USER_SIGN_UP_RESET} from "../Redux/Types"

const Signup = () => {
  const dispatch = useDispatch()

  const [firstname, setFirstName] = useState("")
  const [middlename, setMiddleName] = useState("")
  const [lastname, setLastName] = useState("")
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      firstname,
      middlename,
      lastname,
      age,
      gender,
      phoneNumber,
      email,
      address,
      password,
    }
    if (password !== confirmPassword) {
      setMessage("Password does not match")
    } else {
      dispatch(user_signup(data))
    }
  }

  useEffect(() => {
    return () => {
      dispatch({type: USER_SIGN_UP_RESET})
    }
  }, [dispatch])

  return (
    <div>
      <div className="container">
        <div className="justify-content-center align-items-center text-center">
          <div className="col-md-8">
            <p>{message}</p>
            <form onSubmit={submitHandler}>
              <div className="col-md-6">
                <label>First Name:</label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label>Middle Name:</label>
                <input
                  type="text"
                  value={middlename}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label>Last Name:</label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label>Age:</label>
                <input
                  type="Number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label>Gender:</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>---Select---</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="col-md-6">
                <label>Mobile Number:</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label>Address:</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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

              <div className="col-md-6">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </form>

            <div>
              <button type="submit">Submit</button>
              <p>
                Already have an account? <a href="/signin">Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
