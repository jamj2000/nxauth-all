import { logout } from "@/lib/actions"

function page() {
  return (
    <>
      <h1>Cerrar sesión</h1>
      <form>
        <button formAction={logout} className="logout">
          <img src="/logout.svg" alt="Exit" /> Cerrar sesión
        </button>
      </form>
    </>
  )
}

export default page