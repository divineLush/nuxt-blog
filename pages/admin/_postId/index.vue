<template>
    <div class="admin-post-page">
        <section class="admin-post-page__form">
            <PostForm
                :post="post"
                @submit="onSubmit"
            />
        </section>
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
