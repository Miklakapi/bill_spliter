<template>
    <div class="container p-0 vh-100">
        <dialog-popup v-if="dialogPopup.status" @close="dialogPopup.status=false">
            <template v-slot:head>{{ dialogPopup.head }}</template>
            <template v-slot:default>
                <results :data="dialogPopup.data" :user_list="user_list"></results>
            </template>
        </dialog-popup>
        <the-header></the-header>
        <the-add-form 
            @product="product" 
            @user="user">
        </the-add-form>
        <div class="content">
            <box>
                <the-table 
                    :user_list="user_list" 
                    :product_list="product_list"
                    @deleteColumn="deleteColumn"
                    @deleteRow="deleteRow">
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

export default {
    data() {
        return {
            user_list: [
                {id: 1, name: 'user1', sum: 1},
                {id: 2, name: 'user2', sum: 2},
                {id: 3, name: 'user3', sum: 3},
                ],
            product_list: [
                {id: 1, name: 'milk', price: 2.45},
                {id: 2, name: 'pizza', price: 10.12},
                {id: 3, name: 'water', price: 1.28},
            ],
            dialogPopup: {
                status: false,
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
        product(data) {
            const lastId = this.product_list.at(-1).id;
            this.product_list.push({id: lastId + 1, name: 'work', price: 15.73});
        },
        user(data) {
            const lastId = this.user_list.at(-1).id;
            this.user_list.push({id: lastId + 1, name: 'new user', sum: 0});
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
