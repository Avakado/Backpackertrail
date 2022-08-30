<template>
  <div class="h-680px <lg:h-490px  <lg:mb-450px top bg-cover">
    <div class="h-full">
      <Header></Header>
      <div
        class="
          flex
          justify-between
          max-w-1416px
          m-auto
          mt-60px
          <2xl:pl-20px <2xl:pr-20px
          <lg:flex-col-reverse <lg:items-center
        "
      >
        <div class="max-w-636px <lg:flex <lg:flex-col-reverse <lg:items-center <lg:content-center">
          <div class="text-6xl <lg:hidden">
            The standard chunk <br />
            of Lorem Ipsum
          </div>
          <div class="text-xl mt-24px <lg:text-gray-800 <lg:text-center">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form
          </div>
          <button
            class="
              btn
              w-216px
              h-60px
              flex
              rounded-4xl
              mt-64px
              <lg:mt-10px
              justify-center
              text-2xl
              items-center
              text-gray-800
              flex
              content-center
              <lg:font-bold
            "
          >
            Start now <img src="../assets/rightIcon.svg" class="ml-20px flex" />
          </button>
        </div>
        <div>
          <img src="../assets/backpacker-phone.png" />
        </div>
        <div class="text-4xl font-bold hidden <lg:block">
          The standard chunk <br />
          <span style="color: #00cfff">of Lorem Ipsum</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
</script>

<style lang="css" scoped>
.top {
  background-image: url("../assets/bg-banner.jpeg");
}
.btn {
  background: #00cfff;
}
</style>