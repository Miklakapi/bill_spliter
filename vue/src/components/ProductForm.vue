<template>
    <form>
        <div class="input-group mb-3">
            <span class="input-group-text">Name</span>
            <input type="text" class="form-control" v-model.trim="product.name">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Price</span>
            <input type="number" class="form-control" step="0.01" v-model.number="product.price">
        </div>
        <button type="button" @click="submit" class="btn btn-success">Submit</button>
    </form>
</template>

<script>
export default {
    emits: ['submit'],
        data() {
        return {
            product: {
                name: '',
                price: '',
            }
        };
    },
    methods: {
        submit() {
            this.$emit('submit', this.product);
            this.product.name = '';
        }
    }
}
</script>
