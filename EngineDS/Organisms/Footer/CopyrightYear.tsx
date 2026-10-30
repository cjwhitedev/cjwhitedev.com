"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// The year is read on the client so prerendered pages never freeze it
export const CopyrightYear = () =>
  useSyncExternalStore<number | null>(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
