<template>
    <form>
        Id: <input type="number" readonly>
        <br>
        Name: <input type="text">
        <br>
        Price: <input type="number" value="0" step="0.01">
        <br>
        <button type="button" @click="this.$emit('submit')" class="btn btn-success">Submit</button>
    </form>
</template>

<script>
export default {
    emits: ['submit'],
}
</script>
