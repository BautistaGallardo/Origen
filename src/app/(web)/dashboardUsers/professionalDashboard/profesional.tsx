// pages/admin/dashboard.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { whatRole } from '@/app/api/controllersUsers/users';

const ProfesionalDashboard = () => {

    return (
        <div>
            <h1>Profesional Dashboard</h1>
            {/* Contenido específico para administradores */}
        </div>
    );
};

export default ProfesionalDashboard;
