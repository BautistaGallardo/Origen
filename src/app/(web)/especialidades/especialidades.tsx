import React from "react";
import { IconHeartbeat } from "@tabler/icons-react";

interface EspecialidadCardProps {
    nombre: string;
}

export function EspecialidadCard({ nombre }: EspecialidadCardProps) {
    return (
        <div className="bg-white h-40 w-40 border border-gray-100 flex flex-col items-center justify-center">
            <IconHeartbeat className="items-center" size={88} color="#F26222" />
            <div className="justify-center text-center text-Custm_secondary">{nombre}</div>
        </div>
    );
}

export function Especialidades() {
    const especialidades: string[] = ["Psicologia", "Psiquiatria", "Nutricion", "Radiologia", "Cardiologia", "Cardiologia"];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center mx-auto">
            <p className="text-Custm_secondary text-center text-4xl font-bold">SIEMPRE CUIDANDOTE</p>
            <h1 className="text-Custm_primary text-center text-6xl">Nuestras Especialidades</h1>
            <div className="grid grid-cols-3 gap-0 m-12">
                {especialidades.map((especialidad, index) => (
                    <EspecialidadCard key={index} nombre={especialidad} />
                ))}
            </div>
        </div>
    );
}

