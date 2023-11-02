import React from 'react';
import Link from 'next/link';

export default function Intro() {
    return (
        <div className='justify-center'>
            <h1 className='text-Custm_secondary text-center text-4xl font-bold'>ORIGEN</h1>
            <button className='content-center btn btn-ghost rounded-lg bg-Custm_secondary text-white normal-case text-xl p-2'>
                <Link href="./turnera/especialidades">Reserva un turno</Link>
            </button>
        </div>
    );
}
