<template>
  <div class="flex h-816px <lg:h-554px">
    <!-- <div v-for="photo of photos" :key="photo.id">
      <img :src="photo.download_url" class="w-300px h-600px" />
    </div> -->
    <Carousel
      :settings="settings"
      :breakpoints="breakpoints"
      class="h-816px <lg:h-554px w-full"
    >
      <Slide v-for="slide in photos" :key="slide">
        <!-- <img class="carousel__item mr-27px" :src="slide.download_url" /> -->
        <div
          class="h-816px <lg:h-554px bg-cover w-full p-20px"
          :style="{ 'background-image': 'url(' + slide.download_url + ')' }"
        ></div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

import axios from "axios";
import { onMounted, ref } from "vue";

const photos = ref([]);

const getPhotos = async () => {
  const photos = await axios.get("photos/v2/list");
  setPhotos(photos.data);
};
const setPhotos = (files) => {
  for (let index = 0; index < 5; index++) {
    photos.value.push(files[index]);
  }
  // photos.value = files;
};

onMounted(() => {
  getPhotos();
});

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
  wrapAround: true,
};
const breakpoints = {
  700: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
};
</script>

<style lang="css">
.carousel__pagination-button {
  width: 33px !important;
  height: 33px !important;
  border-radius: 50% !important;
  background: #8a8a8a !important;
}
.carousel__pagination-button--active {
  background: white !important;
}
.carousel__pagination {
  margin-top: -60px;
  z-index: 20;
  position: relative;
}
</style>