"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarX } from "lucide-react";
import { useState } from "react";

export default function RegistrationClosedButton() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 hover:px-4 cursor-pointer">
          Registration Closed
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-col items-center text-center">
          <CalendarX className="h-12 w-12 text-red-500 mb-2" />
          <DialogTitle className="text-xl font-bold">
            Registration Closed
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            Thank you for your interest in INGENIUM. Please check back later for
            future events and opportunities.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 text-center">
          <p className="text-muted-foreground ">
            Registerd participants check your email for further details about
            the event.
          </p>
        </div>
        <DialogFooter className="flex justify-center sm:justify-center">
          <Button
            className="w-full sm:w-auto"
            onClick={() => {
              setOpen(false);
            }}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
