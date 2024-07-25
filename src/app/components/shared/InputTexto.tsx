'use client'

import { InputHTMLAttributes } from "react";

export interface InputTextoProps extends InputHTMLAttributes<HTMLElement> {
    label: string
}

export default function InputTexto(props: InputTextoProps) {
    return (
        <div className="flex flex-col gap-1 mb-2">
            <label className="text-txpry">{props.label}</label>
            <input {...props} className="bg-pry border border-txter text-txsec p-1 rounded-md outline-none" />
        </div>
    )
}