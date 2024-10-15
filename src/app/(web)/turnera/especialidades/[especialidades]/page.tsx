import { EspecialidadCard } from "../page";
import { Especialistas } from "../../especialistaCard";

export default function EspecialidadesPage({ params }: { params: { especialidades: string } }) {
    return (
        <Especialistas categoria={params.especialidades} />
        
    );
}