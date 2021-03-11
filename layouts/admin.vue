<template>
    <div>
        <header class="admin-header">
            <nav>
                <nuxt-link class="admin-header__nav-link" to="/">Home</nuxt-link>
                <nuxt-link class="admin-header__nav-link" to="/admin">Admin</nuxt-link>
            </nav>
        </header>
        <main>
            <Nuxt />
        </main>
    </div>
</template>

<style>
.admin-header {
    margin-bottom: 30px;
}
</style>
