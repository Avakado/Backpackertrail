<template>
  <div class="max-w-1416px m-auto <xl:pl-20px <xl:pr-20px">
    <div class="<xl:pl-20px <xl:pr-20px <lg:hidden">
      <div class="text-4xl flex justify-center mt-20px" style="color: #00cfff">
        Contrary to popular belief, Lorem Ipsum is not simply random text
      </div>
      <div class="flex justify-center mt-44px">
        <img src="../assets/bottomIcon.svg" />
      </div>
    </div>

    <div
      class="pt-110px pb-110px flex justify-between items-center <xl:flex-col"
    >
      <div
        class="
          text-5xl text-gray-700 text-center
          font-bold
          hidden
          mb-48px
          <lg:block
        "
      >
        <span style="color: #00cfff"> The standard </span><br />
        chunk of Lorem Ipsum used since the 1500s is reproduced
      </div>
      <div class="<xl:mb-48px">
        <img
          src="../assets/866-536x354.jpeg"
          class="
            rounded-4xl
            shadow-lg
            w-718px
            h-497px
            shake
            <lg:w-full <lg:h-auto
          "
        />
      </div>
      <div class="text-gray-700 max-w-550px">
        <div class="text-5xl <lg:hidden">
          <span style="color: #00cfff"> The standard </span><br />
          chunk of Lorem Ipsum used since the 1500s is reproduced
        </div>
        <div class="mt-36px">
          Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
          Cicero are also reproduced
        </div>
        <div class="mt-20px">
          <div class="mb-24px flex items-center">
            <img src="../assets/check-circle.svg" class="flex mr-14px" />
            Where can I get some
          </div>
          <div class="mb-24px flex items-center">
            <img src="../assets/check-circle.svg" class="flex mr-14px" />

            Where does it come from
          </div>
          <div class="mb-24px flex items-center">
            <img src="../assets/check-circle.svg" class="flex mr-14px" />

            Why do we use it
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="max-w-1416px m-auto <xl:pl-20px <xl:pr-20px">
      <div
        class="
          pt-110px
          pb-110px
          flex
          justify-between
          flex-row-reverse
          items-center
          <xl:flex-col
        "
      >
        <div
          class="
            text-5xl text-gray-700
            hidden
            text-center
            font-bold
            mb-48px
            <lg:block
          "
        >
          <span style="color: #00cfff"> Share </span>fact<br />
          that a reader<br />
          will be distracted
        </div>
        <div class="<xl:mb-48px">
          <img
            src="../assets/1044-536x354.jpeg"
            class="
              rounded-4xl
              shadow-lg
              w-718px
              h-497px
              shake
              <lg:w-full <lg:h-auto
            "
          />
        </div>
        <div class="text-gray-700 max-w-550px">
          <div class="text-5xl <lg:hidden">
            <span style="color: #00cfff"> Share </span>fact<br />
            that a reader<br />
            will be distracted
          </div>
          <div class="mt-36px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </div>
          <div class="mt-20px">
            <div class="mb-24px flex items-center">
              <img src="../assets/check-circle.svg" class="flex mr-14px" />
              The standard Lorem Ipsum passage
            </div>
            <div class="mb-24px flex items-center">
              <img src="../assets/check-circle.svg" class="flex mr-14px" />
              Lorem ipsum dolor sit amet
            </div>
            <div class="mb-24px flex items-center">
              <img src="../assets/check-circle.svg" class="flex mr-14px" />
              Sed ut perspiciatis unde omnis iste natus
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="css" scoped>
.shake {
  animation: shake 8s ease infinite;
}
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-10px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(10px);
  }
}
</style>