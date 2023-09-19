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

//import { SignupAction } from "../actions";

export function SingupForm() {
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },
    });
    return (
        <Container className="bg-white p-20 rounded-2xl shadow-2xl mx-auto">
            <Box w={400}>
                <Title className="text-Custm_primary" align="center">Registrate</Title>
                <Text size={"sm"} c="dimmed" align="center">
                    Completa todos los campos requeridos
                </Text>
                <form className="flex flex-col gap-2">
                    <TextInput
                        withAsterisk
                        required
                        label="Nombre"
                        name="nombre"
                        {...form.getInputProps("nombre")}
                    />
                    <TextInput
                        withAsterisk
                        required
                        label="Apellido"
                        name="apellido"
                        {...form.getInputProps("apellido")}
                    />
                    <TextInput
                        withAsterisk
                        required
                        label="Email"
                        name="email"
                        {...form.getInputProps("email")}
                    />
                    <TextInput
                        withAsterisk
                        required
                        label="Telefono"
                        name="telefono"
                        {...form.getInputProps("telefono")}
                    />
                    <TextInput
                        withAsterisk
                        required
                        label="Documento de Identidad"
                        name="documento de identidad"
                        {...form.getInputProps("documento de identidad")}
                    />
                    <PasswordInput
                        withAsterisk
                        required
                        name="Ingresa una constraseña"
                        label="Ingresa una contraseña"
                        {...form.getInputProps("ingresa una contraseña")}
                    />
                    <PasswordInput
                        withAsterisk
                        required
                        name="Repite la contraseña"
                        label="Repite la contraseña"
                        {...form.getInputProps("repite la contraseña")}
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