"use client";
import Link from "next/link";
import {
    Box,
    Button,
    Container,
    PasswordInput,
    Text,
    TextInput,
    Title,
} from "@mantine/core";
import { useState } from "react";
import { hasLength, isEmail, useForm } from "@mantine/form";
import axios from "axios";
import { useRouter } from 'next/navigation'

export function LoginForm() {
    const router = useRouter();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // cancels its default actions

        // extract form data
        const formData = new FormData(e.currentTarget);

        //console.log(`name: ${name}, email: ${email}, password: ${password}`)
        try {
            const res = await axios.post('./../api/auth/login', {
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password')
            })
            if (res.status === 200) {
                router.push('/dashboard')
            }
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <Container className="bg-white p-20 rounded-2xl shadow-2xl mx-auto">
            <Box w={400} mx="auto">
                <Title className="text-Custm_primary" align="center">Iniciar Sesión</Title>
                <Text size="sm" align="center" c="dimmed">
                    Ingresa con tus datos
                </Text>
                <form className="mt-4 flex flex-col gap-2" onSubmit={handleSubmit}>
                    <TextInput
                        withAsterisk
                        required
                        onChange={handleChange}
                        label="Email"
                        name="email"
                    />
                    <PasswordInput
                        withAsterisk
                        required
                        onChange={handleChange}
                        label="Password"
                        name="password"
                    />
                    <Text size="xs" align="right" c="dimmed">
                        ¿No tienes una cuenta? <Link href="./signUp" className="text-Custm_secondary ">Registrate</Link>
                    </Text>
                    <Button
                        type="submit"
                        className="text-Custm_primary from-Custm_secondary bg-gradient-to-r to-Custm_secondary/90  shadow-4xl rounded-lg mt-4"
                    >
                        Iniciar Sesión
                    </Button>
                </form>
            </Box>
        </Container>
    );
}