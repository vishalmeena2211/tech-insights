"use client"

import { FeaturedContent } from "./feature-content";
import { Sidebar } from "./sidebar";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <main className="flex-1 py-6">
                <div className="container md:px-6">
                    <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                        <FeaturedContent />
                        <Sidebar />
                    </div>
                </div>
            </main>
        </div>
    )
}