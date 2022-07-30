<template>
    <div class="container p-0 vh-100">
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
        <results @calculate="calculate" @reset="reset"></results>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheAddForm from './components/TheAddForm.vue';
import TheTable from './components/TheTable.vue';
import Box from './components/Box.vue';
import Results from './components/Results.vue';

export default {
    data() {
        return {
            user_list: [
                {id: 1, name: 'user1'},
                {id: 2, name: 'user2'},
                {id: 3, name: 'user3'},
                ],
            product_list: [
                {id: 1, name: 'milk', price: 2.45},
                {id: 2, name: 'pizza', price: 10.12},
                {id: 3, name: 'water', price: 1.28},
            ],
        };
    },
    components: {
        TheHeader,
        TheAddForm,
        TheTable,
        Box,
        Results,
    },
    methods: {
        calculate() {
            let sum = 0;
            this.product_list.forEach(element => {
                sum += element.price;
            });
            alert(sum.toFixed(2));
        },
        reset() {
            this.product_list.splice(0, this.product_list.length);
            this.user_list.splice(0, this.user_list.length);
        },
        product() {
            alert('product');
        },
        user() {
            alert('user');
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
