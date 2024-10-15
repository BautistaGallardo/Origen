import React from 'react'
import Navbar from './components/Navbar'
import Link from 'next/link'
import TablePatient  from './TablePatient'
import { listReservationWithProfessional } from "@/app/api/controllersUsers/medicalAppointment";

export  async function PatientDashboardPage(id: any) {
  const body = await listReservationWithProfessional("1");
  return(
    <div>
      <Navbar />
      <h1 className='text-Custm_secondary text-center text-4xl font-bold'>Paciente</h1>
      <button className='content-center btn btn-ghost rounded-lg bg-Custm_secondary text-white normal-case text-xl p-2'>
        <Link href="./../turnera/especialidades">Reserva un turno</Link>
      </button>
      <TablePatient data={body} />
    </div>
  );
}