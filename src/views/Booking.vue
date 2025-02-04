<template>
  <div class="booking">
    <div class="logo"><img src="../assets/SLT-logo.png" alt=""></div>
    <h1>Email us for booking at:</h1>
    <h2><a class="bookinglink" href="mailto:somethinglikethatclt@gmail.com">somethinglikethatclt@gmail.com</a></h2>
    <hr/>
    <h2>Need a reference?</h2> 
    <h3>Reach out to one of our favorite places to play:</h3>
    <h4 class="reference">John (Edge City Brewery): <a href="mailto:john@edgecitybrewery.com">john@edgecitybrewery.com</a></h4>
    <h4 class="reference">Kristen (Local Loaf): <a href="mailto:events@localloafcharlotte.com">events@localloafcharlotte.com</a></h4>
  </div>
</template>

<style lang="scss">
  .bookinglink {
    font-weight: bold;
  }
  .logo {
    width: 300px;
  }
  .booking .reference a {
    display: block;
  }
</style>