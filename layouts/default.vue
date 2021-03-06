<template>
  <div>
    <TheHeader />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import TheHeader from '~/components/navigation/TheHeader.vue';

export default {
  components: {
    TheHeader,
  }
}
</script>
