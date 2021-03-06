<template>
    <section class="posts-page">
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
