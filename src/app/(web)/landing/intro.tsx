"use client";
import React from 'react';
import Link from 'next/link';
import Turno from './../turnera/turno/scheduleCalendar';
import App from './../turnera/turno/scheduleCalendar';
export default function Intro() {
    return (
        <div className='justify-center'>
            <h1 className='text-Custm_secondary text-center text-4xl font-bold'>ORIGEN</h1>
            <button className='content-center btn btn-ghost rounded-lg bg-Custm_secondary text-white normal-case text-xl p-2'>
                <Link href="./logIn">Reserva un turno</Link>
                <App/>
            </button>
        </div>
    );
}
