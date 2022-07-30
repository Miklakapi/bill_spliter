<template>
    <div class="container p-0">
        <the-header></the-header>
        <div class="content">

        </div>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
    components: {
        TheHeader,
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
