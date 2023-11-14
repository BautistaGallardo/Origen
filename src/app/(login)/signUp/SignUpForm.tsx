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
    const [value, onChange] = useState<Value | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Nuevo estado para la fecha seleccionada


    const form = useForm({
        initialValues: {
            email: "",
            password: "",
            nombre: "",
            apellido: "",
            telefono: "",
            documento: "",
            nacionalidad: '',
            fechaNacimiento: "",

        },

    });
    const handleDateChange = (date: Value) => {
        onChange(date);
        if (Array.isArray(date)) {
            setSelectedDate(null);
        } else {
            setSelectedDate(date);
        }
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: formData.get("nombre"),
                    apellido: formData.get("apellido"),
                    fechaNacimiento: value,
                    telefono: formData.get("telefono"),
                    email: formData.get("email"),
                    password: formData.get("password"),
                    documento: formData.get("documento"),
                    nacionalidad: formData.get("nacionalidad"),

                }),
            });
            if (response.ok) {
            } else {
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
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
                        name="documento"
                        {...form.getInputProps("documento")}
                    />
                    <div>
                        <label>Nacionalidad</label>
                        <select name="nacionalidad">
                            <option>Seleccione una opción</option>
                            <option value="Uruguay">Uruguaya</option>
                            <option value="Brasil">Brasilera</option>
                            <option value="Chile">Chilena</option>
                            <option value="Paraguay">Paraguaya</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
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
                        name="password"
                        label="Ingresa una contraseña"
                        {...form.getInputProps("ingresa una contraseña")}
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