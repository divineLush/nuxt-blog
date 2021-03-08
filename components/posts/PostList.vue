<template>
    <div class="post-list">
        <!-- camelCase properties such as isAdmin should be bound as kebab-case -->
        <PostPreview
            v-for="(post, key) in posts"
            :key="key"
            :post="post"
            :is-admin="isAdmin"
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

    // runs on the server
    // waits for the asynchronous task to finish and then returns a page
    // gotta return a value
    // 'this' doesn't work as expected
    // gotta return a promise or execute a callback method
    // so asyncData has the idea when the work is finished
    // asyncData(context, callback) {
    //     console.log(context, callback, this);
    //     setTimeout(() => {
    //         // gotta pas an error or null as a first argument
    //         // and object that will become a 'data' property
    //         callback(null, { posts });
    //     }, 500);
    // },

    asyncData(context) {
        console.log(context);
        return new Promise((res, rej) => {
            setTimeout(() => {
                res({ posts });
            }, 500);
        })
        .then(data => data)
        .catch(error => context.error(new Error()));
    },

    props: {
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },

    // shouldn't use 'posts' inside 'data'
    // as this code runs on the client
    // and will override asyncData
    // data() {
    //     return {
    //         posts: [],
    //     }
    // },
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
