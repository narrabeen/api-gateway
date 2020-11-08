import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AdModule } from './ad/ad.module';
import { GeofenceModule } from './geofence/geofence.module';

@Module({
  imports: [AuthModule, UserModule, AdModule, GeofenceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
