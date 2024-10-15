
'use client';

import { Table, Text, ScrollArea } from "@mantine/core";

import type{ Reservations } from "@/app/api//controllersUsers/medicalAppointment";

export default function TablePatient({ data }: { data: Reservations }) {
    return (
        <ScrollArea className="bg-Custm_AS m-4">
            <Table className="min-w-800">
                <thead>
                    <tr>
                        <th>Profesional</th>
                        <th>Fecha</th>
                        <th>Especialidad</th>
                        <th>Atencion</th>
                        <th>Total visitas mensuales</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? (
                        data.map((reservationProfessional) => (
                            <TableItem
                                profesional={ reservationProfessional.appointment.professional.professional.name + " " + reservationProfessional.appointment.professional.professional.lastName}
                                fecha={ reservationProfessional.reservationDate}
                                especialidad={ reservationProfessional.appointment.professional.speciality}
                                atencion={ reservationProfessional.status}
                                totalvisitasmensuales={ reservationProfessional.id}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5}>No hay historial de turnos</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </ScrollArea>
    );
}
const TableItem = ({ profesional, fecha, especialidad, atencion, totalvisitasmensuales } : {profesional:string, fecha: Date, especialidad: string, atencion:string , totalvisitasmensuales:string}) => {
    return (
      <tr>
        <td>
          <Text fz="sm">{profesional}</Text>
        </td>
        <td>
          <Text fz="sm">{fecha.toString()}</Text>
        </td>
        <td>
          <Text fz="sm">{especialidad }</Text>
        </td>
        <td>
          <Text fz="sm">{atencion ? "Atencion": "Pendiente"}</Text>
        </td>
        <td>
          <Text fz="sm">{totalvisitasmensuales}</Text>
        </td>
      </tr >
    );
  };