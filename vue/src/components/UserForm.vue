<template>
    <form>
        <div class="input-group mb-3">
            <span class="input-group-text">Name</span>
            <input type="text" class="form-control" v-model.trim="user.name">
            <span class="invalid" v-if="form.invalidName">
                Invalid user name.
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
            user: {
                name: '',
            },
            form: {
                invalidName: false,
            },
        };
    },
    methods: {
        submit() {
            if (this.validateForm()) {
                this.form.invalidName = false;
                this.$emit('submit', this.user);
            }
            this.user.name = '';
        },
        validateForm() {
            if (this.user.name === '') {
                this.form.invalidName = true;
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
