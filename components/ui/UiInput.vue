<template>
    <div class="ui-input">
        <label :for="id"><slot></slot></label>
        <component
            :is="inputComponent"
            class="ui-input__input"
            v-bind="$attrs"
            :id="id"
            :value="value"
            :type="type"
            @input="$emit('input', $event.target.value)"
        ></component>
    </div>
</template>

<script>
export default {
    name: 'UiInput',

    props: {
        id: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'text',
        },
        value: {
            type: String,
            default: '',
        },
    },

    computed: {
        inputComponent() {
            return this.type !== 'textarea' ? 'input' : 'textarea';
        }
    },
}
</script>

<style>
.ui-input {
    display: flex;
    flex-direction: column;
}

.ui-input__input {
    background-color: inherit;
    border: 2px solid var(--color-primary);
    color: inherit;
    font-family: inherit;
    font-size: inherit;
}
</style>
