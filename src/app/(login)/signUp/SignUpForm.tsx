"use client";

import {
    Box,
    Button,
    Container,
    PasswordInput,
    Text,
    TextInput,
    Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useState } from "react";



export function SingupForm() {
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
            const res = await axios.post('./../api/auth/register', {
                name: formData.get('name'),
                lastname: formData.get('lastname'),
                email: formData.get('email'),
                password: formData.get('password'),
                confirmPassword: formData.get('confirmPassword'),
                phone: formData.get('phone'),
                country: formData.get('country'),
                document: formData.get('document'),
                
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
      };
    return (
        <Container className="bg-white p-20 rounded-2xl shadow-2xl mx-auto">
            <Box w={400} mx='auto'>
                <Title className="text-Custm_primary" align="center">Registrate</Title>
                <Text size={"sm"} c="dimmed" align="center">
                    Completa todos los campos requeridos
                </Text>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                    <TextInput
                        onChange={handleChange}
                        withAsterisk
                        required
                        label="Nombre"
                        name="name"
                    />
                    <TextInput
                        onChange={handleChange}
                        withAsterisk
                        required
                        label="Apellido"
                        name="lastname"
                    />
                    <TextInput
                        onChange={handleChange}
                        withAsterisk
                        required
                        label="Email"
                        name="email"
                    />
                    <TextInput
                        onChange={handleChange}
                        withAsterisk
                        required
                        label="Telefono"
                        name="phone"
                    />
                    <TextInput
                        onChange={handleChange}
                        withAsterisk
                        required
                        label="nacionalidad"
                        name="country"
                    />
                    <TextInput
                        onChange={handleChange}
                        withAsterisk
                        required
                        label="Documento de Identidad"
                        name="document"
                    />
                    <PasswordInput
                        onChange={handleChange}
                        withAsterisk
                        required
                        name="password"
                        label="Ingresa una contraseña"
                    />
                    <PasswordInput
                        onChange={handleChange}
                        withAsterisk
                        required
                        name="confirmPassword"
                        label="Repite la contraseña"
                    />
                    <Button
                        type="submit"
                        className="text-Custm_primary text-lg from-Custm_secondary bg-gradient-to-r to-Custm_secondary/90  shadow-4xl rounded-lg mt-4"
                    >
                        Registrarse
                    </Button>
                </form>
            </Box>
        </Container>
    );
}