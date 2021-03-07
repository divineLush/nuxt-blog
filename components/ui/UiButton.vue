<template>
    <button
        class="ui-button"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'UiButton',
}
</script>

<style>
.ui-button {
    color: var(--color-primary);
    font-size: inherit;
    font-family: inherit;
    background-color: var(--color-background);
    cursor: pointer;
    border: 2px solid var(--color-primary);
    padding: 5px 10px;
    transition: all .3s ease;
}

.ui-button:hover,
.ui-button:focus {
    background-color: var(--color-primary);
    color: var(--color-background);
}
</style>
