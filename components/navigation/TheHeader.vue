<template>
    <header class="the-header">
        <h1 :class="titleClass">Get the latest tech news!</h1>
        <span v-if="isAuth">logged in</span>
        <nav class="the-header__nav">
            <nuxt-link class="the-header__link" to="/">Home</nuxt-link>
            <nuxt-link class="the-header__link" to="/about">About</nuxt-link>
            <nuxt-link class="the-header__link" to="/admin">Admin</nuxt-link>
        </nav>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'TheHeader',

    data() {
        return {
            isTransparent: false,
        }
    },

    mounted() {
        this.toggleTransparency();
        setInterval(() => {
            this.toggleTransparency();
        }, 3000);
    },

    computed: {
        ...mapGetters({
            isAuth: 'isAuth',
        }),

        titleClass() {
            return [
                'the-header__title',
                {
                    _transparent: this.isTransparent,
                    _solid: !this.isTransparent
                }
            ];
        }
    },

    methods: {
        toggleTransparency() {
            this.isTransparent = !this.isTransparent;
        }
    },
}
</script>

<style>
.the-header {
    font-size: 1.4rem;
    margin-bottom: 30px;
}

.the-header__title {
    transition: opacity 3s ease;
}

.the-header__title._transparent {
    opacity: .3;
}

.the-header__title._solid {
    opacity: 1;
}
</style>
