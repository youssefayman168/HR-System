import React, { CSSProperties } from "react";

type IProps = {
    placeholder: string;
    label?: string;
    name?: string;
    disabled?: boolean;
    type: string;
    onChange?: () => any;
    styles?: CSSProperties;
};

const BaseInput = ({ name, onChange, styles, label, disabled, placeholder, type }: IProps) => {
    return (
        <main className="flex flex-col items-start gap-1">
            <label className="mb-2 text-lg font-medium">{label}</label>
            <input type={type} name={name} placeholder={placeholder} disabled={disabled} onChange={() => onChange?.()} style={styles} className="border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px]" />
        </main>
    );
};

export default React.memo(BaseInput);