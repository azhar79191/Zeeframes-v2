import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default:
          "group bg-[#F3FE00] w-fit text-[#0B0B0B] text-base font-semibold leading-6 cursor-pointer rounded-full transition-colors duration-300 hover:bg-transparent hover:text-white border border-transparent hover:border-[#F3FE00]",
        destructive:
          "group bg-white text-[#0B0B0B] h-12 text-base font-semibold leading-6 cursor-pointer rounded-full transition-colors duration-300",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link:
          "group bg-[#F3FE00] w-fit h-12 text-[#0B0B0B] border-2 border-[#FFF] text-base font-semibold leading-6 cursor-pointer rounded-full transition-colors duration-300 hover:bg-transparent hover:text-white hover:border-[#F3FE00]",
      },
      size: {
        default: "px-5 py-3.5",
        destructive: "px-8 py-3.5",
        link: "px-6 py-4 w-fit",
        sm: "h-8 rounded-md px-3",
        lg: "h-10 rounded-md px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  to,
  href,
  target,
  rel,
  ...props
}) {
  // 1️⃣ Internal Link (React Router)
  if (to) {
    return (
      <Link
        to={to}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }

  // 2️⃣ External Link
  if (href) {
    return (
      <a
        href={href}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }

  // 3️⃣ Normal Button / Slot
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
