"use client";

import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/providers/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>
    <ThemeProvider>

    {children}
    </ThemeProvider>
    </Provider>;
}
