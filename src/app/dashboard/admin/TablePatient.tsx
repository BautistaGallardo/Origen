
'use client'
import { Table, Text, ScrollArea } from "@mantine/core";
import type {Users} from '@/app/api/controllersUsers/users'

export function TablePatient({ data }: { data: Users }) {
    return (
      <ScrollArea className="bg-Custm_AS m-4">
        <Table className="min-w-800">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Documento</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map((users) => (
                <TableItem
                  key={users.id} // Asegúrate de tener una clave única para cada elemento en el array
                  nombre={users.name}
                  apellido={users.lastName}
                  documento={users.document?.IdentityNumber} // Puedes ajustar esto según tu estructura de datos
                  telefono={users.phone}
                />
              ))
            ) : (
              <tr>
                <td>No hay historial de Usuarios</td>
              </tr>
            )}
          </tbody>
        </Table>
      </ScrollArea>
    );
  }
  
  
  const TableItem = ({ nombre, apellido, documento, telefono }: { nombre: string; apellido: string; documento?: string; telefono: string }) => {
    return (
      <tr>
        <td>
          <Text fz="sm">{nombre}</Text>
        </td>
        <td>
          <Text fz="sm">{apellido}</Text>
        </td>
        <td>
          <Text fz="sm">{documento}</Text>
        </td>
        <td>
          <Text fz="sm">{telefono}</Text>
        </td>
      </tr>
    );
  };
  