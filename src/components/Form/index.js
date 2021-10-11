import './styles.scss';

const FormComponent = ()=>{
return(
    <>
    <div className="container">
        <div className="header-out">
            <div className="left-content">Don't have an account?</div>
            <div className="right-content"><span>Sign Up</span></div>
        </div>
        {/* <div className="divider"> */}
        <div className="circle-class-out">
            <div className="circle"></div>
            <div className="form-outer-cont">
                <div className="header-text">Welcome Back!</div>
                <div className="label">Email</div>
                <div className="input_container">
                        <input
                          type="email"
                          className="input"
                        />
                      </div>
                <div className="label">Password</div>
                <div className="input_container">
                        <input
                          type="password"
                          className="input"
                        />
                      </div>
                      <div className="remember-row">
                      <input type="checkbox" id="remember me" name="remember me" value="remember me" className="remember"/>
                      <label for="remember me"> Remember me</label><br />
                      </div>
                      <div className="button-cls"><span>Login</span></div>
                      <div className="help-text">This site is Protected by <span>Privacy Policy</span>&nbsp;
                      and <span> Terms of Service apply</span></div>
            </div>
        </div>
        </div>
    {/* </div> */}
    </>
)
}

export default FormComponent;