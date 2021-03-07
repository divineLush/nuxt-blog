<template>
    <div class="admin-auth-page">
        <form class="admin-auth-page__form" @submit.prevent="submit">
            <UiInput v-model="editedPost.author" type="email" id="email">Email</UiInput>        
            <UiInput v-model="editedPost.title" id="password">Password</UiInput>                    
            <UiButton type="submit">Save</UiButton>                    
            <UiButton
                type="button"
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
}
</script>
