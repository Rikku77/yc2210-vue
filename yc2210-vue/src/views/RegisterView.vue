<script lang="ts">
    import { defineComponent } from "vue";
    import CreateUserDto from '@/dto/CreateUserDTO';
    import RegisterService from '@/services/RegisterService'
import type ResponseDto from "@/dto/ResponseDto";

    export default defineComponent({
        name: "register",
        data() {
            return {
                user: {
                    email: "",
                    hashedPassword: "" 
                } as CreateUserDto,
                submitted: false,
            };
        },
        methods: {
            saveUser() {
                let data = {
                    email: this.user.email,
                    hashedPassword: this.user.hashedPassword
                };
                RegisterService.createUser(data)
                    .then((response: ResponseDto) => {
                        this.submitted = true;
                        console.log(response)
                    })
                    .catch((e: Error) => {
                        console.log(e);
                    });
            },

            newUser() {
                this.submitted = false;
                this.user = {} as CreateUserDto;
            }
        }
    });
</script>
<template>
    <form id="register-form">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Enter email" required v-model="user.email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="Password" required v-model="user.hashedPassword">
            </div>
            <button @click="saveUser" class="btn btn-primary">Submit</button>
        </div>
        <div v-if="submitted">
            <h4>You submitted successfully!</h4>
        </div>
    </form>
</template>
<style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>