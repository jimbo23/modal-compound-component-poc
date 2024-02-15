import { useState } from "react";
import {
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalRoot,
  ModalTrigger,
} from "../ui/modal";

export const ControlledModal = () => {
  const [open, setOpen] = useState(false);

  const onOpenChange = () => {
    setOpen((prev) => !prev);
    console.log("Your other onOpenChange callback");
  };

  return (
    <ModalRoot open={open} onOpenChange={onOpenChange}>
      <ModalTrigger>
        <button className="h-fit w-fit rounded-lg bg-slate-600 px-4 py-2">
          Controlled Modal
        </button>
      </ModalTrigger>
      <ModalContent>
        <h1>Controlled Modal</h1>
        <ModalCloseButton />
      </ModalContent>
      <ModalOverlay />
    </ModalRoot>
  );
};
