<template>
    <div class="post-list">
        <PostPreview
            v-for="(post, key) in posts"
            :key="key"
            :post="post"
            class="post-list__post"
        />
    </div>
</template>

<script>
import PostPreview from '~/components/posts/PostPreview.vue';
import posts from '~/assets/js/posts';

export default {
    name: 'PostList',

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
.post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.post-list__post:not(:last-child) {
  margin-right: 15px;
}
</style>