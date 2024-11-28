import LanguageSelector from "./LanguageSelector";
import {Input} from "@nextui-org/input";




export default function Header() {
  return (
    <header className="m-1 bg-[#e4ded2] rounded-lg h-20">
      <div className="flex w-full justify-evenly">
        <div className="mt-2 ml-2">
          <LanguageSelector />
        </div>

        <div className="mt-2 ml-2">
          <Input 
            type="text"
            label="Seed"
            value={"sdfsdffsddf"}
          />
        </div>

        <div className="mt-2 ml-2">
          <Input 
            type="number"
            label="Review"
            value={"sdfsdffsddf"}
          />
        </div>

        <div className="mt-2 ml-2">
          <Input 
            type="number"
            label="Review"
            value={"sdfsdffsddf"}
          />
        </div>
      </div>

    </header>
  )
}