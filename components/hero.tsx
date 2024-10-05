import { ArrowRight, BookOpen, MessageSquare, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Hero() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                                TechInsight: Where Tech Minds Connect
                            </h1>
                            <p className="max-w-[600px] md:text-xl">
                                Discover, Share, and Engage with the Latest in Technology. Your platform for reading, writing, and discussing cutting-edge tech insights.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size="lg" className="bg-primary text-primary-foreground">
                                Start Exploring
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-border text-foreground">
                                Share Your Insights
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Card className="bg-card backdrop-blur-lg border-none">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2 text-card-foreground">
                                        <BookOpen className="h-5 w-5" />
                                        <span>Read Blogs</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-card-foreground">Explore a vast array of tech articles written by experts and enthusiasts.</CardDescription>
                                </CardContent>
                            </Card>
                            <Card className="bg-card backdrop-blur-lg border-none">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2 text-card-foreground">
                                        <Share2 className="h-5 w-5" />
                                        <span>Share Knowledge</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-card-foreground">Contribute your own tech insights and reach a global audience of tech enthusiasts.</CardDescription>
                                </CardContent>
                            </Card>
                            <Card className="bg-card backdrop-blur-lg border-none">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2 text-card-foreground">
                                        <MessageSquare className="h-5 w-5" />
                                        <span>Engage & Discuss</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-card-foreground">Comment, debate, and connect with fellow tech minds on the latest topics.</CardDescription>
                                </CardContent>
                            </Card>
                            <Card className="bg-card backdrop-blur-lg border-none">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2 text-card-foreground">
                                        <ArrowRight className="h-5 w-5" />
                                        <span>Stay Updated</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-card-foreground">Get real-time updates on the most trending tech discussions and breakthroughs.</CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}