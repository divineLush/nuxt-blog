<template>
  <section class="home-page">
    <PostList />
  </section>
</template>

<script>
import PostList from '~/components/posts/PostList.vue';

export default {
  components: {
    PostList,
  },
}
</script>
