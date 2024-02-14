import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from '@/infra/env'
import { AuthModule } from './auth/auth.module'
import { HttpModule } from './http/http.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env), // recebe o obj com as variáveis de ambiente
      isGlobal: true,
    }),
    AuthModule,
    HttpModule,
  ],
})
export class AppModule {}
