import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const trendingTopics = [
  { name: "#QuantumComputing", posts: 1234 },
  { name: "#AIEthics", posts: 987 },
  { name: "#5GTechnology", posts: 876 },
  { name: "#Cybersecurity", posts: 765 },
  { name: "#GreenTech", posts: 654 },
]

const recommendedArticles = [
  { title: "The Future of Edge Computing", author: "John Doe", readTime: "5 min read" },
  { title: "AI in Healthcare: Promises and Challenges", author: "Jane Smith", readTime: "8 min read" },
  { title: "Blockchain Beyond Cryptocurrency", author: "Alex Johnson", readTime: "6 min read" },
]

export function Sidebar() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Trending Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trendingTopics.map((topic, index) => (
              <div key={topic.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-muted-foreground">{index + 1}</span>
                  <Link href="#" className="text-blue-600 hover:underline">{topic.name}</Link>
                </div>
                <Badge variant="outline">{topic.posts}k posts</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recommended for You</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendedArticles.map((article, index) => (
              <div key={index} className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src={`/placeholder-avatar-${index + 1}.jpg`} alt="Author" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div>
                  <Link href="#" className="font-medium hover:underline">{article.title}</Link>
                  <p className="text-sm text-muted-foreground">By {article.author} · {article.readTime}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View More Recommendations</Button>
        </CardFooter>
      </Card>
    </div>
  )
}