<template>
  <div class="home-page">
    <header class="home-page__intro">
      <h1 class="home-page__title">Get the latest tech news!</h1>
    </header>
    <section class="home-page__posts-wrapper">
      <PostPreview
        v-for="(post, key) in posts"
        :key="key"
        :post="post"
        class="home-page__post"
      />
    </section>
  </div>
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
.home-page__intro {
  position: relative;
  padding: 50px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.home-page__title {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  padding: 10px;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .home-page__title {
    font-size: 2rem;
  }
}

.home-page__posts-wrapper {
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