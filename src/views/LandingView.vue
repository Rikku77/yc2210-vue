<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "landing"
})
</script>
<template>
    <header>
        <div class="NnG-logo-name d-flex" id="headerN">
            <img src="https://via.placeholder.com/50" alt="picture">
            <h1>Netflix & Grill</h1>
        </div>
    </header>
    <main>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, amet totam! Ut accusamus est voluptates quaerat beatae nihil, mollitia deleniti quo, corporis qui incidunt, dolor aliquid quod dignissimos perferendis animi?</p>
    </main>
    <footer id="footerN">
        <RouterLink class="container" to="/questions" custom v-slot="{ navigate }">
            <button type="button" class="btn btn-outline-secondary" @click="navigate" role="link">Call to action</button>
        </RouterLink>
    </footer>
</template>
<style>

</style>