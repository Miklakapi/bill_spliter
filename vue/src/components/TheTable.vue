<template>
    <section class="col-11 mx-auto">
        <table class="table nowrap m-0">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col" v-for="user in user_list" :key="user.id">
                        {{ user.name }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in product_list" :key="product.id">
                    <th scope="row">{{ product.id }}</th>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td v-for="user in user_list" :key="user.id">
                        {{ user.name }}
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
export default {
    props: ['product_list', 'user_list'],
}
</script>

<style lang="scss" scoped>
table {
    color: #bec5cb;
    border: lighten(#272c30, 10%) 1px solid;

    tr:nth-child(even) {
        background-color: lighten(#272c30, 5%);
    }
}
</style>
