<template>
    <div class="button-container row text-center">
        <div class="col-6">
            <button-element @click="this.$emit('product')">Add product</button-element>
        </div>
        <div class="col-6 text-center">
            <button-element @click="this.$emit('user')">Add user</button-element>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['product', 'user'],
}
</script>

<style lang="scss" scoped>
.button-container {
    height: 8%;
    align-items: center;
    justify-content: center;
}
</style>
