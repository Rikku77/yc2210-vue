import type CreateUserDto from '@/dto/CreateUserDTO';
import http from '@/http-common';

class RegisterService {

    createUser(user: CreateUserDto): Promise<any> {
        console.log(user);
        const url = import.meta.env.VUE_APP_JAVA_API;
        console.log(url);
        console.log();
        return http.post("/User", user)
    }
}

export default new RegisterService();