import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="border-t border-border/40">
      <div className="container mx-auto flex max-w-screen-2xl flex-col items-center justify-center gap-6 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold">지금 시작해보세요</h2>
        <p className="max-w-2xl text-muted-foreground text-lg">
          최신 웹 기술 스택으로 프로덕션 레디 애플리케이션을 빠르게 구축하세요.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/login">시작하기</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/dashboard">데모 보기</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
