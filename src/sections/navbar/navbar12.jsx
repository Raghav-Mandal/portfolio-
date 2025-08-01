'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function Navbar() {
    return (
        <nav className="w-full border-b shadow-sm ">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between  text-neutral-400 hover:text-white">
                <Link href="/" className="text-xl font-bold">
                    Raghav
                </Link>

                <NavigationMenu>
                    <NavigationMenuList className="space-x-4">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/" className={cn("text-sm font-medium hover:underline")}>
                                    Home
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/about" className={cn("text-sm font-medium hover:underline")}>
                                    About
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/project" className={cn("text-sm font-medium hover:underline")}>
                                    project
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/contact" className={cn("text-sm font-medium hover:underline")}>
                                    contact
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* <NavigationMenuItem>
                            <Button variant="outline">
                                Login
                            </Button>
                        </NavigationMenuItem> */}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    )
}
