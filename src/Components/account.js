import React, { useState } from "react";
import "./account.css";


const Account = () => {
    const [action, setAction] = useState("signin");
    
    return (
        <div className="register-container">
            {action === "signin" ? (
                <div className="Container1">
                    <div className="Header1">
                        <p>Sign In</p>
                    </div>
                    <div className="Inputs1">
                        <div className="Input1">
                            <input type="email" placeholder="   Email or phone number" />
                        </div>
                        <div className="Input1">
                            <input type="password" placeholder="    Password" />
                        </div>
                    </div>
                    <div className="Submit1">
                        <button>Sign In</button>
                    </div>
                    <div className="Footer1">
                        <p><strong>Forget Password?</strong></p>
                        <p><strong>Need help?</strong></p>
                    </div>
                    <div className="Bottom1">
                        <p><strong>New to Website?</strong></p>
                        <div className="p1"><p onClick={() => { setAction("signup") }}><u>Create New Account</u></p></div>
                    </div>
    
                </div>

            ) : (
                <div className="Container2">
                    <div className="Header2">
                        <p>Sign Up</p>
                    </div>
                    <div className="Inputs2">
                        <div className="Input2">
                            <input type="text" placeholder="   Username" />
                        </div>
                        <div className="Input2">
                            <input type="email" placeholder="    Email" />
                        </div>
                        <div className="Input2">
                            <input type="password" placeholder="    Password" />
                        </div>
                        <div className="Input2">
                            <input type="password" placeholder="    Confirm Password" />
                        </div>
                    </div>
                    <div className="Submit2">
                        <button>Sign Up</button>
                    </div>
                    <div className="Bottom2">
                        <p >Already have an account?</p>
                        <p className="p2" onClick={() => { setAction("signin") }}><u>Login</u></p>
                    </div>
                    
                </div>
            )}
        </div>
)}

export default Account;
