import React from "react";
import Header from "../components/header";
import './login.css'
const Login = () => {
    return(
        <div className="login">
            <Header />
    <form className="login-body" method="post" action='/blanked'>
    <h1>Login</h1>
    <p>Lütfen boşlukları gerekli bilgiler ile doldurunuz</p>
    
      <fieldset>
        <label htmlFor="username">Kullanıcı adınızı veya Email adresinizi giriniz: <input id="username" name="username" type="text" required /></label>
        
        <label htmlFor="password">Şifrenizi giriniz: <input id="password" name="password" type="password" pattern="[a-z0-5]{8,}" required /></label>

        
      </fieldset>
      <input type="submit" value="Giriş Yap" />
    </form>
        </div>
    )
}

export default Login