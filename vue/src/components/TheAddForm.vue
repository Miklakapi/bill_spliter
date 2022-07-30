<template>
    <div class="button-container row text-center mb-3 mt-2">
        <div class="col-6">
            <add-button>Add product</add-button>
        </div>
        <div class="col-6 text-center">
            <add-button>Add user</add-button>
        </div>
    </div>
</template>

<script>
import AddButton from './AddButton.vue';

export default {
    components: {
        AddButton,
    }
}
</script>
