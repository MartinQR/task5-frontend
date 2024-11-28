import { Language } from "../utils/enums";
import {Select, SelectItem} from "@nextui-org/react";

export default function LanguageSelector() {

  const selectOptions = Object.values(Language)?.map(lang => {
    return {key: lang, label: lang}
  });


  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 min-w-[150px]">
      <Select
        label="Language"
        placeholder="Select an lang"
        className="max-w-xs"
      >
        {selectOptions.map((lang) => (
          <SelectItem 
            key={lang.key}
          >
            {lang.label}
          </SelectItem>
        ))}
      </Select>
    </div>

  );
}
