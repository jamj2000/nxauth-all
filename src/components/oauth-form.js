import { loginGoogle, loginGithub } from "@/lib/actions"

function OAuthForm() {

  return (
    <>
      <form className='oauth'>
        <button formAction={loginGoogle} className="social-button">
          <img src="/google.svg" alt="Google" />  Iniciar sesión con Google
        </button>

        <button formAction={loginGithub} className="social-button">
          <img src="/github.svg" alt="Github" /> Iniciar sesión con Github
        </button>
      </form>

    </>
  )
}

export default OAuthForm;