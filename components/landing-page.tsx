"use client"
import { Button } from "@/components/ui/button"
import { Moon, User, Menu, Bookmark, TrendingUp } from "lucide-react"
import { useState } from "react"
import BackgroundSvg from "./background-svg"

export default function LandingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="min-h-screen  text-white font-sans">
            <BackgroundSvg />
            {/* Header */}
            <header className="flex justify-between items-center p-4 relative">
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6"></div>
                    <span className="text-lg font-semibold">TechInsight</span>
                </div>
                <nav className="hidden md:flex space-x-4">
                    <Button variant="ghost">Home</Button>
                    <Button variant="ghost">Articles</Button>
                    <Button variant="ghost">Tutorials</Button>
                    <Button variant="ghost">Resources</Button>
                </nav>
                <div className="hidden md:flex items-center space-x-4">
                    <Moon className="w-5 h-5" />
                    <User className="w-5 h-5" />
                    <Button variant="ghost" className="border">Subscribe</Button>
                    <Button variant="ghost" className="border">Sign In</Button>
                </div>
                <Button variant="ghost" className="border" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <Menu className="w-6 h-6" />
                </Button>
                {mobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-[#0D0D0D] p-4 md:hidden">
                        <nav className="flex flex-col space-y-2">
                            <Button variant="ghost"
                            >Home</Button>
                            <Button variant="ghost"
                            >Articles</Button>
                            <Button variant="ghost"
                            >Tutorials</Button>
                            <Button variant="ghost"
                            >Resources</Button>
                            <Button variant="ghost"
                            >Subscribe</Button>
                            <Button variant="ghost"
                            >Sign In</Button>
                        </nav>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <main className="text-center mt-10 md:mt-20 px-4">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
                    <span className="text-gray-400">Cutting-edge insights on</span>
                    <br />
                    Tech & Development
                </h1>
                <p className=" max-w-2xl mx-auto mb-8 text-sm md:text-base">
                    Dive deep into the latest technologies, programming languages, and development practices.
                    Stay ahead of the curve with our expert analysis and tutorials.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                    <Button className="bg-white text-black hover:bg-gray-200">Start Reading</Button>
                    <Button variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700">Subscribe Now</Button>
                </div>
                <p className="text-sm text-gray-400">
                    New to coding? Check out our beginner's guide - <a href="#" className="text-purple-400 hover:underline">Learn more →</a>
                </p>
            </main>

            {/* Blog Preview */}
            <div className="mt-16 px-4">
                <div className="bg-[#1C1C1C] rounded-lg p-4 max-w-5xl mx-auto">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex space-x-2 text-xs text-gray-400">
                            <span>Featured Articles</span>
                            <span>Trending</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-[#252525] p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Latest in AI</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                                <TrendingUp className="w-4 h-4" />
                                <span>10k+ reads</span>
                            </div>
                            <p className="text-sm text-gray-300 mb-4">Exploring the impact of large language models on software development...</p>
                            <Button variant="ghost" className="border" size="sm">Read More</Button>
                        </div>
                        <div className="bg-[#252525] p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Web Dev Trends</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                                <Bookmark className="w-4 h-4" />
                                <span>5k+ bookmarks</span>
                            </div>
                            <p className="text-sm text-gray-300 mb-4">The rise of serverless architecture and its implications for modern web apps...</p>
                            <Button variant="ghost" className="border" size="sm">Read More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}