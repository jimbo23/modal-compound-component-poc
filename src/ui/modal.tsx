import {
  ElementRef,
  PropsWithChildren,
  ReactNode,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";

type ModalContextType = {
  open: boolean;
  onOpenChange: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext has to be used within <ModalRoot>");
  }

  return context;
};

type ModalRootProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: () => void;
  children: ReactNode;
};

export const ModalRoot = ({
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  children,
}: ModalRootProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(
    defaultOpen ?? false,
  );

  const open = controlledOpen ?? uncontrolledOpen;

  const setOpen = () => {
    onOpenChange?.();
    setUncontrolledOpen(!open);
  };

  return (
    <ModalContext.Provider value={{ open, onOpenChange: setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

type ModalOverlayProps = {
  className?: string;
};

export const ModalOverlay = ({ className }: ModalOverlayProps) => {
  const { open } = useModalContext();
  const ref = useRef<ElementRef<"div">>(null);

  if (!open) return null;

  return createPortal(
    <div
      ref={ref}
      className={cn(
        "fixed inset-0 z-10 h-screen w-screen bg-black/60",
        className,
      )}
    />,
    document.body,
  );
};

type ModalWindowProps = PropsWithChildren<{
  className?: string;
  closeOnClickOutside?: boolean;
}>;

export const ModalContent = ({
  className,
  children,
  closeOnClickOutside = true,
}: ModalWindowProps) => {
  const { open, onOpenChange } = useModalContext();
  const ref = useRef<ElementRef<"div"> | null>(null);

  useOutsideClick(ref, () => {
    if (closeOnClickOutside) {
      onOpenChange?.();
    }
  });

  if (!open) return null;

  return createPortal(
    <div
      ref={ref}
      className={cn(
        "fixed inset-[50%] z-50 h-[350px] w-[350px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-slate-200 p-4",
        className,
      )}
    >
      {children}
    </div>,
    document.body,
  );
};

type ModalCloseButtonProps = {
  className?: string;
};

export const ModalCloseButton = ({ className }: ModalCloseButtonProps) => {
  const { onOpenChange } = useModalContext();

  const handleClose = () => {
    onOpenChange?.();
  };

  return (
    <button
      className={cn(
        "absolute right-[-10px] top-[-10px] flex size-6 items-center justify-center rounded-full bg-slate-700 text-xs text-white",
        className,
      )}
      onClick={handleClose}
    >
      &#x2715;
    </button>
  );
};

type ModalTriggerProps = PropsWithChildren;

export const ModalTrigger = ({ children }: ModalTriggerProps) => {
  const context = useModalContext();

  const handleOpen = () => {
    context.onOpenChange?.();
  };

  if (isValidElement(children) && children) {
    return cloneElement(children, { onClick: handleOpen });
  }

  return null;
};

const useOutsideClick = (ref: ElementRef, callback: () => void) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, callback]);

  return ref;
};
