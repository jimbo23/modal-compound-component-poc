import {
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalRoot,
  ModalTrigger,
} from "../ui/modal";

export const ModalWithBlurredOverlay = () => (
  <ModalRoot>
    <ModalTrigger>
      <button className="h-fit w-fit max-w-[200px] rounded-lg bg-slate-600 px-4 py-2">
        Modal With Red Blurred Overlay
      </button>
    </ModalTrigger>
    <ModalContent>
      <h1>Modal With Red Blurred Overlay</h1>
      <ModalCloseButton />
    </ModalContent>
    <ModalOverlay className="bg-red-500/70 backdrop-blur-sm" />
  </ModalRoot>
);
