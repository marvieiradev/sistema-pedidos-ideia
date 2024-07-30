'use client'

import { InputHTMLAttributes } from "react";

export interface TextAreaDisabledProps extends InputHTMLAttributes<HTMLElement> {
    label: string
}

export default function TextAreaDisabled(props: TextAreaDisabledProps) {
    return (
        <div className="flex flex-col gap-1 mb-2">
            <label className="text-txpry text-[10px] md:text-sm lg:text-base font-semibold">{props.label.toUpperCase()}</label>
            <textarea {...props} disabled cols={30} rows={5} className={`bg-pry border border-txter text-txsec p-1 rounded-md outline-none text-xs md:text-md font-semibold uppercase`} />
        </div>
    )
}