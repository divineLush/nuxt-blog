<template>
    <div class="admin-auth-page">
        <h2 class="admin-auth-page__title">{{ submitBtnText }}</h2>
        <form class="admin-auth-page__form" @submit.prevent="submit">
            <UiInput
                class="admin-auth-page__input"
                v-model="email"
                type="email"
                id="email"
            >
                Email
            </UiInput>        
            <UiInput
                class="admin-auth-page__input"
                v-model="password"
                type="password"
                id="password"
            >
                Password
            </UiInput>                    
            <UiButton
                class="admin-auth-page__btn"
                type="submit"
            >
                {{ submitBtnText }}
            </UiButton>
            <UiButton
                class="admin-auth-page__btn"
                type="button"
                @click="switchForm"
            >
                {{ switchBtnText }}
            </UiButton>
        </form>
        <span
            v-if="errorMessage"
            class="admin-auth-page__error-message"
        >
            {{ errorMessage }}
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            isLogin: true,
            errorMessage: ''
        }
    },

    computed: {
        submitBtnText() {
            return this.isLogin ? 'Login' : 'Sign Up';
        },

        switchBtnText() {
            return this.isLogin ? 'Switch to Sign Up' : 'Switch to Sign In';
        },
    },

    methods: {
        submit() {
            const payload = {
                isLogin: this.isLogin,
                email: this.email,
                password: this.password
            };
            this.$store.dispatch('authenticateUser', payload)
                .then(() => { this.$router.push('/admin') });
        },

        switchForm() {
            this.isLogin = !this.isLogin;
        },
    },
}
</script>

<style>
.admin-auth-page__title {
    text-align: center;
}

.admin-auth-page__form {
    max-width: 50%;
    margin: 0 auto;
}

.admin-auth-page__input {
    margin: 8px 0;
}

.admin-auth-page__btn {
    margin: 16px 0;
}
</style>
