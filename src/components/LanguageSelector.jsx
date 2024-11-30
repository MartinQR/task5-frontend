import { Language } from "../utils/enums";
import { Select, SelectItem } from "@nextui-org/react";

export default function LanguageSelector({ language, setLanguage }) {
  const selectOptions = Object.values(Language)?.map((lang) => {
    return { key: lang, label: lang };
  });

  return (
    <div className="w-32">
      <Select
        label="Language"
        placeholder="Select an lang"
        className="max-w-xs"
        size="sm"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}>
        {selectOptions.map((lang) => (
          <SelectItem key={lang.key}>{lang.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
