<template>
    <section class="row">
        <div class="col-5">
            <div><b>Bill sum:</b> {{ data.billSum }} $</div>
            <div><b>Products:</b> {{ data.numberOfProducts }}</div>
            <div class="mt-3"><b>User sum:</b> {{ data.userSum }} $</div>
            <div><b>Users:</b> {{ data.numberOfUsers }}</div>
        </div>
        <div class="col-7">
            <div v-for="user in user_list" :key="user.id">
                <b>{{ user.name }}:</b> {{ user.sum }}$
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['data', 'user_list'],
}
</script>
