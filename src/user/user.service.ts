import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    async createUser() {
        // TODO: make api calls to user management system to create new user.
    }

    async validateUser(username: string, pass: string): Promise<{ isValid: true; token: string } | { isValid: false; token: 'N/A' }> {
        // TODO: make api calls to user management system to create new user.
        if (username === 'me' && pass === '1234') {
            return { isValid: true, token: 'fR8tNk145gDva' };
        }
        return { isValid: false, token: 'N/A' };
    }
}
