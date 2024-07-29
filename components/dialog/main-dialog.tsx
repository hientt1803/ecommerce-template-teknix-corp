
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogTrigger
} from "@/components/ui/dialog";
import React from "react";

interface IDialogProps {
  children: React.ReactNode;
  open?: boolean;
}

export const MainDialog = (props: IDialogProps) => {
  const { children, open } = props;

  return (
    <Dialog modal={open}>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {children}
        <DialogFooter className="sm:justify-start justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
