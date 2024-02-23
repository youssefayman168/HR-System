import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SuccessIcon from "./SuccessIcon";
import TrashIcon from "./TrashIcon";
import WarningIcon from "./WarningIcon";

const modalIcons = {
  success: <SuccessIcon />,
  delete: <TrashIcon />,
  warning: <WarningIcon />,
};

/**
 * TIPS TO CREATE A WELL-WRITTEN MODAL
 * 1. Pass The Type (So Paste The Suitable Icon For It)
 * 2. Pass The Title And Subtitle
 * 3. Determine Whether To Show The Options Or NOT
 * 4. Show Cancel
 * 5. OnMainOptionClick
 */

type ModalTypes = "success" | "warning" | "delete";

type IModal = {
  type: ModalTypes;
  title: string;
  subtitle: string;
  showOptions?: boolean;
  showCancel: boolean;
  mainOptionTitle: string;
  onMainOptionClick: () => any;
  onCancel: () => any;
  showModal?: boolean;
};

const Modal = ({
  type,
  title,
  subtitle,
  showCancel,
  showOptions,
  mainOptionTitle,
  onMainOptionClick,
  onCancel,
  showModal = false,
}: IModal) => {
  const [internalShow, setInternalShow] = useState(true);

  useEffect(() => {
    const timeoutShow = setTimeout(() => {
      setInternalShow(false);
    }, 3000);
    return () => clearTimeout(timeoutShow);
  });
  return showModal && internalShow
    ? createPortal(
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#000000CC]'>
          <div className='w-[532px] h-[361px] absolute top-[28.5%] left-[33%] rounded-[6px] bg-white flex flex-col justify-center items-center'>
            <div className='mb-[39px]'>{modalIcons[type]}</div>
            <div className='flex items-center flex-col'>
              <h4 className='font-medium text-[#000] text-[24px]'>{title}</h4>
              <p className='text-[#656565] text-[18px] font-medium mt-[14px] '>
                {subtitle}
              </p>
            </div>
            {showOptions && (
              <div className='flex flex-row gap-[12px] mt-[24px]'>
                {showCancel && (
                  <button
                    onClick={() => onCancel()}
                    className='w-[103px] h-[47px] border-solid border-[1px] rounded-[6px] border-[#1A1A1A2E] font-semibold'
                  >
                    Cancel
                  </button>
                )}{" "}
                <button
                  onClick={() => onMainOptionClick()}
                  className='w-[103px] h-[47px] border-solid border-[1px] rounded-[6px] bg-[#063C84] text-[#fff] text-[12px]'
                >
                  {mainOptionTitle}
                </button>
              </div>
            )}
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
