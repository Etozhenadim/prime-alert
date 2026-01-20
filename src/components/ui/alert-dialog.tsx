import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/20",
        className,
      )}
      {...props}
    />
  );
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-1.5rem)] translate-x-[-50%] translate-y-[-50%] rounded-md border border-orange-400 bg-red-50 p-4 duration-200 lg:max-w-212",
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-1.5 text-left", className)}
      {...props}
    />
  );
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn("mt-3 flex justify-start gap-1.5", className)}
      {...props}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-base font-semibold text-red-800", className)}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-sm text-red-800", className)}
      {...props}
    />
  );
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  );
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      aria-label="Close"
      className={cn(
        "absolute top-2 right-2 cursor-pointer rounded-sm p-2 text-red-800 transition hover:text-red-600 focus:outline-none disabled:pointer-events-none",
        className,
      )}
      {...props}
    >
      <svg
        className="size-3"
        viewBox="0 0 11 11"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.48889 5.4L10.5649 1.32398C10.6385 1.25295 10.6971 1.16797 10.7375 1.07402C10.7778 0.980068 10.7991 0.879018 10.8 0.776768C10.8009 0.674518 10.7814 0.573115 10.7427 0.478475C10.7039 0.383835 10.6468 0.297855 10.5744 0.22555C10.5021 0.153245 10.4162 0.0960649 10.3215 0.0573448C10.2269 0.0186246 10.1255 -0.000859451 10.0232 2.90758e-05C9.92098 0.000917603 9.81993 0.0221612 9.72598 0.0625201C9.63203 0.102879 9.54705 0.161545 9.47601 0.235095L5.4 4.31111L1.32398 0.235095C1.17875 0.0948198 0.984222 0.0172001 0.782311 0.0189546C0.580399 0.0207092 0.387254 0.101698 0.244476 0.244476C0.101698 0.387254 0.0207092 0.580399 0.0189546 0.782311C0.0172001 0.984222 0.0948198 1.17875 0.235095 1.32398L4.31111 5.4L0.235095 9.47601C0.161545 9.54705 0.102879 9.63203 0.0625201 9.72598C0.0221612 9.81993 0.000917603 9.92098 2.90758e-05 10.0232C-0.000859451 10.1255 0.0186246 10.2269 0.0573448 10.3215C0.0960649 10.4162 0.153245 10.5021 0.22555 10.5744C0.297855 10.6468 0.383835 10.7039 0.478475 10.7427C0.573115 10.7814 0.674518 10.8009 0.776768 10.8C0.879018 10.7991 0.980068 10.7778 1.07402 10.7375C1.16797 10.6971 1.25295 10.6385 1.32398 10.5649L5.4 6.48889L9.47601 10.5649C9.62125 10.7052 9.81578 10.7828 10.0177 10.781C10.2196 10.7793 10.4127 10.6983 10.5555 10.5555C10.6983 10.4127 10.7793 10.2196 10.781 10.0177C10.7828 9.81578 10.7052 9.62125 10.5649 9.47601L6.48889 5.4Z"
          fill="current"
        />
      </svg>
    </AlertDialogPrimitive.Cancel>
  );
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
