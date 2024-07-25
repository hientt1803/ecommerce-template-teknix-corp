"use client";

import RatingStar from "@/components/rating/rating";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ChangeEvent, useState } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export const WriteComment = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <VisuallyHidden.Root>
        <DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogTitle>
      </VisuallyHidden.Root>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full text-lg">
          Write a preview
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-[600px]">
        <DialogHeader>
          <DialogTitle>Write comment</DialogTitle>
          <DialogDescription>
            Leave your thought here. Click save when {"you're"} done.
          </DialogDescription>
        </DialogHeader>
        <ProfileForm />
      </DialogContent>
    </Dialog>
  );
};

function ProfileForm({ className }: React.ComponentProps<"form">) {
  const [value, setValue] = useState("");
  const [rating, setRating] = useState(0);

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <form className={cn("grid items-start gap-4", className)}>
      <RatingStar maxWidth={100} rating={rating} setRating={setRating} />
      <div className="grid gap-2">
        <Label htmlFor="review-content">What you think</Label>
        <Textarea id="review-content" value={value} onChange={handleOnChange} />
      </div>
      <Button type="submit">Save review</Button>
    </form>
  );
}
