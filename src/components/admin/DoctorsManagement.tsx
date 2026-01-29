"use client";
import { useGetDoctors } from "@/hooks/use-doctors";
import { Edit, Mail, Phone, Plus, Stethoscope } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import AddDoctorDialog from "./AddDoctorDialog";
import UpdateDoctorDialog from "./UpdateDoctorDialog";
import { Doctor } from "@prisma/client";

const DoctorsManagement = () => {
  const { data: doctors } = useGetDoctors();

  const [isAddDialogueOpen, setIsAddDialogueOpen] = useState(false);
  const [isEditDialogueOpen, setIsEditDialogueOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState <Doctor| null>(null);

  const handleEditDoctor = (doctor:Doctor) => {
    setSelectedDoctor(doctor);
    setIsEditDialogueOpen(true);
  };
  const handleCloseEditDoctor = () => {
    setIsEditDialogueOpen(false);
    setSelectedDoctor(null);
  };
  return (
    <>
      <Card className="mb-8 sm:mb-12">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-center sm:text-left">
              <Stethoscope className="size-8 text-primary" />
              Doctors Management
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Manage all the doctors registered in the system
            </CardDescription>
          </div>
          <Button
            onClick={() => setIsAddDialogueOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 transition duration-150"
          >
            <Plus /> Add
          </Button>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {doctors && doctors.length > 0 ? (
              doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 p-3 border rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={doctor.imgUrl || "/placeholder.jpg"}
                      alt={doctor.name || "Doctor"}
                      width={50}
                      height={50}
                      className="rounded-full object-cover size-12 ring-2 ring-primary"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold">
                        {doctor.name || "Unknown"}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {doctor.specialty || "General"}{" "}
                        <span className="ml-2 px-2 py-0.5 bg-background rounded text-xs">
                          {doctor.gender === "MALE" ? "male" : "female"}
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Mail className="inline size-4 mr-2" />
                          {doctor.email ? doctor.email : "No email available"}
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <Phone className="inline size-4 mr-2" />
                          {doctor.phone ? doctor.phone : "No phone available"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex  sm:flex-row sm:items-center items-start gap-6 sm:gap-6 sm:justify-end w-full sm:w-auto">
                    <div className="text-center ">
                      <div className="font-semibold text-primary">12</div>
                      <div className="text-xs text-muted-foreground">
                        Appointments
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        doctor.isActive
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {doctor.isActive ? "Active" : "Inactive"}
                    </span>
                    <Button
                      className="border-2 hover:border-primary/30 transition-all duration-300"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        handleEditDoctor(doctor);
                      }}
                    >
                      <Edit className="size-4 mr-2" />
                      Edit
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground">
                No doctors available.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
      <AddDoctorDialog
        isOpen={isAddDialogueOpen}
        onClose={() => setIsAddDialogueOpen(false)}
      />
      <UpdateDoctorDialog
        isOpen={isEditDialogueOpen}
        onClose={handleCloseEditDoctor}
        doctor={selectedDoctor}
        key={selectedDoctor?.id} //advanced react pattern to reset state
      />

      
    </>
  );
};

export default DoctorsManagement;
