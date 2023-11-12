// pages/admin/dashboard.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { whatRole } from '@/app/api/controllersUsers/users';



const AdminDashboardPage = () => {

    return (
        <div>
            <h1>Admin Dashboard</h1>
            {/* Contenido específico para administradores */}
        </div>
    );
};

export default AdminDashboardPage;
