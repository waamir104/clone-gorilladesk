import React, { createContext, useContext, useState, useCallback } from "react";
import { NewCustomerModal } from "../components/NewCustomerModal";

type NewCustomerModalContextValue = {
  openModal: () => void;
  closeModal: () => void;
};

const NewCustomerModalContext = createContext<NewCustomerModalContextValue | null>(null);

export function useNewCustomerModal() {
  const ctx = useContext(NewCustomerModalContext);
  if (!ctx) {
    throw new Error("useNewCustomerModal must be used within NewCustomerModalProvider");
  }
  return ctx;
}

export function NewCustomerModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <NewCustomerModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <NewCustomerModal isOpen={isOpen} onClose={closeModal} />
    </NewCustomerModalContext.Provider>
  );
}
