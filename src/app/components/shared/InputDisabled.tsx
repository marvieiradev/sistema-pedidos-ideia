'use client'

import { InputHTMLAttributes } from "react";

export interface InputDisabledProps extends InputHTMLAttributes<HTMLElement> {
    label: string
}

export default function InputDisabled(props: InputDisabledProps) {
    return (
        <div className="flex flex-col gap-1 mb-2">
            <label className="text-txpry text-sm md:text-md">{props.label}</label>
            <input disabled {...props} className="bg-pry border border-txter text-txsec p-1 rounded-md outline-none text-sm md:text-md" />
        </div>
    )
}