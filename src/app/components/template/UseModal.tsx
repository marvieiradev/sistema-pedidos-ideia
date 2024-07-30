import { useState } from "react";

export default function useModal() {
    const [isOpen, setisOpen] = useState(false);
    const [isOpenAdmin, setisOpenAdmin] = useState(false);

    const toggle = () => {
        setisOpen(!isOpen);
    };

    const toggleAdmin = () => {
        setisOpenAdmin(!isOpenAdmin);
    };

    return {
        isOpen,
        toggle,
        toggleAdmin
    };
}