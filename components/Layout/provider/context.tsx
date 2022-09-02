import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";

interface LayoutContextInterface {
  open: boolean;
  ref: React.RefObject<HTMLDivElement> | null;
  toggle: () => void;
}
const Context = createContext<LayoutContextInterface>({
  open: false,
  ref: null,
  toggle: () => {},
});

export default function DashboardProvider({ children }: any) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggle = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (open && window.innerWidth < 1024) {
      router.events.on("routeChangeStart", () => setOpen(false));
    }
    return () => {
      if (open && window.innerWidth < 1024) {
        router.events.off("routeChangeStart", () => setOpen(false));
      }
    };
  }, [open, router]);

  // close side navigation on click outside when viewport is less than 1024px
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (window.innerWidth < 1024) {
        if (!ref.current?.contains(event.target)) {
          if (!open) return;
          setOpen(false);
        }
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [open, ref]);

  return (
    <Context.Provider value={{ open, ref, toggle }}>
      {children}
    </Context.Provider>
  );
}

// custom hook to consume all context values { open, ref, toggle }
export function useToggle() {
  return useContext(Context);
}
