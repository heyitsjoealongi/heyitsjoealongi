<template>
  <UContainer>
    <div
      class="avalinginc-theme-container block h-full w-auto max-w-6xl mx-3 md:mx-9 xl:mx-auto"
    >
      <div class="avalinginc-theme-column flex flex-col flex-auto">
        <Logo />
        <h1
          class="avalinginc-theme-heading-one my-3 text-3xl md:text-6xl subpixel-antialiased font-black text-left"
        >
          heyitsjoealongi
        </h1>
        <h3
          className="avalinginc-theme-heading-three my-3 lg:my-6 text-xl lg:text-3xl subpixel-antialiased font-light text-left"
        >
          Advising on resilience, engineering security, and shaping what’s next.
        </h3>
        <p
          className="avalinginc-theme-paragraph my-3 text-base subpixel-antialiased font-light text-left"
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
          className="avalinginc-theme-copyright my-3 text-xs subpixel-antialiased font-light text-left"
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
