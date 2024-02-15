import { ModalContent, ModalRoot, ModalTrigger } from "../ui/modal";

export const ModalWithSpecialUnwantedComponent = () => (
  <ModalRoot>
    <ModalTrigger>
      <button className="h-fit w-fit max-w-[200px] rounded-lg bg-slate-600 px-4 py-2">
        Modal With Special Unwanted Component
      </button>
    </ModalTrigger>
    <ModalContent>
      <h1>Modal With Special Unwanted Component</h1>
      {/* <ModalCloseButton /> */}
    </ModalContent>
    {/* <ModalOverlay /> */}
  </ModalRoot>
);
