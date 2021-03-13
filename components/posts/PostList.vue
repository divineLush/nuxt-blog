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
import { mapGetters } from 'vuex';
import PostPreview from '~/components/posts/PostPreview.vue';

export default {
    name: 'PostList',

    components: {
        PostPreview,
    },

    // async fetch(content) {
    //     const loadedPosts = await new Promise(res => {
    //         setTimeout(() => {
    //             res(posts);
    //         }, 500);
    //     })

    //     console.log(context);
    //     this.posts = loadedPosts;
    // },

    // data() {
    //     return {
    //         posts: [],
    //     }
    // },

    computed: mapGetters([
        'posts',
    ]),
}
</script>

<style>
.post-list {
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.post-list__post:not(:last-child) {
  margin-right: 15px;
}
</style>
