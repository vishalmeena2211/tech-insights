import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Linkedin, Github, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">TechInsight</h3>
            <p className="text-sm text-muted-foreground">
              Empowering tech enthusiasts with cutting-edge insights, community-driven content, and a platform for sharing knowledge.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link>
              </li>
              <li>
                <Link href="/write" className="text-muted-foreground hover:text-primary">Write for Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/category/ai-ml" className="text-muted-foreground hover:text-primary">AI & Machine Learning</Link>
              </li>
              <li>
                <Link href="/category/web-dev" className="text-muted-foreground hover:text-primary">Web Development</Link>
              </li>
              <li>
                <Link href="/category/cybersecurity" className="text-muted-foreground hover:text-primary">Cybersecurity</Link>
              </li>
              <li>
                <Link href="/category/data-science" className="text-muted-foreground hover:text-primary">Data Science</Link>
              </li>
              <li>
                <Link href="/category/blockchain" className="text-muted-foreground hover:text-primary">Blockchain</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for the latest tech insights.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit" className="w-full">
                Subscribe
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TechInsight. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary">Cookie Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}