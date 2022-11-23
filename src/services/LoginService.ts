import type LoginUserDTO from '@/dto/LoginUserDTO';
import http from '@/http-java';

class LoginService {

    loginUser(user: LoginUserDTO): Promise<any> {
        return http.post("/Login", user)
    }
}

export default new LoginService();