<template>
    <div class="new-post-page">
        <form class="new-post-page__form" @submit.prevent="submit">
            <UiInput v-model="editedPost.author" id="author">Author Name</UiInput>        
            <UiInput v-model="editedPost.title" id="title">Title</UiInput>                    
            <UiInput v-model="editedPost.thumbnailLink" id="thumbnail">Thumbnail Link</UiInput>
            <UiInput
                control-type="textarea"
                v-model="editedPost.content"
                id="content"
                type="textarea"
            >
                Content
            </UiInput>                    
            <UiButton type="submit">Save</UiButton>                    
            <UiButton
                type="button"
                style="margin-left: 10px"
                btn-style="cancel"
                @click="cancel"
            >
                Cancel
            </UiButton>
        </form>
    </div>
</template>

<script>
import UiButton from '~/components/ui/UiButton.vue';
import UiInput from '~/components/ui/UiInput.vue';

export default {
    components: {
        UiButton,
        UiInput,
    },

    data() {
        return {
            editedPost: {
                author: '',
                title: '',
                thumbnailLink: '',
                content: '',
            }
        }
    },

    methods: {
        submit() {},

        cancel() {},
    },
}
</script>

<style>
.new-post-page__form {
    max-width: 40%;
}
</style>
