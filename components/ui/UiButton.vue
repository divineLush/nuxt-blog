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
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    background-color: inherit;
    cursor: pointer;
    border: 2px solid var(--color-primary);
    padding: 5px 10px;
}
</style>
