import React, { useState } from "react";

const useMultiStepForm = (forms: React.ReactElement[]) => {
  const [currentStep, setCurrentSteps] = useState(0);

  function goNext() {
    setCurrentSteps((prev) => {
      if (prev >= forms.length - 1) return prev;
      return prev + 1;
    });
  }

  function goPrev() {
    setCurrentSteps((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  }

  const hasPrev = currentStep > 0;

  const hasNext = currentStep < forms.length - 1;

  console.log(forms.length);

  return {
    step: forms[currentStep],
    currentStep,
    goNext,
    goPrev,
    hasNext,
    hasPrev,
  };
};

export default useMultiStepForm;
