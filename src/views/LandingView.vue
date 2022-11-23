<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "landing"
})
</script>
<template>
    <header>
        <div class="NnG-logo-name d-flex" id="headerN">
            <img class="ng-logo" src="@/assets/nglogo.png" alt="picture">
            <h1>Netflix & Grill</h1>
        </div>
    </header>
    <main>
        <p>Welkom bij Netflix & Grill. Er volgt een lijst aan vragen die je kunt beantwoorden. Op basis van deze antwoorden zal er een suggestie worden gegeven voor 3 films en recepten</p>
    </main>
    <footer id="footerN">
        <RouterLink class="container" to="/questions" custom v-slot="{ navigate }">
            <button type="button" class="btn btn-outline-secondary" @click="navigate" role="link">Call to action</button>
        </RouterLink>
    </footer>
</template>