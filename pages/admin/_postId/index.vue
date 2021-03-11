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
        const url = `https://nuxt-blog-3ae83-default-rtdb.firebaseio.com/posts/${id}.json`;

        return axios.get(url)
            .then((res) => ({ post: res.data }))
            .catch(e => context.error(e));
    },

    computed: {
        id() {
            return this.$route.params.postId;
        }
    },

    methods: {
        onSubmit(editedPost) {
            const url = `https://nuxt-blog-3ae83-default-rtdb.firebaseio.com/posts/${this.id}.json`;
            axios.put(url, editedPost)
                .then(res => {
                    console.log(res);
                    this.$router.push('/admin');
                })
                .catch(e => console.log(e));
        },
    },
}
</script>
