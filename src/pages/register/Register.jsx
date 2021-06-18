import "./Register.css"

function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Flashsocial</h3>
                    <span className="loginDesc">Welcome to my social!!!</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Confirm Password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">Login into Account</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
