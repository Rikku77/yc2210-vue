<script lang="ts">
  import { defineComponent } from "vue";
  import type UserLoginDTO from '@/dto/LoginUserDTO';
  import LoginService from "@/services/LoginService";
  import { RouterLink } from "vue-router";
import type ResponseDto from "@/dto/ResponseDto";
export default defineComponent({
    name: "login",
    data() {
      return {
        email:"",
        password:""
      };
    },
    methods: {
      loginUser() {
        let user = {
          email: this.email,
          password: this.password
        } as UserLoginDTO;
        LoginService.loginUser(user)
        .then((response: ResponseDto) => {
          console.log(response)
        })
      }
    }
  })
  /*
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let form = e.currentTarget;
  let url = form.action;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const jsonData = JSON.stringify(data);
  console.log(jsonData);
  let res = fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: jsonData
  })
  console.log("submitted")
})
*/



</script>

<template>
  <main>
    <form id="login-form" @submit.prevent="loginUser">
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Enter email" required v-model="email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" name="hashedPassword" placeholder="Password" required v-model="password">
        </div>
        <button type="submit" class="btn btn-primary">login</button>
        <nav class="text-center">
          <RouterLink to="/register">Register</RouterLink>
        </nav>

    </form>
    <RouterLink to="/landing" custom v-slot="{ navigate }">
      <button type="button" class="btn btn-secondary" @click="navigate" role="link"> Continue as guest </button>
    </RouterLink>
  </main>
</template>
