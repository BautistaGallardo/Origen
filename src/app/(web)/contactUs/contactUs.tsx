"use client";

import {
    Group,
    SimpleGrid,
    TextInput,
    Textarea,
    Title,
} from "@mantine/core";

export default function ContactPage() {
    return (
        <main className="min-h-[400px] max-w-5xl rounded-xl mx-auto my-16 p-16 bg-white border border-Custm_secondary">
            <SimpleGrid cols={1} spacing={50}>
                <div className="text-Custm_primary text-center">
                    <p className="text-xl">¿Tienes alguna pregunta?</p>
                    <Title>Ponte en Contacto</Title>
                    <p className="text-lg">
                        Si tienes alguna pregunta, no dudes en contactarnos.
                    </p>
                </div>
                <div>
                    <SimpleGrid cols={2}>
                        <TextInput name="name" label="Nombre" />
                        <TextInput name="surname" label="Apellido" />
                        <TextInput name="email" label="Email" withAsterisk required />
                        <TextInput name="numero" label="Numero de Telefono" withAsterisk required />


                        <SimpleGrid cols={1} spacing={50}>
                            <Textarea name="message" label="Escribe un Mensaje" withAsterisk required />
                        </SimpleGrid>
                    </SimpleGrid>

                    <Group position="center">
                        <button
                            className="py-2 px-4 mt-4  bg-Custm_secondary text-white rounded-md"
                            type="submit"
                        >
                            Enviar mensaje
                        </button>
                    </Group>
                </div>

            </SimpleGrid>
        </main>
    );
}
