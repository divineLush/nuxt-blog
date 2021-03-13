<template>
    <div class="admin-page">
        <section class="admin-page__posts">
            <h1>Existing Posts</h1>
            <PostList />
        </section>
    </div>
</template>

<script>
import PostList from '~/components/posts/PostList.vue';

export default {
  layout: 'admin',

  components: {
    PostList,
  },
}
</script>
