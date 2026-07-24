import type { NavItem, SiteConfig } from "@/lib/types"

export const siteConfig: SiteConfig = {
  name: "StarterKit",
  description: "Next.js v16 + TypeScript + TailwindCSS v4 + shadcn/ui로 구성된 프로덕션 레디 스타터킷입니다.",
  url: "https://example.com",
}

export const mainNav: NavItem[] = [
  { label: "홈", href: "/" },
  { label: "예제", href: "/examples" },
  { label: "문서", href: "/docs" },
]
