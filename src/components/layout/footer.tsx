import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <p className="font-bold text-lg">StarterKit</p>
          <p className="text-sm text-muted-foreground">
            Next.js 15 + TypeScript + TailwindCSS v4 + shadcn/ui
          </p>
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
            홈
          </Link>
          <Link href="/examples" className="text-muted-foreground transition-colors hover:text-foreground">
            예제
          </Link>
          <Link href="/docs" className="text-muted-foreground transition-colors hover:text-foreground">
            문서
          </Link>
          <Link href="/login" className="text-muted-foreground transition-colors hover:text-foreground">
            로그인
          </Link>
        </div>
      </div>
    </footer>
  )
}
