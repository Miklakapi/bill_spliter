<template>
    <section class="col-11 mx-auto">
        <table class="table nowrap m-0">
            <thead>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Users</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>2</td>
                    <td>3</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>2</td>
                    <td>3</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>2</td>
                    <td>3</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>

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
