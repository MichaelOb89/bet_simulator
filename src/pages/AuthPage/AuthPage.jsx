import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";

export default function AuthPage({setUser}){
    const [login, setLogin] = useState(true)
    const changeForm = () => {
        setLogin(!login)
    }
    return(
        <main>
            <h1>Auth Page</h1>
            {login ? <h3 onClick={changeForm}>Click here to sign up</h3> :
            <h3 onClick={changeForm}>Click to login existing user</h3>
            }
            { login ?
            <LoginForm setUser={setUser}/> :
            <SignUpForm setUser={setUser}/>
            }
        </main>
    )
}