import React, { CSSProperties } from "react";

type IProps = {
    name: string;
    onClick?: () => any;
    styles?: CSSProperties;
};

const BorderBtn = ({ name, onClick, styles }: IProps) => {
    return (
        <button
            onClick={() => onClick?.()}
            style={styles}
            className=" bg-transparent rounded-[6px] align-middle font-medium text-[#1A1A1A] border border-[rgba(26,26,26,0.18)] text-xs px-5 py-3"
        >
            {name}
        </button>
    );
};

export default React.memo(BorderBtn);