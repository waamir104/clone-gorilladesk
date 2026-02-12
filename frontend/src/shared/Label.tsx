import { useLabels } from "./LabelsContext";

interface LabelProps {
  keyName: string;
  fallback?: string;
}

export const Label: React.FC<LabelProps> = ({ keyName, fallback }) => {
  const { labels } = useLabels();
  const text = labels[keyName] ?? fallback ?? keyName;
  return <>{text}</>;
};

