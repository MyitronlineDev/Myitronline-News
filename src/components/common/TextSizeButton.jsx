import { useState } from "react";
import { useTextSize } from "../context/TextSizeContext";
import { MdTextFields } from "react-icons/md";
import Button from "./Button";

const TextSizeButton = () => {
    const [open, setOpen] = useState(false);
    const { increase, decrease, reset } = useTextSize();

    return (
        <div className="relative inline-block">
            <Button fn={() => setOpen(!open)} label="Text Size"  />

            {open && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2 z-50 w-full">
                    <Button label="A-" fn={decrease} className="w-full"/>
                    <Button label="Default" fn={reset} className="w-full"/>
                    <Button label="A+" fn={increase} className="w-full"/>
                </div>
            )}
        </div>
    );
};

export default TextSizeButton;
