<script lang="ts">
    import { defineComponent } from "vue";
    import type CreateUserDto from '@/dto/CreateUserDTO';
    import RegisterService from '@/services/RegisterService'
import type ResponseDto from "@/dto/ResponseDto";

export default defineComponent({
    name: "register",
    data() {
        return {
            email: "",
            password: "",
            submitted: false,
            emailErrorMessage: "",
            passwordErrorMessage: "",
            disabled: [true, true]
        };
    },
    watch: {
        email(value){
            this.email = value
            this.validateEmail(value);
        },
        password(value){
            this.password = value
            this.validatePassword(value);
        }
    },
    methods: {
        validateEmail(value: string){
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
            {
                this.emailErrorMessage = '';
                this.disabled = [false, this.disabled[1]]
            } else{
                console.log(value);
                this.emailErrorMessage = 'Invalid emailaddress';
                this.disabled = [true, this.disabled[1]]
            }   
        },
        validatePassword(value: string){
            if(value.length < 12 || value.length > 99){
                console.log(value);
                this.passwordErrorMessage = 'Invalid password';
                this.disabled = [this.disabled[1], true]
            }
            else {
                this.passwordErrorMessage = '';
                this.disabled = [this.disabled[1], false]
            }
        },
        saveUser() {
            let user = {
                email: this.email,
                hashedPassword: this.password
            } as CreateUserDto;
            RegisterService.createUser(user)
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
    <div class="btn-back">
        <RouterLink to="/login">
            <button class="btn">
                <font-awesome-icon class="fa-icon" icon="fa-arrow-left-long" />
            </button>
        </RouterLink>
    </div>
    <main>
        <form id="register-form" @submit.prevent="saveUser">
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Enter email" required v-model="email">
                <span v-if="emailErrorMessage.length > 0">{{emailErrorMessage}}</span>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="Enter password" required v-model="password">
                <span v-if="passwordErrorMessage.length > 0">{{passwordErrorMessage}}</span>
            </div>
            <div class="submitted" v-if="submitted">
                <p>You submitted successfully!</p>
            </div>
            <button :disabled="!disabled.every(i => i === false)" class="btn btn-primary">Register</button>
        </form>
    </main>
</template>
<style>
    span {
        color: red;
        font-size: small;
    }
</style>