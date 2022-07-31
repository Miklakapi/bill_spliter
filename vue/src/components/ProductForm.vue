<template>
    <form>
        <div class="input-group mb-3">
            <span class="input-group-text">Name</span>
            <input type="text" class="form-control" v-model.trim="product.name">
            <span class="invalid" v-if="form.invalidName">
                Invalid product name.
            </span>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Price</span>
            <input type="number" class="form-control" step="0.01" v-model.number="product.price">
            <span class="invalid" v-if="form.invalidPrice">
                Invalid product price.
            </span>
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
            },
            form: {
                invalidName: false,
                invalidPrice: false,
            },
        };
    },
    methods: {
        submit() {
            if (this.validateForm()) {
                this.form.invalidName = false;
                this.form.invalidPrice = false;
                this.$emit('submit', this.product);
            }
            this.product.name = '';
            this.product.price = '';
        },
        validateForm() {
            if (this.product.name === '') {
                this.form.invalidName = true;
                return false;
            }
            if (this.product.price <= 0 || this.product.price === '') {
                this.form.invalidPrice = true;
                return false;
            }
            return true;
        },
    }
}
</script>

<style>
.input-group-text {
    width: 90px;
}

.invalid {
    width: 100%;
    margin-top: 0.25rem;
    font-size: 0.875em;
    color: #dc3545;
    font-weight: bold;
}
</style>
