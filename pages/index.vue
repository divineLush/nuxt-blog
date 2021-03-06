<template>
  <section class="home-page">
    <PostPreview
      v-for="(post, key) in posts"
      :key="key"
      :post="post"
      class="home-page__post"
    />
  </section>
</template>

<script>
import PostPreview from '~/components/posts/PostPreview.vue';
import posts from '~/assets/js/posts';

export default {
  components: {
    PostPreview,
  },

  computed: {
    posts() {
      return posts;
    }
  }
}
</script>

<style>
.home-page {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.home-page__post:not(:last-child) {
  margin-right: 15px;
}
</style>