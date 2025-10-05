import { cx } from "class-variance-authority";
import type React from "react";

interface MainContentProps extends React.ComponentProps<"main"> {}

export default function MainContent({
    className,
    children,
    ...props
}: MainContentProps) {
    return <main className={cx("mt-4 md:mt-8", className)} {...props}>{children}</main>
}