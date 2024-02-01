import React, { CSSProperties } from "react";

type IProps = {
    name: string;
    onClick?: () => any;
    styles?: CSSProperties;
};

const BaseBtn = ({ name, onClick, styles }: IProps) => {
    return (
        <button
            onClick={() => onClick?.()}
            style={styles}
            className="text-white bg-[#063CB4] rounded-[6px] align-middle font-medium text-xs py-3"
        >
            {name}
        </button>

    );
};

export default React.memo(BaseBtn);