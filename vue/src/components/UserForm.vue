<template>
    <form>
        <div class="input-group mb-3">
            <span class="input-group-text">Name</span>
            <input type="text" class="form-control" v-model.trim="user.name">
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
            }
        };
    },
    methods: {
        submit() {
            this.$emit('submit', this.user);
            this.user.name = '';
        }
    }
}
</script>
