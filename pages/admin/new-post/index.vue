<template>
    <div class="new-post-page">
        <PostForm
            @submit="onSubmit"
        />
    </div>
</template>

<script>
import axios from 'axios';
import PostForm from '~/components/admin/PostForm.vue';

export default {
    layout: 'admin',

    components: {
        PostForm
    },

    methods: {
        onSubmit(post) {
            const node = 'posts';
            const url = `https://nuxt-blog-3ae83-default-rtdb.firebaseio.com/${node}.json`;
            const updatedDate = new Date();
            axios.post(url, { ...post, updatedDate })
                .then(res => console.log(res))
                .catch(error => console.log(error));
        },
    },
}
</script>
