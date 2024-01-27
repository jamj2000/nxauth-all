import Credentials from "@auth/core/providers/credentials"
import Google from "@auth/core/providers/google"
import GitHub from '@auth/core/providers/github'
import bcrypt from 'bcryptjs'

export default {
    providers: [
        Google,
        GitHub,
        Credentials({
            async authorize(credentials) {        
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    },
                })
        
                if (user) {  // && user.emailVerified
                    const matchPassword = bcrypt.compare(credentials.password, user?.password)
                    if (matchPassword) return user
                } else {
                    return null
                }
        
            },
        }),
    ]
}