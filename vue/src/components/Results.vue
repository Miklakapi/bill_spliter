<template>
    <section class="row">
        <div class="col-5">
            <div>Bill sum: {{ data.billSum }} $</div>
            <div>Products: {{ data.numberOfProducts }}</div>
            <div class="mt-3">User sum: {{ data.userSum }} $</div>
            <div>Users: {{ data.numberOfUsers }}</div>
        </div>
        <div class="col-7">
            <div v-for="user in user_list" :key="user.id">
                {{ user.name }}: {{ user.sum }}$
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['data', 'user_list'],
}
</script>
