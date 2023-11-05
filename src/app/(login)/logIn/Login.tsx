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
import { hasLength, isEmail, useForm } from "@mantine/form";

export function LoginForm() {
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },
        validate: {
            email: isEmail("Escriba un email válido"),
            password: hasLength(
                { min: 8 },
                "La contraseña debe tener al menos 8 caracteres"
            ),
        },
    });
    return (
        <Container className="bg-white p-20 rounded-2xl shadow-2xl mx-auto">
            <Box w={400} mx="auto">
                <Title className="text-Custm_primary" align="center">Iniciar Sesión</Title>
                <Text size="sm" align="center" c="dimmed">
                    Ingresa con tus datos
                </Text>
                <form className="mt-4 flex flex-col gap-2">
                    <TextInput
                        withAsterisk
                        required
                        label="Email"
                        name="email"
                        {...form.getInputProps("email")}
                    />
                    <PasswordInput
                        withAsterisk
                        required
                        label="Password"
                        name="password"
                        {...form.getInputProps("password")}
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
