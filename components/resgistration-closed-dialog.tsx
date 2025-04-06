"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function RegistrationClosedDialog() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Registration Closed
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            We regret to inform you that registrations for INGENIUM are now
            closed.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-muted-foreground">
            Thank you for your interest in INGENIUM. Please check back later for
            future events and opportunities.
          </p>
        </div>
        <DialogFooter>
          <Button onClick={() => setOpen(false)} className="w-full sm:w-auto">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
