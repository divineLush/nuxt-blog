<template>
    <div class="admin-auth-page">
        <form class="admin-auth-page__form" @submit.prevent="submit">
            <UiInput class="admin-auth-page__input" v-model="editedPost.author" type="email" id="email">Email</UiInput>        
            <UiInput class="admin-auth-page__input" v-model="editedPost.title" id="password">Password</UiInput>                    
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
export default {
    layout: 'admin',

    data() {
        return {
            editedPost: {
                author: '',
                title: '',
            },
        }
    },
}
</script>

<style>
.admin-auth-page__form {
    max-width: 40%;
}

.admin-auth-page__input {
    margin: 8px 0;
}
</style>
