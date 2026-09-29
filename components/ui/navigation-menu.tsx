"use client"

import * as React from "react"
import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const sizeMorph =
  "duration-200 [transition-timing-function:cubic-bezier(0.215,0.61,0.355,1),cubic-bezier(0.215,0.61,0.355,1),cubic-bezier(0.645,0.045,0.355,1),cubic-bezier(0.645,0.045,0.355,1)]"

const NavigationMenu = React.forwardRef<
  HTMLElement,
  NavigationMenuPrimitive.Root.Props & { viewport?: boolean }
>(({ className, children, viewport = true, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    data-slot="navigation-menu"
    data-viewport={viewport}
    className={cn(
      "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport unstyled={!viewport} />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = "NavigationMenu"

function NavigationMenuList({
  className,
  ...props
}: NavigationMenuPrimitive.List.Props) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: NavigationMenuPrimitive.Item.Props) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "group ease inline-flex h-8 w-max items-center justify-center rounded-md px-4 py-1 text-sm font-medium text-muted-foreground transition-[color,box-shadow] duration-150 outline-none hover:bg-foreground/5 hover:text-foreground focus:bg-foreground/5 focus:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-foreground/5 data-popup-open:text-foreground data-popup-open:hover:bg-foreground/5 data-popup-open:focus:bg-foreground/5"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="ease relative top-px ml-1.5 size-3 opacity-75 transition-transform duration-150 group-data-popup-open:translate-y-px"
        aria-hidden="true"
        strokeWidth={2.5}
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: NavigationMenuPrimitive.Content.Props) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "h-full w-min p-2 pr-2.5",
        "transition-[opacity,translate] duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)]",
        "data-starting-style:data-activation-direction:opacity-0",
        "data-ending-style:data-activation-direction:opacity-0",
        "data-starting-style:data-[activation-direction=left]:-translate-x-4",
        "data-starting-style:data-[activation-direction=right]:translate-x-4",
        "data-ending-style:data-[activation-direction=left]:translate-x-4",
        "data-ending-style:data-[activation-direction=right]:-translate-x-4",
        "data-ending-style:duration-150",
        "**:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  unstyled = false,
}: {
  className?: string
  unstyled?: boolean
}) {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null)

  if (unstyled) {
    return (
      <>
        <div
          ref={setContainer}
          data-slot="navigation-menu-viewport-parent"
          className="contents"
        />
        {container ? (
          <NavigationMenuPrimitive.Portal container={container}>
            <NavigationMenuPrimitive.Positioner
              side="bottom"
              align="start"
              sideOffset={8}
              className="isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)] outline-none data-instant:transition-none"
              collisionAvoidance={{ side: "none" }}
            >
              <NavigationMenuPrimitive.Popup
                data-slot="navigation-menu-viewport"
                className={cn(
                  "h-(--popup-height) w-(--popup-width) origin-(--transform-origin) will-change-[opacity,transform] outline-none",
                  "transition-[opacity,scale,width,height]",
                  sizeMorph,
                  "data-starting-style:scale-95 data-starting-style:opacity-0",
                  "data-ending-style:scale-95 data-ending-style:opacity-0",
                  "data-ending-style:duration-150",
                  "relative -translate-x-1/3 overflow-hidden rounded-xl bg-popover text-popover-foreground shadow-lg ring-1 shadow-black/6.5 ring-border",
                  className
                )}
              >
                <NavigationMenuPrimitive.Viewport
                  data-slot="navigation-menu-popup"
                  className="relative size-full overflow-hidden"
                />
              </NavigationMenuPrimitive.Popup>
            </NavigationMenuPrimitive.Positioner>
          </NavigationMenuPrimitive.Portal>
        ) : null}
      </>
    )
  }

  return (
    <>
      <div
        ref={setContainer}
        data-slot="navigation-menu-viewport-parent"
        className="fixed inset-x-0 top-(--viewport-top,3rem) isolate z-50 mx-auto flex max-w-6xl px-(--viewport-outer-px) perspective-distant"
      />
      {container ? (
        <NavigationMenuPrimitive.Portal container={container}>
          <NavigationMenuPrimitive.Positioner
            style={{
              position: "relative",
              top: "auto",
              left: "auto",
              right: "auto",
              bottom: "auto",
              transform: "none",
              width: "max-content",
              maxWidth: "100%",
              height: "auto",
            }}
            sideOffset={0}
            align="start"
            positionMethod="fixed"
            collisionAvoidance={{ side: "none" }}
          >
            <NavigationMenuPrimitive.Popup
              data-slot="navigation-menu-viewport"
              className={cn(
                "h-(--popup-height) w-(--popup-width) max-w-full origin-top will-change-[opacity,transform,width,height] outline-none",
                "transition-[opacity,transform,width,height]",
                sizeMorph,
                "data-starting-style:transform-[rotateX(-8deg)_scale(0.96)] data-starting-style:opacity-0",
                "data-ending-style:transform-[rotateX(-8deg)_scale(0.96)] data-ending-style:opacity-0",
                "data-ending-style:duration-150",
                "relative mt-1.5 overflow-hidden rounded-xl bg-popover text-popover-foreground shadow-xl ring-1 shadow-black/6.5 ring-border",
                className
              )}
            >
              <NavigationMenuPrimitive.Viewport
                data-slot="navigation-menu-popup"
                className="relative size-full overflow-hidden"
              />
            </NavigationMenuPrimitive.Popup>
          </NavigationMenuPrimitive.Positioner>
        </NavigationMenuPrimitive.Portal>
      ) : null}
    </>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: NavigationMenuPrimitive.Link.Props) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "ease flex flex-col gap-1 rounded-[11px] p-2 text-sm transition-colors duration-150 outline-none hover:bg-foreground/5 hover:text-foreground focus:bg-foreground/5 focus:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 data-active:bg-foreground/2.5 data-active:text-foreground data-active:hover:bg-foreground/5 data-active:focus:bg-foreground/5 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="navigation-menu-indicator"
      className={cn(
        "top-full z-1 flex h-1.5 items-end justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </div>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
