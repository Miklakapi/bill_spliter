<template>
    <div class="container p-0 vh-100">
        <the-header></the-header>
        <the-add-form @product="product" @user="user"></the-add-form>
        <div class="content">
            <box>
                <the-table></the-table>
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
    components: {
        TheHeader,
        TheAddForm,
        TheTable,
        Box,
        Results,
    },
    methods: {
        calculate() {
            alert('calc');
        },
        reset() {
            alert('reset');
        },
        product() {
            alert('product');
        },
        user() {
            alert('user');
        },
    }
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
