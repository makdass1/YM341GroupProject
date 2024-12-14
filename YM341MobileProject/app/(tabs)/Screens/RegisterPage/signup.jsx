import React from "react";
import Header from "../components/header";
import './signup.css'
const Signup = () => {
    return(
        <div className="signup">
            <Header />
            <h1>Sign up</h1>
    <p>Lütfen boşlukları gerekli bilgiler ile doldurunuz</p>
    <form method="post" action='login.html'>
      <fieldset>
        <label htmlFor="name">Adınızı ve soyadınızı giriniz: <input id="name" name="name" type="text" required /></label>
        <label htmlFor="username">Kullanıcı adınızı giriniz: <input id="username" name="username" type="text" required /></label>
        <label htmlFor="email">Email adresinizi giriniz: <input id="email" name="email" type="email" required /></label>
        <label htmlFor="password">Bir şifre oluşturunuz: <input id="password" name="password" type="password" pattern="[a-z0-5]{8,}" required /></label>
        
      </fieldset>
      <fieldset>
        <legend>Hesap türü (Zorunlu)</legend>
        <label htmlFor="personal-account"><input id="personal-account" type="radio" name="account-type" className="inline" defaultChecked /> Kişisel</label>
        <label htmlFor="business-account"><input id="business-account" type="radio" name="account-type" className="inline" /> Kurumsal</label>
      </fieldset>
      <fieldset>
        <label htmlFor="profile-picture">Bir profil resmi yükleyiniz: <input id="profile-picture" type="file" name="file" /></label>
        <label htmlFor="age">Yaşınızı giriniz: <input id="age" type="number" name="age" min="13" max="120" /></label>
        
        <label htmlFor="bio">Kendinizi tanıtınız:
          <textarea id="bio" name="bio" rows="3" cols="30" placeholder="Ben 3.sınıf yazılım öğrencisyim..."></textarea>
        </label>
      </fieldset>
      <label htmlFor="terms-and-conditions">
        <input className="inline" id="terms-and-conditions" type="checkbox" required name="terms-and-conditions" /><a href="terms.html">Kullanıcı sözleşmesini</a>`ni okudum ve onaylıyorum
      </label>
      <input type="submit" value="Kayıt" />
    </form>
        </div>
    )
}

export default Signup