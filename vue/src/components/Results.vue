<template>
    <section class="footer">
        <div class="me-3"><button-element @click="this.$emit('reset')">Reset</button-element></div>
        <div class="ms-3"><button-element @click="this.$emit('calculate')">Calculate</button-element></div>
    </section>
</template>

<script>
export default {
    emits: ['calculate', 'reset'],
}
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #272c30;
    height: 10%;
}
</style>
