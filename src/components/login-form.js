'use client'
import { useState } from 'react';
import { login } from '@/lib/actions'
import Button from '@/components/button-form';

function LoginForm() {
    const [resultado, setResultado] = useState("")
    const [tipo, setTipo] = useState("")

    async function wrapper(data) {
        const message = await login(data) // Server action
        if (message?.success) {
            // setTipo('success')
            // setResultado(message.success);
        }
        if (message?.error) {
            setTipo('error')
            setResultado(message.error);
        }

    }
    return (
        <form action={wrapper} className='credentials'>
            <div>
                <label>Email
                    <input type='email' name='email' placeholder="jose@mail.com" />
                </label>
                <label>Contraseña
                    <input type="password" name='password' placeholder="******" />
                </label>
                <p className={`info ${tipo}`}> {resultado} </p>
            </div>

            <Button title="Iniciar sesión" />
        </form>
    );
};

export default LoginForm;