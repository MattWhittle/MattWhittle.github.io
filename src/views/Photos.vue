<template>
  <div class="photos">
    <h1>Photos of the band</h1>
    <div class="photo-gallery">
      <div class="photo"><img src="../assets/sltopp.jpg" alt="Photo 1"></div>
      <div class="photo"><img src="../assets/sltgwr.jpg" alt="Photo 2"></div>
      <div class="photo"><img src="../assets/sltomb.jpg" alt="Photo 3"></div>
      <!-- Add more photos as needed -->
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