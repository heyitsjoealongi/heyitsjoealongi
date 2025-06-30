<template>
  <UContainer>
    <div
      class="heyitsjoealongi-theme-container flex flex-col flex-auto justify-center items-center h-full w-auto max-w-3xl mt-[3vh] lg:mt-[9vh] mx-3 md:mx-9 xl:mx-auto"
    >
      <div
        class="heyitsjoealongi-theme-column flex flex-col flex-auto justify-self-center"
      >
        <Logo />
        <h1
          class="heyitsjoealongi-theme-heading-one my-3 text-3xl md:text-6xl subpixel-antialiased font-light text-left"
        >
          heyitsjoealongi
        </h1>
        <h3
          className="heyitsjoealongi-theme-heading-three my-3 lg:my-6 text-xl lg:text-3xl subpixel-antialiased font-light text-left"
        >
          Advising on resilience, engineering security, and shaping what’s next.
        </h3>
        <p
          className="heyitsjoealongi-theme-paragraph my-3 text-base subpixel-antialiased font-light text-left"
        >
          Developing modern applications from code to cloud in JavaScript,
          TypeScript, Java, C#/.NET, Python, SQL, and NoSQL. Building
          cloud-native and on-prem systems with containers and machine learning.
          Streamlining delivery with agile development, hybrid transformation,
          and effective development operation processes. Enhancing applications
          with modern code and intelligent systems—ready for today, built for
          tomorrow.
        </p>
        <Footer />
        <p
          className="heyitsjoealongi-theme-copyright my-3 text-xs subpixel-antialiased font-light text-left"
        >
          © {{ year }} heyitsjoealongi. All rights reserved.
        </p>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<style></style>
