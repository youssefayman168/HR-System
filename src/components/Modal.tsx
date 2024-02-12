import React from "react";
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
}: IModal) => {
  return createPortal(
    <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#000000CC]'>
      <div className='w-[532px] h-[361px] absolute top-[50%] left-[50%] rounded-[6px] bg-white'>
        <div className='mb-[39px]'>{modalIcons[type]}</div>
        <div className='flex items-center flex-col'>
          <h4 className='font-medium text-[#000] text-[24px]'>{title}</h4>
          <p>{subtitle}</p>
        </div>
        {showOptions && (
          <div>
            {showCancel && <button onClick={() => onCancel()}>Cancel</button>}{" "}
            <button onClick={() => onMainOptionClick()}>
              {mainOptionTitle}
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
