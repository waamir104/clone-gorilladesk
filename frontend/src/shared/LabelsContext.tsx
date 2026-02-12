import React, { createContext, useContext, useEffect, useState } from "react";

type Labels = Record<string, string>;

interface LabelsContextValue {
  labels: Labels;
  currentLang: string;
  setLang: (lang: string) => void;
}

const LabelsContext = createContext<LabelsContextValue | undefined>(undefined);

const DEFAULT_LANG = "es";

export const LabelsProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [labels, setLabels] = useState<Labels>({});
  const [currentLang, setCurrentLang] = useState<string>(DEFAULT_LANG);

  useEffect(() => {
    const controller = new AbortController();

    async function loadLabels() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/labels?lang=${currentLang}`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error("Error al cargar labels");
        }
        const data: Labels = await response.json();
        setLabels(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadLabels();

    return () => controller.abort();
  }, [currentLang]);

  const setLang = (lang: string) => {
    setCurrentLang(lang);
  };

  return (
    <LabelsContext.Provider value={{ labels, currentLang, setLang }}>
      {children}
    </LabelsContext.Provider>
  );
};

export const useLabels = () => {
  const ctx = useContext(LabelsContext);
  if (!ctx) {
    throw new Error("useLabels debe usarse dentro de LabelsProvider");
  }
  return ctx;
};

