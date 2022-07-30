<template>
    <form>
        Id: <input type="number" readonly>
        <br>
        Name: <input type="text">
        <br>
        <button type="button" @click="this.$emit('submit')" class="btn btn-success">Submit</button>
    </form>
</template>

<script>
export default {
    emits: ['submit'],
}
</script>
