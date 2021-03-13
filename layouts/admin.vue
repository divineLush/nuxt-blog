<template>
    <div>
        <header class="admin-header">
            <nav>
                <nuxt-link class="admin-header__nav-link" to="/">Home</nuxt-link>
                <nuxt-link class="admin-header__nav-link" to="/admin">Admin</nuxt-link>
                <nuxt-link class="admin-header__nav-link" to="/admin/new-post">Create Post</nuxt-link>
            </nav>
            <UiButton
                v-if="isAuth"
                class="admin-header__btn"
                @click="logout"
            >
                Logout
            </UiButton>
        </header>
        <main>
            <Nuxt />
        </main>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    // order matters
    middleware: ['checkAuth', 'auth'],

    computed: mapGetters({
        isAuth: 'isAuth',
    }),

    methods: {
        logout() {
            this.$store.dispatch('logout');
            this.$router.push('/');
        },
    },
}
</script>

<style>
.admin-header {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
}
</style>
