import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
        <h1>Sign up</h1>
    <p>Lütfen boşlukları gerekli bilgiler ile doldurunuz</p>
    <form method="post" action='login.html'>
      <fieldset>
        <label typeof="name">Adinizi ve soyadinizi giriniz: <input id="name" name="name" type="text" required /></label>
        <label typeof="username">Kullanici adinizi giriniz: <input id="username" name="username" type="text" required /></label>
        <label typeof="email">Email adresinizi giriniz: <input id="email" name="email" type="email" required /></label>
        <label typeof="password">Bir şifre oluşturunuz: <input id="password" name="password" type="password" pattern="[a-z0-5]{8,}" required /></label>
        <span className="toggle-password" id="togglePassword">👁️</span>
      </fieldset>
      <fieldset>
        <legend>Hesap türü (Zorunlu)</legend>
        <label typeof="personal-account"><input id="personal-account" type="radio" name="account-type" className="inline" checked /> Kişisel</label>
        <label typeof="business-account"><input id="business-account" type="radio" name="account-type" className="inline" /> Kurumsal</label>
      </fieldset>
      <fieldset>
        <label typeof="profile-picture">Bir profil resmi yükleyiniz: <input id="profile-picture" type="file" name="file" /></label>
        <label typeof="age">Yaşınızı giriniz: <input id="age" type="number" name="age" min="13" max="120" /></label>
        
        <label typeof="bio">Kendinizi tanıtınız:
          <textarea id="bio" name="bio" placeholder="Ben 3.sınıf yazılım öğrencisyim..."></textarea>
        </label>
      </fieldset>
      <label typeof="terms-and-conditions">
        <input className="inline" id="terms-and-conditions" type="checkbox" required name="terms-and-conditions" /><a href="terms.html">Kullanıcı sözleşmesini</a>`ni okudum ve onaylıyorum
      </label>
      <input type="submit" value="Kayıt" />
    </form>
    <script src="login.js"></script>
      </ParallaxScrollView>)
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
