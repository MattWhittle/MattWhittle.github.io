<template>
  <div class="photos">
    <h1>Photos of the band</h1>
    <div class="photo-gallery">
      <div class="photo"><img src="../assets/sltopp.jpg"></div>
      <div class="photo"><img src="../assets/sltgwr.jpg"></div>
      <div class="photo"><img src="../assets/sltomb.jpg"></div>
      <div class="photo"><img src="../assets/sltec.jpg"></div>
      <div class="photo"><img src="../assets/sltchristmas.jpg"></div>
      <div class="photo"><img src="../assets/sltomb1.jpg"></div>
      <div class="photo"><img src="../assets/sltomb2.jpg"></div>
      <div class="photo"><img src="../assets/sltomb3.jpg"></div>
      <div class="photo"><img src="../assets/sltomb4.jpg"></div>
      <div class="photo"><img src="../assets/sltomb5.jpg"></div>
      <div class="photo"><img src="../assets/sltomb6.jpg"></div>
      <div class="photo"><img src="../assets/sltomb8.jpg"></div>

  </div>
  </div>
</template>

<style scoped>
  .photo-gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-gap: 10px;
      padding: 10px;
  }

  .photo {
      overflow: hidden;
  }

  .photo img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* This ensures that the aspect ratio is maintained while covering the area */
  }
</style>