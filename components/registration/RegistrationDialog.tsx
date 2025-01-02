"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import RegistrationForm from "./RegistrationForm"

export default function RegistrationDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="purple">Create Your Account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create Your Account</DialogTitle>
        </DialogHeader>
        <RegistrationForm />
      </DialogContent>
    </Dialog>
  )
}