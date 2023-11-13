import { useToken } from "@/libs/token";
import AdminDashboardPage from "./adminDashboard";
import PatientDashboardPage from "./patientDashboard";

export default function DashboardPage() {
  const { rol } = useToken();
  if (rol === 'admin') return <AdminDashboardPage />
  if (rol === 'patient') return <PatientDashboardPage />
  return <div>Dashboard</div>
}