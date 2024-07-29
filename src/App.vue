<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/shows">Shows</router-link> |
      <router-link to="/photos">Photos</router-link> |
      <router-link to="/booking">Booking</router-link>
    </div>
    <div class="main-content">
      <router-view/>
    </div>
    
    <footer>
      <div class="footer">
          <div class="email" v-if="$route.path !== '/booking'">Email: <a href="mailto:somethinglikethatclt@gmail.com">somethinglikethatclt@gmail.com</a></div>
          <div class="social-row">
            <a href="https://www.facebook.com/SomethingLikeThatCLT" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/somethinglikethatclt" target="_blank"><i class="fab fa-instagram"></i></a>        
          </div>
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
h1,h2,h3,h4,h5 {
  color: #000;
}
p, div {
  color: #384e7a;
}
.main-content{
  width: 1100px;
  max-width: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #003663;
    &.router-link-exact-active {
      color: #0072bc;
    }
  }
}
a {
  color: #003663;
  font-weight: bold;
  text-decoration: none;
  :hover {
    color: #0072bc;
  }
}
img {
  max-width: 100%;
  height: auto;
}
.footer {
  margin-top: 30px;
  a {
    display: block;
  }
  .social-row {
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 16px;
    display: flex;
    justify-content: center;
    font-size: 50px;
  }
}
</style>
