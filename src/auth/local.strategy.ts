import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<{ userToken: string }> {
        const validationResult = await this.authService.validateUser(username, password);
        if (!validationResult.isValid) {
            throw new UnauthorizedException();
        }
        return { userToken: validationResult.token };
    }
}