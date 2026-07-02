import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ExampleShowcase } from "@/components/examples/example-showcase"

export default function FormsExamplePage() {
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
        <h1 className="text-4xl font-bold">폼 & 입력</h1>
        <p className="text-lg text-muted-foreground">
          다양한 입력 필드와 폼 레이아웃 패턴을 확인해보세요.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">폼</Badge>
          <Badge variant="secondary">상태관리</Badge>
        </div>
      </div>

      {/* Text Input Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">텍스트 입력 필드</h2>

        <ExampleShowcase
          title="기본 입력 필드"
          description="다양한 타입의 입력 필드"
          code={`<form className="space-y-4">
  <div>
    <label className="text-sm font-medium">이메일</label>
    <input
      type="email"
      placeholder="name@example.com"
      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
    />
  </div>
  <div>
    <label className="text-sm font-medium">비밀번호</label>
    <input
      type="password"
      placeholder="비밀번호를 입력하세요"
      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
    />
  </div>
  <div>
    <label className="text-sm font-medium">검색</label>
    <input
      type="search"
      placeholder="검색어를 입력하세요"
      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
    />
  </div>
</form>`}
        >
          <form className="w-full space-y-4">
            <div>
              <label className="text-sm font-medium">이메일</label>
              <input
                type="email"
                placeholder="name@example.com"
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">비밀번호</label>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">검색</label>
              <input
                type="search"
                placeholder="검색어를 입력하세요"
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
          </form>
        </ExampleShowcase>

        <ExampleShowcase
          title="상태 - 비활성화"
          description="disabled 입력 필드"
          code={`<input
  type="text"
  placeholder="비활성화된 입력 필드"
  disabled
  className="w-full rounded-md border border-input bg-muted px-3 py-2 text-sm opacity-50 cursor-not-allowed"
/>`}
        >
          <input
            type="text"
            placeholder="비활성화된 입력 필드"
            disabled
            className="w-full rounded-md border border-input bg-muted px-3 py-2 text-sm opacity-50 cursor-not-allowed"
          />
        </ExampleShowcase>
      </div>

      <Separator className="my-12" />

      {/* Button States Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">버튼 상태</h2>

        <ExampleShowcase
          title="다양한 상태"
          description="기본, 로딩, 비활성화 상태"
          code={`import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function ButtonStatesForm() {
  return (
    <div className="space-y-4">
      <Button className="w-full">제출</Button>
      <Button disabled className="w-full">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        처리 중...
      </Button>
      <Button disabled variant="outline" className="w-full">
        비활성화됨
      </Button>
    </div>
  )
}`}
        >
          <div className="space-y-4">
            <Button className="w-full">제출</Button>
            <Button disabled className="w-full">
              처리 중...
            </Button>
            <Button disabled variant="outline" className="w-full">
              비활성화됨
            </Button>
          </div>
        </ExampleShowcase>
      </div>

      <Separator className="my-12" />

      {/* Form Layout Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">폼 레이아웃</h2>

        <ExampleShowcase
          title="일반적인 폼 구조"
          description="label과 함께 구성된 폼"
          code={`<form className="space-y-6">
  <div className="space-y-2">
    <label className="text-sm font-medium">이름</label>
    <input type="text" placeholder="이름" className="w-full rounded-md border px-3 py-2" />
  </div>

  <div className="space-y-2">
    <label className="text-sm font-medium">이메일</label>
    <input type="email" placeholder="이메일" className="w-full rounded-md border px-3 py-2" />
  </div>

  <div className="space-y-2">
    <label className="text-sm font-medium">메시지</label>
    <textarea placeholder="메시지를 입력하세요" rows={4} className="w-full rounded-md border px-3 py-2" />
  </div>

  <button type="submit" className="w-full rounded-md bg-primary px-4 py-2 text-white">
    전송
  </button>
</form>`}
        >
          <form className="w-full space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">이름</label>
              <input
                type="text"
                placeholder="이름"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">이메일</label>
              <input
                type="email"
                placeholder="이메일"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">메시지</label>
              <textarea
                placeholder="메시지를 입력하세요"
                rows={4}
                className="w-full rounded-md border border-input bg-background px-3 py-2"
              />
            </div>

            <Button className="w-full">전송</Button>
          </form>
        </ExampleShowcase>
      </div>
    </div>
  )
}
