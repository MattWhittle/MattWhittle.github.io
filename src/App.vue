<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/shows">Shows</router-link> |
      <router-link to="/photos">Photos</router-link> |
      <router-link to="/booking">Booking</router-link> | follow us:
      <a href="https://www.instagram.com/somethinglikethatclt/reels/" target="_blank"><i class="fab fa-instagram"></i></a> 
      <a href="https://www.facebook.com/SomethingLikeThatCLT" target="_blank"><i class="fab fa-facebook-f"></i></a>
    </div>
    <div class="main-content">
      <router-view/>
    </div>
    
    <footer>
      <div class="footer">
          <div class="email" v-if="$route.path !== '/booking'">
            Email: <a class="our-email" href="mailto:somethinglikethatclt@gmail.com">somethinglikethatclt@gmail.com</a>
            <hr>
            <h3>Need a reference?</h3>
            <h4>Reach out to one of our favorite places to play:</h4>
            <p class="reference">John (Edge City Brewery): <a href="mailto:john@edgecitybrewery.com">john@edgecitybrewery.com</a></p>
            <p class="reference">Kristen (Local Loaf): <a href="mailto:events@localloafcharlotte.com">events@localloafcharlotte.com</a></p>
          </div>
          <div class="social-row">
            <a href="https://www.instagram.com/somethinglikethatclt/reels/" target="_blank"><i class="fab fa-instagram"></i></a>        
            <a href="https://www.facebook.com/SomethingLikeThatCLT" target="_blank"><i class="fab fa-facebook-f"></i></a>
          </div>
          <div v-if="$route.path !== '/booking'" class="logo"><img src="./assets/SLT-logo.png" alt=""></div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
// gray-blue: #384e7a, slate-blue: #003663, blue: #0000ab, light-blue: #0072bc, black: #000000

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #384e7a;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1, h2, h3, h4, h5 {
  color: #000013;
  margin-bottom: 10px;
}

h1 {
  font-size: 36px; /* Large for main title */
  font-weight: bold;
}

h2 {
  font-size: 30px; /* Subheading 1 */
  font-weight: bold;
}

h3 {
  font-size: 24px; /* Subheading 2 */
  font-weight: bold;
}

h4 {
  font-size: 20px; /* Subheading 3 */
  font-weight: bold;
}

h5 {
  font-size: 18px; /* Subheading 4 */
  font-weight: bold;
}

p {
  color: #003663;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 16px; /* Standard text size for paragraphs */
  line-height: 1.5;
}

div {
  color: #384e7a;
}

.main-content {
  width: 1100px;
  max-width: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #003663;
}

#nav a.router-link-exact-active {
  color: #0072bc;
}

#nav a:hover {
  color: #0081d6;
}

#nav .fa-instagram {
  margin-right: 4px;
}

a {
  color: #003663;
  font-weight: bold;
  text-decoration: none;
}

a:hover {
  color: #0072bc;
}

img {
  max-width: 100%;
  height: auto;
}

.footer {
  margin-top: 30px;
}

.footer .our-email {
  display: block;
  margin-bottom: 1em;
}

.footer .social-row {
  margin-top: 20px;
  margin-bottom: 20px;
  gap: 16px;
  display: flex;
  justify-content: center;
  font-size: 50px;
}

.logo {
  width: 200px;
  margin: 0 auto;
}

hr {
  width: 500px;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.reference {
  max-width: 100%;
  width: 400px;
  background: #e7efe6;
  border-radius: 8px;
  padding: 16px;
  color: #000;
  margin-left: auto;
  margin-right: auto;
}

.reference a {
  color: #003663;
}
.reference a:hover {
  color: #0072bc;
}

@media (max-width: 1200px) {
  .main-content {
    width: 900px;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 26px;
  }

  h3 {
    font-size: 22px;
  }

  h4 {
    font-size: 18px;
  }

  h5 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }
}

@media (max-width: 992px) {
  .main-content {
    width: 700px;
  }

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 18px;
  }

  h5 {
    font-size: 16px;
  }

  p {
    font-size: 15px;
  }

  .footer .social-row {
    font-size: 40px;
  }
}

@media (max-width: 768px) {
  .main-content {
    width: 100%;
    padding: 0 10px;
  }

  h1 {
    font-size: 26px;
  }

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 18px;
  }

  h5 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }

  .footer .social-row {
    font-size: 35px;
  }

  .logo {
    width: 150px;
  }

  hr {
    width: 100%;
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 22px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-size: 16px;
  }

  h5 {
    font-size: 14px;
  }

  p {
    font-size: 14px;
  }

  .footer .social-row {
    font-size: 30px;
  }

  .logo {
    width: 120px;
  }

  .reference {
    width: 90%;
  }
}

</style>
