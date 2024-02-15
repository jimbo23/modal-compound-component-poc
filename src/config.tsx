import {
  MODAL_WITH_SPECIAL_CLOSE_BUTTON_AND_SPECIAL_BACKGROUND_CODE_STRING,
  MODAL_WITH_SPECIAL_UNWANTED_COMPONENT_CODE_STRING,
} from "./snippets";
import { ControlledModal } from "./examples/controlled-modal";
import { ModalWithBlurredOverlay } from "./examples/modal-with-blurred-overlay";
import { ModalWithSpecialCloseButtonAndSpecialBackground } from "./examples/modal-with-special-close-button-and-special-background";
import { ModalWithSpecialUnwantedComponent } from "./examples/modal-with-special-unwanted-component";
import {
  CONTROLLED_MODAL_CODE_STRING,
  MODAL_WITH_BLURRED_OVERLAY_CODE_STRING,
  UNCONTROLLED_MODAL_CODE_STRING,
} from "./snippets";
import { UncontrolledModal } from "./examples/uncontrolled-modal";

export const CONFIG = {
  "default-uncontrolled-modal": {
    comp: <UncontrolledModal />,
    snippet: UNCONTROLLED_MODAL_CODE_STRING,
    lineNumbers: [],
  },
  "modal-with-special-close-button-and-special-background": {
    comp: <ModalWithSpecialCloseButtonAndSpecialBackground />,
    snippet: MODAL_WITH_SPECIAL_CLOSE_BUTTON_AND_SPECIAL_BACKGROUND_CODE_STRING,
    lineNumbers: [8, 10],
  },
  "modal-with-special-unwanted-component": {
    comp: <ModalWithSpecialUnwantedComponent />,
    snippet: MODAL_WITH_SPECIAL_UNWANTED_COMPONENT_CODE_STRING,
    lineNumbers: [10, 12],
  },
  "modal-with-blurred-overlay": {
    comp: <ModalWithBlurredOverlay />,
    snippet: MODAL_WITH_BLURRED_OVERLAY_CODE_STRING,
    lineNumbers: [12],
  },
  "controlled-modal": {
    comp: <ControlledModal />,
    snippet: CONTROLLED_MODAL_CODE_STRING,
    lineNumbers: [2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
};
