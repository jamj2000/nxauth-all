import { redirect } from "next/navigation"
import { auth } from "@/auth"

async function page() {
  const sesion = await auth()

  if (sesion && sesion?.user?.role === 'ADMIN')
    return (
      <>
        <h1> 🔐 </h1>
        <h1>Admin panel</h1>
        <p> {sesion?.user.name}</p>
        <p> {sesion?.user.email} </p>
        <p> {sesion?.user.role} </p>
        <img src={sesion?.user.image}></img>
      </>
    )
  else redirect('/dashboard')
}

export default page