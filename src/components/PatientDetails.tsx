import {toast} from 'react-toastify'

import React from 'react'
import type { Patient } from '../types/index'
import PatientDetailItem from './PatientDetailItem'
import { usePatientStore } from '../store/store'

type patientDetailProps = {
    patient: Patient
}

export default function PatientDetails({patient}: patientDetailProps) {

    const deletePatient = usePatientStore((state)=> state.deletePatient)
    const getPatientById = usePatientStore((state)=> state.getPatientById)


    const handleClick = () => {
        deletePatient(patient.id)
        toast('Paciente Eliminado', 
            { type:'error'}
        )
    }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">        
        <PatientDetailItem 
            label="ID"
            data={patient.id}
        />
        <PatientDetailItem 
            label="NOMBRE"
            data={patient.name}
        />
        <PatientDetailItem 
            label="PROPIETARIO"
            data={patient.caretaker}
        />
        <PatientDetailItem 
            label="EMAIL"
            data={patient.email}
        />        
        <PatientDetailItem 
            label="FECHA ALTA"
            data={patient.date.toString()}
        />
        <PatientDetailItem 
            label="SINTOMAS ALTA"
            data={patient.symptoms}
        />
        <div className='flex justify-between gap-3 mt-10'>
            <button type="button" 
                className='py-2 px-10 bg-indigo-600  hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                onClick={() => getPatientById(patient.id)}
                >
            EDITAR
            </button>
            <button type="button" 
                className='py-2 px-10 bg-red-600  hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                onClick={handleClick}>
                {/* onClick={()=>deletePatient(patient.id)}> */}
            ELIMINAR
            </button>
        </div>
    </div>
  )
}
