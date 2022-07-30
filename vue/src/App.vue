<template>
    <div class="container p-0">
        <the-header></the-header>
        <the-add-form></the-add-form>
        <div class="content">
            <the-table></the-table>
        </div>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheAddForm from './components/TheAddForm.vue';
import TheTable from './components/TheTable.vue';

export default {
    components: {
        TheHeader,
        TheAddForm,
        TheTable,
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
    display: flex;
}
</style>
