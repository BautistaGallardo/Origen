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
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import { useForm } from "@mantine/form";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


export function SingupForm() {
    const [value, onChange] = useState<Value>();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Nuevo estado para la fecha seleccionada


    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },

    });
    const handleDateChange = (date: Value) => {
        onChange(date);
        if (Array.isArray(date)) {
            setSelectedDate(null);
        } else {
            setSelectedDate(date);
        }
    };

    return (
        <Container className="bg-white p-20 rounded-2xl shadow-2xl mx-auto">
            <Box w={400} mx='auto'>
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
                    <div className="">
                        <label className="text-black text-lg" htmlFor="fecha de nacimiento">
                            Fecha de nacimiento
                        </label>
                        <Calendar onChange={handleDateChange} value={value} />
                        {selectedDate && (
                            <p className="text-black mt-2">
                                Fecha seleccionada: {selectedDate.toDateString()}
                            </p>
                        )}
                    </div>
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
        </Container >
    );
}