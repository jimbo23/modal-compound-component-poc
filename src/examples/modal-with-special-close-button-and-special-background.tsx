import {
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalRoot,
  ModalTrigger,
} from "../ui/modal";

export const ModalWithSpecialCloseButtonAndSpecialBackground = () => (
  <ModalRoot>
    <ModalTrigger>
      <button className="h-fit w-fit max-w-[200px] rounded-lg bg-slate-600 px-4 py-2">
        Modal With Special Close Button And Special Background
      </button>
    </ModalTrigger>
    <ModalContent className="bg-purple-500">
      <h1 className="font-black">#Realistic</h1>
      <ModalCloseButton className="bg-yellow-500 font-black text-red-800" />
    </ModalContent>
    <ModalOverlay />
  </ModalRoot>
);
