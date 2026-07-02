import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ExampleShowcase } from "@/components/examples/example-showcase"

export default function LayoutExamplePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Back Link */}
      <Link
        href="/examples"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" />
        예제 목록
      </Link>

      {/* Header */}
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold">레이아웃 & 그리드</h1>
        <p className="text-lg text-muted-foreground">
          Tailwind CSS를 활용한 다양한 레이아웃과 그리드 패턴을 확인해보세요.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">반응형</Badge>
          <Badge variant="secondary">레이아웃</Badge>
        </div>
      </div>

      {/* Grid Layout Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">Grid 레이아웃</h2>

        <ExampleShowcase
          title="2 컬럼 그리드"
          description="md 이상에서 2개 컬럼으로 나뉩니다"
          code={`<div className="grid gap-4 md:grid-cols-2">
  <div className="rounded-lg border bg-muted p-4">
    <div className="text-sm font-medium">Item 1</div>
  </div>
  <div className="rounded-lg border bg-muted p-4">
    <div className="text-sm font-medium">Item 2</div>
  </div>
  <div className="rounded-lg border bg-muted p-4">
    <div className="text-sm font-medium">Item 3</div>
  </div>
  <div className="rounded-lg border bg-muted p-4">
    <div className="text-sm font-medium">Item 4</div>
  </div>
</div>`}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-muted p-4">
              <div className="text-sm font-medium">Item 1</div>
            </div>
            <div className="rounded-lg border border-border bg-muted p-4">
              <div className="text-sm font-medium">Item 2</div>
            </div>
            <div className="rounded-lg border border-border bg-muted p-4">
              <div className="text-sm font-medium">Item 3</div>
            </div>
            <div className="rounded-lg border border-border bg-muted p-4">
              <div className="text-sm font-medium">Item 4</div>
            </div>
          </div>
        </ExampleShowcase>

        <ExampleShowcase
          title="3 컬럼 그리드"
          description="lg 이상에서 3개 컬럼으로 나뉩니다"
          code={`<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  <div className="rounded-lg border bg-muted p-4">
    <div className="text-sm font-medium">Item 1</div>
  </div>
  <div className="rounded-lg border bg-muted p-4">
    <div className="text-sm font-medium">Item 2</div>
  </div>
  <div className="rounded-lg border bg-muted p-4">
    <div className="text-sm font-medium">Item 3</div>
  </div>
  <div className="rounded-lg border bg-muted p-4">
    <div className="text-sm font-medium">Item 4</div>
  </div>
  <div className="rounded-lg border bg-muted p-4">
    <div className="text-sm font-medium">Item 5</div>
  </div>
  <div className="rounded-lg border bg-muted p-4">
    <div className="text-sm font-medium">Item 6</div>
  </div>
</div>`}
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-muted p-4">
              <div className="text-sm font-medium">Item 1</div>
            </div>
            <div className="rounded-lg border border-border bg-muted p-4">
              <div className="text-sm font-medium">Item 2</div>
            </div>
            <div className="rounded-lg border border-border bg-muted p-4">
              <div className="text-sm font-medium">Item 3</div>
            </div>
            <div className="rounded-lg border border-border bg-muted p-4">
              <div className="text-sm font-medium">Item 4</div>
            </div>
            <div className="rounded-lg border border-border bg-muted p-4">
              <div className="text-sm font-medium">Item 5</div>
            </div>
            <div className="rounded-lg border border-border bg-muted p-4">
              <div className="text-sm font-medium">Item 6</div>
            </div>
          </div>
        </ExampleShowcase>

        <ExampleShowcase
          title="4 컬럼 그리드"
          description="lg 이상에서 4개 컬럼으로 나뉩니다"
          code={`<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
    <div key={i} className="rounded-lg border bg-muted p-4">
      <div className="text-sm font-medium">Item {i}</div>
    </div>
  ))}
</div>`}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="rounded-lg border border-border bg-muted p-4">
                <div className="text-sm font-medium">Item {i}</div>
              </div>
            ))}
          </div>
        </ExampleShowcase>
      </div>

      <Separator className="my-12" />

      {/* Flexbox Layout Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">Flexbox 레이아웃</h2>

        <ExampleShowcase
          title="가로 정렬"
          description="flex로 가로 정렬된 레이아웃"
          code={`<div className="flex gap-4">
  <div className="flex-1 rounded-lg border bg-muted p-4">
    <div className="text-sm font-medium">Flex 1</div>
  </div>
  <div className="flex-1 rounded-lg border bg-muted p-4">
    <div className="text-sm font-medium">Flex 1</div>
  </div>
  <div className="flex-1 rounded-lg border bg-muted p-4">
    <div className="text-sm font-medium">Flex 1</div>
  </div>
</div>`}
        >
          <div className="flex gap-4">
            <div className="flex-1 rounded-lg border border-border bg-muted p-4">
              <div className="text-sm font-medium">Flex 1</div>
            </div>
            <div className="flex-1 rounded-lg border border-border bg-muted p-4">
              <div className="text-sm font-medium">Flex 1</div>
            </div>
            <div className="flex-1 rounded-lg border border-border bg-muted p-4">
              <div className="text-sm font-medium">Flex 1</div>
            </div>
          </div>
        </ExampleShowcase>

        <ExampleShowcase
          title="세로 정렬"
          description="flex-col로 세로 정렬된 레이아웃"
          code={`<div className="flex flex-col gap-4">
  <div className="rounded-lg border bg-muted p-4">
    <div className="text-sm font-medium">Item 1</div>
  </div>
  <div className="rounded-lg border bg-muted p-4">
    <div className="text-sm font-medium">Item 2</div>
  </div>
  <div className="rounded-lg border bg-muted p-4">
    <div className="text-sm font-medium">Item 3</div>
  </div>
</div>`}
        >
          <div className="flex flex-col gap-4">
            <div className="rounded-lg border border-border bg-muted p-4">
              <div className="text-sm font-medium">Item 1</div>
            </div>
            <div className="rounded-lg border border-border bg-muted p-4">
              <div className="text-sm font-medium">Item 2</div>
            </div>
            <div className="rounded-lg border border-border bg-muted p-4">
              <div className="text-sm font-medium">Item 3</div>
            </div>
          </div>
        </ExampleShowcase>

        <ExampleShowcase
          title="Justify & Align"
          description="justify와 items를 활용한 정렬"
          code={`<div className="flex h-32 items-center justify-center gap-4 rounded-lg border bg-muted">
  <div className="rounded-md bg-background p-2">
    <div className="text-sm">Center</div>
  </div>
</div>`}
        >
          <div className="flex h-32 items-center justify-center gap-4 rounded-lg border border-border bg-muted">
            <div className="rounded-md bg-background p-2">
              <div className="text-sm">Center</div>
            </div>
          </div>
        </ExampleShowcase>
      </div>

      <Separator className="my-12" />

      {/* Responsive Layout Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">반응형 레이아웃</h2>

        <ExampleShowcase
          title="Sidebar + Main"
          description="모바일에서는 스택, 데스크톱에서는 사이드바 레이아웃"
          code={`<div className="grid gap-4 md:grid-cols-4">
  {/* Sidebar */}
  <div className="rounded-lg border bg-muted p-4 md:col-span-1">
    <div className="text-sm font-medium">Sidebar</div>
  </div>

  {/* Main Content */}
  <div className="rounded-lg border bg-muted p-4 md:col-span-3">
    <div className="text-sm font-medium">Main Content</div>
  </div>
</div>`}
        >
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg border border-border bg-muted p-4 md:col-span-1">
              <div className="text-sm font-medium">Sidebar</div>
            </div>

            <div className="rounded-lg border border-border bg-muted p-4 md:col-span-3">
              <div className="text-sm font-medium">Main Content</div>
            </div>
          </div>
        </ExampleShowcase>
      </div>
    </div>
  )
}
