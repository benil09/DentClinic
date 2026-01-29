"use client"
import {Dialog} from "@/components/ui/dialog"
import React, { useState } from 'react'
import { Doctor } from '@prisma/client'
import { useUpdateDoctor } from '@/hooks/use-doctors';

interface UpdateDoctorDialogProps {
    isOpen:boolean;
    onClose:()=>void;
    doctor:any;
    }
function UpdateDoctorDialog({isOpen,onClose,doctor}:UpdateDoctorDialogProps) {
  const [editingDoctor, setEditingDoctor] = useState < Doctor | null > (doctor);
  const updateDoctorMutation = useUpdateDoctor();
 


  const handleSave = ()=>{
    if(editingDoctor){
      updateDoctorMutation.mutate({},{onSuccess:handleClose});
    }
  }
  const handleClose = ()=>{
    onClose();
    setEditingDoctor(null);
  }
  return (
   <div>
    <Dialog open={isOpen} onOpenChange={onClose}>
      
    </Dialog>   
   </div>
  )
}

export default UpdateDoctorDialog
