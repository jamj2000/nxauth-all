'use client'
import { useState } from 'react';
import { register } from '@/lib/actions'
import Button from '@/components/button-form';
import { redirect } from 'next/navigation';

function RegisterForm() {
    const [resultado, setResultado] = useState("")
    const [tipo, setTipo] = useState("")

    async function wrapper(data) {
        const message = await register(data) // Server action
        if (message.success) {
            setTipo('success')
            // setResultado(message.success);
            redirect('/auth/signin')
        } else {
            setTipo('error')
            setResultado(message.error);
        }

    }
    return (
        <>
            <h1>Registro</h1>
            <form action={wrapper} className='credentials'>
                <div>
                    <label>Nombre
                        <input type='text' name='name'
                            placeholder="John Doe"
                        />
                    </label>
                    <label>Email
                        <input type='email' name='email'
                            placeholder="john.doe@example.com"
                        />
                    </label>
                    <label>Password
                        <input type="password" name='password'
                            placeholder="******"
                        />
                    </label>
                    <p className={`info ${tipo}`}> {resultado} </p>
                </div>

                <Button title="Crear cuenta" />
            </form>
        </>
    );
};

export default RegisterForm;