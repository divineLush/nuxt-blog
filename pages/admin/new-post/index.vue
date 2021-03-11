<template>
    <div class="new-post-page">
        <PostForm
            @submit="onSubmit"
            @cancel="$router.push('/admin')"
        />
    </div>
</template>

<script>
import PostForm from '~/components/admin/PostForm.vue';

export default {
    layout: 'admin',

    components: {
        PostForm
    },

    methods: {
        onSubmit(post) {
            this.$store.dispatch('addPost', post)
                .then(() => { this.$router.push('/admin') });
        },
    },
}
</script>
