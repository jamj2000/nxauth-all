import Link from 'next/link'
import { auth } from "@/auth"
import { logout } from '@/lib/actions'

async function Header() {
    const session = await auth();
    // console.log(session);

    return (
        <header>
            <div>
                <Link href="/">Inicio</Link>
                {session?.user?.role === 'ADMIN'
                    ? <Link href="/admin">Admin panel</Link>
                    : ''
                }
                <Link href="/dashboard">Dashboard</Link>
            </div>
            <nav>
                {session
                    ? <form><button formAction={logout}>SignOut</button></form>
                    :
                    (<>
                        <Link href="/auth/register">SignUp</Link>
                        <Link href="/auth/login">SignIn</Link>
                    </>)
                }
            </nav>
        </header>
    )
}

export default Header