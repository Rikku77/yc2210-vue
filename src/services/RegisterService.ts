import type CreateUserDto from '@/dto/CreateUserDTO';
import http from '@/http-common';

class RegisterService {
    createUser(user: CreateUserDto): Promise<any> {
        console.log(user);
        return http.post("/User", user)
    }
}

export default new RegisterService();