<template>
    <div class="container p-0 vh-100">
        <dialog-popup v-if="dialogPopup.status" @close="dialogPopup.status=false">
            <template v-slot:head>{{ dialogPopup.head }}</template>
            <template v-slot:default>
                <results v-if="dialogPopup.type==='result'" :data="dialogPopup.data" :user_list="user_list"></results>
                <product-form v-else-if="dialogPopup.type==='product'" @submit="product"></product-form>
                <user-form v-else-if="dialogPopup.type==='user'" @submit="user"></user-form>
            </template>
        </dialog-popup>
        <the-header></the-header>
        <the-add-form 
            @product="addProductForm" 
            @user="addUserForm">
        </the-add-form>
        <div class="content">
            <box>
                <the-table 
                    :user_list="user_list" 
                    :product_list="product_list"
                    @deleteColumn="deleteColumn"
                    @deleteRow="deleteRow"
                    @userChange="userChange">
                </the-table>
            </box>
        </div>
        <the-footer @calculate="calculate" @reset="reset"></the-footer>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheAddForm from './components/TheAddForm.vue';
import TheTable from './components/TheTable.vue';
import Box from './components/Box.vue';
import DialogPopup from './components/DialogPopup.vue';
import TheFooter from './components/TheFooter.vue';
import Results from './components/Results.vue';
import ProductForm from './components/ProductForm.vue';
import UserForm from './components/UserForm.vue';

export default {
    data() {
        return {
            user_list: [{id: 1, name: 'Kacper', sum: 0}, {id: 2, name: 'Stefan', sum: 0}],
            product_list: [{id: 1, name: 'milk', price: 2.55}, {id: 2, name: 'bread', price: 1.22}],
            dialogPopup: {
                status: false,
                type: '',
                head: '',
                data: null,
            },
        };
    },
    components: {
        TheHeader,
        TheAddForm,
        TheTable,
        Box,
        TheFooter,
        DialogPopup,
        Results,
        ProductForm,
        UserForm,
    },
    methods: {
        calculate() {
            let billSum = 0;
            let numberOfProducts = 0;
            this.product_list.forEach(element => {
                billSum += element.price;
                numberOfProducts++;
            });

            let userSum = 0;
            let numberOfUsers = 0;
            this.user_list.forEach(element => {
                userSum += element.sum;
                numberOfUsers++;
            });

            this.dialogPopup.head = 'Results';
            this.dialogPopup.type = 'result';
            this.dialogPopup.data = { 
                billSum: billSum.toFixed(2), 
                numberOfProducts: numberOfProducts, 
                userSum: userSum.toFixed(2),
                numberOfUsers: numberOfUsers,
            };
            this.dialogPopup.status = true;
        },
        reset() {
            this.product_list.splice(0, this.product_list.length);
            this.user_list.splice(0, this.user_list.length);
        },
        addProductForm() {
            this.dialogPopup.head = 'Product Form';
            this.dialogPopup.type = 'product';
            this.dialogPopup.status = true;
        },
        product(data) {
            let lastId = 0;
            if (this.product_list.length) {
                lastId = this.product_list.at(-1).id;
            }
            this.product_list.push({id: lastId + 1, name: data.name, price: data.price});
        },
        addUserForm() {
            this.dialogPopup.head = 'User Form';
            this.dialogPopup.type = 'user';
            this.dialogPopup.status = true;
        },
        user(data) {
            let lastId = 0;
            if (this.user_list.length) {
                lastId = this.user_list.at(-1).id;
            }
            this.user_list.push({id: lastId + 1, name: data.name, sum: 0});
        },
        deleteColumn(id) {
            this.user_list.splice(this.user_list.findIndex(function(element) {
                return element.id === id;
            }), 1);
        },
        deleteRow(id) {
            this.product_list.splice(this.product_list.findIndex(function(element) {
                return element.id === id;
            }), 1);
        },
        userChange(data) {
            const checked = data.event.target.checked;
            const userIndex = this.user_list.findIndex(function(element) {
                return element.id === data.userId;
            });
            const productIndex = this.product_list.findIndex(function(element) {
                return element.id === data.productId;
            });
            if (checked) this.user_list[userIndex].sum += this.product_list[productIndex].price;
            else this.user_list[userIndex].sum -= this.product_list[productIndex].price;

            this.user_list[userIndex].sum = Number(this.user_list[userIndex].sum.toFixed(2));
        }
    },
}
</script>

<style lang="scss">
body {
    background-image: url("./black-1920.jpg");
    margin: 0;
    color: #bec5cb;
}

.container {
    background-color: #353c42;
    box-shadow: 0 0 10px rgb(0 0 0 / 50%);
}

.content {
    width: 100%;
    margin: 0;
    padding: 0 20px 25px 20px;
    height: 75%;
}
</style>
