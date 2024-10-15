import { useToken } from "@/libs/token";
import AdminDashboardPage from "./admin/adminDashboard";
import {PatientDashboardPage} from "./patient/patientDashboard";
//import ProfessionalDashboardPage from "./professional/professionalDashboard";

export default function DashboardPage() {
  const { rol } = useToken();
  if (rol === 'admin') return <AdminDashboardPage/>
  if (rol === 'patient') return <PatientDashboardPage />
 // if (rol === 'professional') return <ProfessionalDashboardPage />
  return <div>Dashboard</div>
}