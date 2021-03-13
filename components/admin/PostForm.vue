<template>
    <form class="post-form" @submit.prevent="submit">
        <UiInput class="post-form__input" v-model="editedPost.author" id="author">Author Name</UiInput>        
        <UiInput class="post-form__input" v-model="editedPost.title" id="title">Title</UiInput>                    
        <UiInput class="post-form__input" v-model="editedPost.thumbnailLink" id="thumbnail">Thumbnail Link</UiInput>
        <UiInput class="post-form__input" v-model="editedPost.previewText" id="preview">Preview Text</UiInput>
        <UiInput
            class="post-form__input"
            control-type="textarea"
            v-model="editedPost.content"
            id="content"
            type="textarea"
        >
            Content
        </UiInput>                    
        <UiButton
            class="post-form__btn"
            type="submit"
        >
            Save
        </UiButton>                    
        <UiButton
            class="post-form__btn"
            type="button"
            @click="cancel"
        >
            Cancel
        </UiButton>
    </form>
</template>

<script>
const defaultPost = {
    author: '',
    title: '',
    thumbnailLink: '',
    previewText: '',
    content: '',
};

export default {
    name: 'PostForm',

    props: {
        post: {
            type: Object,
            required: false,
        },
    },

    data() {
        return {
            editedPost: this.post ? { ...this.post } : { ...defaultPost },
        }
    },

    methods: {
        submit() {
            this.$emit('submit', this.editedPost);
        },

        cancel() {
            this.editedPost = defaultPost;
            this.$emit('cancel');
        },
    },
}
</script>

<style>
.post-form {
    max-width: 60%;
}

.post-form__input {
    margin: 10px 0;
}

.post-form__btn {
    margin: 16px 0;
}
</style>
