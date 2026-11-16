"use client";

import NumberFlow, { type Value } from "@number-flow/react";
import * as React from "react";

type NumberFlowFormat = React.ComponentProps<typeof NumberFlow>["format"];

interface NumberFlowWrapperProps {
  value: Value;
  format?: NumberFlowFormat;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function NumberFlowWrapper({
  value,
  format,
  prefix,
  suffix,
  className,
}: NumberFlowWrapperProps) {
  return (
    <span className={className}>
      {prefix && <span>{prefix}</span>}
      <NumberFlow value={value} format={format} />
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
