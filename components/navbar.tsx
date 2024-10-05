"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, LogOut, Menu, Moon, PenTool, Sun, TrendingUp, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Articles", href: "/articles" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Resources", href: "/resources" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [searchQuery, setSearchQuery] = React.useState("")
    const [isLoggedIn, setIsLoggedIn] = React.useState(true) // This should be replaced with your actual auth logic
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()

    const toggleLogin = () => setIsLoggedIn(!isLoggedIn) // For demonstration purposes

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-10">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <TrendingUp className="h-6 w-6" />
                        <span className="text-lg font-semibold">TechInsight</span>
                    </Link>
                    <div className="hidden md:flex">
                        <Input
                            type="search"
                            placeholder="Search articles, topics, or authors..."
                            className="w-[300px]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <nav className="hidden md:flex space-x-4">
                    {navItems.map((item) => (
                        <Button
                            key={item.href}
                            variant="ghost"
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === item.href
                                    ? "text-foreground"
                                    : "text-foreground/60"
                            )}
                            asChild
                        >
                            <Link href={item.href}>{item.name}</Link>
                        </Button>
                    ))}
                </nav>

                <div className="flex items-center space-x-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="hidden md:inline-flex"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>

                    {isLoggedIn ? (
                        <>
                            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                                <Bell className="h-5 w-5" />
                            </Button>
                            <Button variant="default" size="sm" className="hidden md:inline-flex">
                                <PenTool className="mr-2 h-4 w-4" /> Write
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar className="h-8 w-8 cursor-pointer">
                                        <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                                        <AvatarFallback>U</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={toggleLogin}>
                                        <LogOut className="mr-2 h-4 w-4" /> Log out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <>
                            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                                <User className="h-5 w-5" />
                                <span className="sr-only">User account</span>
                            </Button>
                            <Button variant="outline" className="hidden md:inline-flex" onClick={toggleLogin}>
                                Subscribe
                            </Button>
                            <Button variant="default" className="hidden md:inline-flex" onClick={toggleLogin}>
                                Sign In
                            </Button>
                        </>
                    )}

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col space-y-4 mt-8">
                                {navItems.map((item) => (
                                    <Button
                                        key={item.href}
                                        variant="ghost"
                                        className={cn(
                                            "justify-start",
                                            pathname === item.href && "font-bold"
                                        )}
                                        asChild
                                    >
                                        <Link href={item.href} onClick={() => setIsOpen(false)}>
                                            {item.name}
                                        </Link>
                                    </Button>
                                ))}
                                <Button
                                    variant="ghost"
                                    className="justify-start"
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                >
                                    {theme === "dark" ? "Light" : "Dark"} Mode
                                </Button>
                                {isLoggedIn ? (
                                    <>
                                        <Button variant="ghost" className="justify-start">
                                            Notifications
                                        </Button>
                                        <Button variant="ghost" className="justify-start">
                                            Write Article
                                        </Button>
                                        <Button variant="ghost" className="justify-start">
                                            Profile
                                        </Button>
                                        <Button variant="ghost" className="justify-start" onClick={toggleLogin}>
                                            Log Out
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button variant="ghost" className="justify-start">
                                            User Account
                                        </Button>
                                        <Button variant="outline" className="justify-start" onClick={toggleLogin}>
                                            Subscribe
                                        </Button>
                                        <Button variant="default" className="justify-start" onClick={toggleLogin}>
                                            Sign In
                                        </Button>
                                    </>
                                )}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}