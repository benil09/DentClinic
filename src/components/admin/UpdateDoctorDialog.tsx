"use client"
import { Dialog } from '@radix-ui/react-dialog'
import React from 'react'

interface UpdateDoctorDialogProps {
    isOpen:boolean;
    onClose:()=>void;
    doctor:any;
    }
function UpdateDoctorDialog({isOpen,onClose,doctor}:UpdateDoctorDialogProps) {
  return (
   <div>
    <Dialog open={isOpen} onOpenChange={onClose}>
        <div>Update Doctor Dialog for {doctor?.name}</div>
    </Dialog>   
   </div>
  )
}

export default UpdateDoctorDialog
