import {
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalRoot,
  ModalTrigger,
} from "../ui/modal";

export const UncontrolledModal = () => (
  <ModalRoot>
    <ModalTrigger>
      <button className="h-fit w-fit rounded-lg bg-slate-600 px-4 py-2">
        Default Uncontrolled Modal
      </button>
    </ModalTrigger>
    <ModalContent>
      <h1>Uncontrolled</h1>
      <ModalCloseButton />
    </ModalContent>
    <ModalOverlay />
  </ModalRoot>
);
