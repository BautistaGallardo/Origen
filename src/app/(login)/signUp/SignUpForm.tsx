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
import axios from "axios";
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
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // cancels its default actions

        // extract form data
        const formData = new FormData(e.currentTarget);

        //console.log(name: ${name}, email: ${email}, password: ${password})
        try {
            const res = await axios.post('./../api/auth/register', {
                name: formData.get('nombre'),
                lastName: formData.get('apellido'),
                email: formData.get('email'),
                password: formData.get('password'),
                passwordConfirm: formData.get('passwordConfirm'),
                phone: formData.get('telefono'),
                typeDocument: formData.get('nacionalidad'),
                document: formData.get('documento'),
                birthday: value?.toString(),

            })
            console.log(res)
        } catch (error: any) {
            if (error.response) {
                const responseData = error.response.data;
                console.error("El servidor respondió con un error:", responseData);

                if (responseData.errors && responseData.errors.fieldErrors) {
                    console.error("Errores de campo:", responseData.errors.fieldErrors);
                }

                console.error("Mensaje de error general:", responseData.message);
            } else if (error.request) {
                console.error("No se recibió respuesta del servidor");
            } else {
                console.error("Error al configurar la solicitud:", error.message);
            }
        };
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
                    <PasswordInput
                        withAsterisk
                        required
                        name="passwordConfirm"  // Change this line
                        label="Confirma la contraseña"
                        {...form.getInputProps("confirma la contraseña")}  // Change this line
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