import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) { }

    validateUser(username: string, pass: string): Promise<{ isValid: true; token: string } | { isValid: false; token: 'N/A' }> {
        return this.userService.validateUser(username, pass);
    }

    async validateToken(token: string) { }
}
