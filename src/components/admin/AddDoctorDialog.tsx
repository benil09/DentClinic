"use client";
import { useCreateDoctor } from "@/hooks/use-doctors";
import { Gender } from "@prisma/client";
import { Dialog } from "@radix-ui/react-dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface AddDoctorDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddDoctorDialog = ({ isOpen, onClose }: AddDoctorDialogProps) => {
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    email: "",
    specialty: "",
    phone: "",
    gender: "" as Gender,
    isActive: true,
  });

  const createDoctorMutation = useCreateDoctor();
  const handlePhoneChange = (value: string) => {
    // Allow only digits and optional leading +
    const regex = /^\+?\d*$/;
    if (regex.test(value)) {
      setNewDoctor({ ...newDoctor, phone: value });
    }
  };
  const handleSave = () => {
    createDoctorMutation.mutate(
      { ...newDoctor },
      {
        onSuccess: () => {
          handleClose();
        },
      }
    );
  };

  const handleClose = () => {
    onClose();
    setNewDoctor({
      name: "",
      email: "",
      specialty: "",
      phone: "",
      gender: "" as Gender,
      isActive: true,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add a new Doctor</DialogTitle>
          <DialogDescription>
            {" "}
            Add a new doctor to your database{" "}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Name Input */}
            <div className="space-y-2">
              <Label
                htmlFor="new-name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name *{" "}
              </Label>
              <input
                id="new-name"
                type="text"
                value={newDoctor.name}
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, name: e.target.value })
                }
                className="w-full rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground/50 focus:outline-none    disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Dr. Avinash Chandra"
              />
            </div>

            {/* Specialty Input */}
            <div className="space-y-2">
              <Label
                htmlFor="specialty"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Specialty{" "}
              </Label>
              <input
                id="specialty"
                type="text"
                value={newDoctor.specialty}
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, specialty: e.target.value })
                }
                className="w-full rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground/50 focus:outline-none    disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Cardiologist"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email *{" "}
              </Label>
              <input
                id="email"
                type="text"
                value={newDoctor.email}
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, email: e.target.value })
                }
                className="w-full rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground/50 focus:outline-none    disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="avinash09@gmail.com"
              />
            </div>

            {/* Phone Input */}
            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Phone{" "}
              </Label>
              <input
                id="phone"
                type="text"
                value={newDoctor.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground/50 focus:outline-none    disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="+91 9876543210"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Gender Select */}
              <div className="space-y-2">
                <Label
                  htmlFor="gender"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Gender{" "}
                </Label>
                <Select
                  onValueChange={(value) =>
                    setNewDoctor({ ...newDoctor, gender: value as Gender })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MALE">Male</SelectItem>
                    <SelectItem value="FEMALE">Female</SelectItem>
                    <SelectItem value="OTHER">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Status Select */}
              <div className="space-y-2">
                <Label
                  htmlFor="isActive"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  status{" "}
                </Label>
                <Select
                  onValueChange={(value) =>
                    setNewDoctor({ ...newDoctor, isActive: value === "false" })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Active" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="false">Active</SelectItem>
                    <SelectItem value="true">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>

          <Button
            onClick={handleSave}
            className="bg-primary hover:bg-primary/90 text-white"
            disabled={
              !newDoctor.name ||
              !newDoctor.email ||
              createDoctorMutation.isPending
            }
          >
            {createDoctorMutation.isPending ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddDoctorDialog;
