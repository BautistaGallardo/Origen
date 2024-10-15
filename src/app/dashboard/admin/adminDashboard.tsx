import Navbar from "./components/Navbar"
import {TablePatient} from "@/app/dashboard/admin/TablePatient"
import {getAllUsers} from "@/app/api/controllersUsers/users"

export default async function AdminDashboardPage() {
const data = await getAllUsers();
  return (
    <div>
      <Navbar />
      <h1>Admin Dashboard</h1>

      <TablePatient data={data}/>
    </div>
  )
}