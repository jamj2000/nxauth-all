import { auth } from "@/auth"

async function Dashboard() {
    const session = await auth()

    if (session)
        return (
            <>  <h1> 🔑 </h1>
                <h1>Dashboard</h1 >
                <p> {session?.user.name}</p>
                <p> {session?.user.email} </p>
                <p> {session?.user.role} </p>
                <img src={session?.user.image}></img>
            </>)
    else
        return <h1> No has iniciado sessión</h1>




}

export default Dashboard