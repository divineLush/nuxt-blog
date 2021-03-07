<template>
    <div class="admin-post-page">
        <section class="admin-post-page__form">
            <PostForm :post="post" />
        </section>
    </div>
</template>

<script>
import PostForm from '~/components/admin/PostForm.vue';

export default {
    components: {
        PostForm
    },

    data() {
        return {
            post: {
                author: 'Alex',
                title: 'My awesome Post',
                content: 'This is content',
                thumbnailLink: '',
            },
        }
    },
}
</script>
