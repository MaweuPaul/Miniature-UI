import type { ComponentPropsWithRef } from "react";

type ButtonVariant ="primary"| "secondary"| "danger";

  type ButtonSize = " small" | "medium" | " large"

  export type buttonProps = ComponentPropsWithRef<"button"> & {
    variant ?: ButtonVariant;
    size?: ButtonSize
  }

  export function Button ({
    variant ="primary",
    size= "medium",
    children,
    classname,
    ...buttonProps
  })