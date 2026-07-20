"use client";

import { FormspreeProvider } from "@formspree/react";

export default function FormspreeClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormspreeProvider>
      {children}
    </FormspreeProvider>
  );
}