import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Palette, FileText, LayoutGrid, Menu, Code, Sun } from "lucide-react"

interface ExampleCard {
  slug: string
  title: string
  description: string
  tags: string[]
  icon: React.ReactNode
}

const exampleCards: ExampleCard[] = [
  {
    slug: "components",
    title: "컴포넌트 쇼케이스",
    description: "Button, Badge, Avatar, Card 등 실제 동작 확인",
    tags: ["UI/UX", "인터랙티브"],
    icon: <Palette className="h-8 w-8" />,
  },
  {
    slug: "forms",
    title: "폼 & 입력",
    description: "다양한 입력 필드와 폼 레이아웃 패턴",
    tags: ["폼", "상태관리"],
    icon: <FileText className="h-8 w-8" />,
  },
  {
    slug: "layout",
    title: "레이아웃 & 그리드",
    description: "Tailwind 기반 그리드/플렉스 패턴",
    tags: ["반응형", "레이아웃"],
    icon: <LayoutGrid className="h-8 w-8" />,
  },
  {
    slug: "menus",
    title: "드롭다운 & 메뉴",
    description: "DropdownMenu 컴포넌트 다양한 활용법",
    tags: ["UI/UX", "인터랙티브"],
    icon: <Menu className="h-8 w-8" />,
  },
  {
    slug: "hooks",
    title: "훅 & 유틸리티",
    description: "useMounted, useTheme, cn() 사용법",
    tags: ["훅", "유틸리티"],
    icon: <Code className="h-8 w-8" />,
  },
  {
    slug: "theme",
    title: "테마 & 색상",
    description: "다크모드 전환 및 색상 토큰 시스템",
    tags: ["테마", "설정"],
    icon: <Sun className="h-8 w-8" />,
  },
]

export default function ExamplesPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold">예제 모음</h1>
        <p className="text-lg text-muted-foreground">
          실제 동작하는 예제들을 통해 StarterKit의 모든 기능을 탐색해보세요.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exampleCards.map((example) => (
          <Card
            key={example.slug}
            className="flex flex-col transition-all hover:border-primary/50 hover:shadow-lg"
          >
            <CardHeader>
              <div className="mb-3 text-primary">{example.icon}</div>
              <CardTitle className="text-xl">{example.title}</CardTitle>
              <CardDescription>{example.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2">
                {example.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/examples/${example.slug}`}>예제 보기</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
