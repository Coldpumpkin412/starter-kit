import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-6 pb-8 pt-20 text-center md:pt-32 px-4">
      <Badge variant="secondary">Next.js v15 + TailwindCSS v4</Badge>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        빠르게 시작하는 <br />
        <span className="text-primary">웹 개발 스타터킷</span>
      </h1>
      <p className="max-w-2xl text-muted-foreground text-lg">
        Next.js 15, TypeScript, TailwindCSS v4, shadcn/ui로 구성된
        프로덕션 레디 스타터킷입니다.
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="/examples">
            예제 보기 <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/docs">문서</Link>
        </Button>
      </div>
    </section>
  )
}
