<script lang="ts">
    import { defineComponent } from "vue";
    import type CreateUserDto from '@/dto/CreateUserDTO';
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
        }
    }
});
</script>
<template>
    <form id="register-form" @submit.prevent>
        <div>
            <RouterLink to="/login">
                <button class="btn btn-secondary">Go Back</button>
            </RouterLink>
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Enter email" required v-model="user.email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Password" required v-model="user.hashedPassword">
        </div>
        <div class="submitted" v-if="submitted">
            <p>You submitted successfully!</p>
        </div>
        <button @click="saveUser" class="btn btn-primary">Register</button>
    </form>
</template>
<style>
</style>