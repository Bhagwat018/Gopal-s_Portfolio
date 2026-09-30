"use client";

import { useState } from "react";
import { Toast } from "./Toast";
import { FloatingDock } from "./FloatingDock";
import { PERSONAL_DATA } from "@/lib/data";

export function ClientShell() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2800);
  };

  const handleCopyEmail = () => {
    showToast(`Email copied: ${PERSONAL_DATA.profile.email}`);
  };

  return (
    <>
      <Toast message={toastMessage} isVisible={toastVisible} />
      <FloatingDock onCopyEmail={handleCopyEmail} />
    </>
  );
}
