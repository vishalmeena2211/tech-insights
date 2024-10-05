import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookOpen, MessageSquare, ThumbsUp } from "lucide-react"

const dummyPosts = [
  {
    id: 1,
    title: "The Impact of Quantum Computing on Cybersecurity",
    author: "Alice Johnson",
    readTime: "7 min read",
    category: "Quantum",
    content: "Quantum computing is set to revolutionize the field of cybersecurity. This article explores the potential threats and opportunities that quantum technologies bring to digital security.",
    likes: 423,
    comments: 89,
    reads: 3200,
  },
  {
    id: 2,
    title: "AI Ethics: Navigating the Moral Maze of Artificial Intelligence",
    author: "Bob Smith",
    readTime: "10 min read",
    category: "AI",
    content: "As AI becomes more prevalent in our daily lives, ethical considerations are more important than ever. This piece delves into the complex moral questions surrounding AI development and deployment.",
    likes: 567,
    comments: 132,
    reads: 4500,
  },
  {
    id: 3,
    title: "The Rise of Edge Computing in IoT",
    author: "Carol Williams",
    readTime: "5 min read",
    category: "IoT",
    content: "Edge computing is transforming the Internet of Things landscape. Learn how this technology is improving response times and reducing bandwidth usage in IoT applications.",
    likes: 289,
    comments: 45,
    reads: 2100,
  },
]

export function FeaturedContent() {
  return (
    <div className="space-y-6">
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back, Tech Enthusiast!</CardTitle>
          <CardDescription>Dive into the latest tech insights and discussions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="secondary" className="w-full sm:w-auto">Explore Trending Topics</Button>
        </CardContent>
      </Card>
      <Tabs defaultValue="foryou" className="space-y-4">
        <TabsList>
          <TabsTrigger value="foryou">For You</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
        </TabsList>
        <TabsContent value="foryou" className="space-y-4">
          <ScrollArea className="h-[600px] rounded-md border p-4">
            {dummyPosts.map((post) => (
              <Card key={post.id} className="mb-4">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardDescription>
                    <Link href="#" className="text-blue-600 hover:underline">{post.author}</Link> · {post.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{post.content}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <ThumbsUp className="mr-1 h-4 w-4" /> {post.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageSquare className="mr-1 h-4 w-4" /> {post.comments}
                    </span>
                    <span className="flex items-center">
                      <BookOpen className="mr-1 h-4 w-4" /> {post.reads}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm">Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </ScrollArea>
        </TabsContent>
        <TabsContent value="recent">
          {/* Recent content would go here, similar structure to "For You" tab */}
        </TabsContent>
        <TabsContent value="trending">
          {/* Trending content would go here, similar structure to "For You" tab */}
        </TabsContent>
      </Tabs>
    </div>
  )
}