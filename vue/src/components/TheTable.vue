<template>
    <section class="col-11 mx-auto">
        <table class="table nowrap m-0">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col" class="text-center" v-for="user in user_list" :key="user.id">
                        {{ user.name }}
                        <span @click="this.$emit('deleteColumn', user.id)">
                            <x-icon class="x-icon x-icon-smaller"></x-icon>
                        </span>
                    </th>
                    <th scope="col" class="text-center">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in product_list" :key="product.id">
                    <th scope="row">{{ product.id }}</th>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td class="text-center" v-for="user in user_list" :key="user.id">
                        <input type="checkbox" class="form-check-input" @click="this.$emit('userChange', {productId: product.id, userId: user.id, event: $event})">
                    </td>
                    <td>
                        <div @click="this.$emit('deleteRow', product.id)" class="text-center">
                            <x-icon class="x-icon"></x-icon>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
import { BIconX } from 'bootstrap-icons-vue';

export default {
    components: {
        'xIcon': BIconX,
    },
    emits: ['deleteRow', 'userChange'],
    props: ['product_list', 'user_list', 'deleteRow'],
}
</script>

<style lang="scss" scoped>
table {
    color: #bec5cb;
    border: lighten(#272c30, 10%) 1px solid;

    tr:nth-child(even) {
        background-color: lighten(#272c30, 5%);
    }

    .x-icon {
        background: rgb(238, 43, 43);
        color: white;
        font-size: 20px;

        &:hover {
            background: darken(rgb(238, 43, 43), 10%);
        }
    }

    .x-icon-smaller {
        font-size: 17px !important;
    }
}
</style>
