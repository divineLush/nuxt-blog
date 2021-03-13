<template>
    <div class="admin-post-page">
        <PostForm
            class="admin-post-page__form"
            :post="post"
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

    asyncData(context) {
        const id = context.params.postId;
        const url = `${process.env.baseUrl}/posts/${id}.json`;

        return axios.get(url)
            .then((res) => ({ post: { ...res.data, id } }))
            .catch(e => context.error(e));
    },

    methods: {
        onSubmit(editedPost) {
            this.$store.dispatch('editPost', editedPost)
                .then(() => { this.$router.push('/admin') })
        },
    },
}
</script>

<style>
.admin-post-page__form {
    margin: 0 auto;
}
</style>
