export const UNCONTROLLED_MODAL_CODE_STRING = `export const UncontrolledModal = () => (
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
);`;

export const MODAL_WITH_SPECIAL_CLOSE_BUTTON_AND_SPECIAL_BACKGROUND_CODE_STRING = `export const ModalWithSpecialCloseButtonAndSpecialBackground = () => (
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
);`;

export const MODAL_WITH_SPECIAL_UNWANTED_COMPONENT_CODE_STRING = `export const ModalWithSpecialUnwantedComponent = () => (
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
);`;

export const CONTROLLED_MODAL_CODE_STRING = `export const ControlledModal = () => {
  const [open, setOpen] = useState(false);

  const onOpenChange = () => {
    setOpen((prev) => !prev);
    console.log("other onOpenChange callback");
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
`;

export const MODAL_WITH_BLURRED_OVERLAY_CODE_STRING = `export const ModalWithBlurredOverlay = () => (
  <ModalRoot>
    <ModalTrigger>
      <button className="h-fit w-fit max-w-[200px] rounded-lg bg-slate-600 px-4 py-2">
        Modal With Blurred Red Overlay
      </button>
    </ModalTrigger>
    <ModalContent>
      <h1>Uncontrolled</h1>
      <ModalCloseButton />
    </ModalContent>
    <ModalOverlay className="bg-red-500/70 backdrop-blur-sm" />
  </ModalRoot>
);`;
