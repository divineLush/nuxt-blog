<template>
    <div class="admin-page">
        <section class="admin-page__new-post">
            <nuxt-link to="/admin/new-post">Create Post</nuxt-link>
        </section>
        <section class="admin-page__posts">
            <h1>Existing Posts</h1>
            <PostList isAdmin />
        </section>
    </div>
</template>

<script>
import PostList from '~/components/posts/PostList.vue';

export default {
  components: {
    PostList,
  },
}
</script>
