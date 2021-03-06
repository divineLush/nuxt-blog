<template>
    <header class="the-header">
        <h1 :class="titleClass">Get the latest tech news!</h1>
        <nav class="the-header__nav">
            <nuxt-link class="the-header__link" to="/">Home</nuxt-link>
            <nuxt-link class="the-header__link" to="/posts">Blog</nuxt-link>
            <nuxt-link class="the-header__link" to="/admin">Admin</nuxt-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'TheHeader',

    data() {
        return {
            isTransparent: false,
        }
    },

    mounted() {
        setInterval(() => {
            this.isTransparent = !this.isTransparent;
        }, 4000);
    },

    computed: {
        titleClass() {
            return [
                'the-header__title',
                {
                    _transparent: this.isTransparent,
                    _solid: !this.isTransparent
                }
            ];
        }
    }
}
</script>

<style>
.the-header {
    font-size: 1.4rem;
    padding: 20px;
}

.the-header__title {
    transition: opacity 1s ease;
}

.the-header__title._transparent {
    opacity: .5;
}

.the-header__title._solid {
    opacity: 1;
}

.the-header__link {
    text-decoration: none;
    transition: opacity .4s ease;
}

.the-header__link:hover {
    opacity: .5;
}

.the-header__link.nuxt-link-exact-active {
    text-decoration: underline;
}
</style>