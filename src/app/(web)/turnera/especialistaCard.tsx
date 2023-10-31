import React from 'react';
import Link from 'next/link';

interface Especialista {
    nombre: string;
    imagenUrl: string;
}

const EspecialistaCard: React.FC<Especialista> = ({ nombre, imagenUrl }) => {
    return (
        <div className="border border-Custm_secondary max-w-sm rounded overflow-hidden shadow-lg">
            <img src={imagenUrl} alt={nombre} className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{nombre}</div>
            </div>
        </div>
    );
}

export function Especialistas({ categoria }: { categoria: string }) {
    const especialidades: Record<string, Especialista[]> = {
        Psicologia: [
            { nombre: 'Gisella Kinstler', imagenUrl: 'actual_image_url_1' },
            { nombre: 'Luisito', imagenUrl: 'actual_image_url_2' },
        ],
        Nutricion: [
            { nombre: 'Nutricionista 1', imagenUrl: 'actual_image_url_3' },
            { nombre: 'Nutricionista 2', imagenUrl: 'actual_image_url_4' },
        ],
    };

    const especialistas = especialidades[categoria] || [];

    console.log(especialistas);


    return (
        <div>
            <h2>{categoria.toUpperCase()}</h2>
            <div className="grid grid-cols-3 gap-4">
                {especialistas.map((especialista, index) => (
                    <div key={index}>
                        <EspecialistaCard
                            nombre={especialista.nombre}
                            imagenUrl={especialista.imagenUrl}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
