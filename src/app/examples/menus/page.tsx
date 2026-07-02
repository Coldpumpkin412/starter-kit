import Link from "next/link"
import { ChevronLeft, MoreVertical, Check, Circle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import { ExampleShowcase } from "@/components/examples/example-showcase"

export default function MenusExamplePage() {
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
        <h1 className="text-4xl font-bold">드롭다운 & 메뉴</h1>
        <p className="text-lg text-muted-foreground">
          DropdownMenu 컴포넌트의 다양한 활용법을 확인해보세요.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">UI/UX</Badge>
          <Badge variant="secondary">인터랙티브</Badge>
        </div>
      </div>

      {/* Basic Dropdown Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">기본 드롭다운 메뉴</h2>

        <ExampleShowcase
          title="기본 메뉴 항목"
          description="text 또는 icon 버튼 트리거로 메뉴를 보입니다"
          code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"

export function BasicDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>수정</DropdownMenuItem>
        <DropdownMenuItem>삭제</DropdownMenuItem>
        <DropdownMenuItem>다운로드</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
        >
          <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>수정</DropdownMenuItem>
                <DropdownMenuItem>삭제</DropdownMenuItem>
                <DropdownMenuItem>다운로드</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </ExampleShowcase>

        <ExampleShowcase
          title="메뉴 라벨과 구분선"
          description="라벨로 섹션을 구분하고 구분선으로 그룹화합니다"
          code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>메뉴</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>액션</DropdownMenuLabel>
    <DropdownMenuItem>수정</DropdownMenuItem>
    <DropdownMenuItem>삭제</DropdownMenuItem>

    <DropdownMenuSeparator />

    <DropdownMenuLabel>정보</DropdownMenuLabel>
    <DropdownMenuItem>상세보기</DropdownMenuItem>
    <DropdownMenuItem>공유</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>메뉴</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>액션</DropdownMenuLabel>
                <DropdownMenuItem>수정</DropdownMenuItem>
                <DropdownMenuItem>삭제</DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuLabel>정보</DropdownMenuLabel>
                <DropdownMenuItem>상세보기</DropdownMenuItem>
                <DropdownMenuItem>공유</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </ExampleShowcase>
      </div>

      <Separator className="my-12" />

      {/* Checkbox Dropdown Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">체크박스 메뉴</h2>

        <ExampleShowcase
          title="Checkbox 항목"
          description="선택/비선택 상태를 표시하는 체크박스 항목"
          code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function CheckboxDropdown() {
  const [open, setOpen] = useState(false)
  const [checked, setChecked] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button>필터</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem
          checked={checked}
          onCheckedChange={setChecked}
        >
          활성화
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
        >
          <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>필터</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuCheckboxItem defaultChecked>
                  완료됨
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>대기 중</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>처리 중</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </ExampleShowcase>
      </div>

      <Separator className="my-12" />

      {/* Radio Dropdown Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">라디오 메뉴</h2>

        <ExampleShowcase
          title="Radio 항목"
          description="하나만 선택 가능한 라디오 항목"
          code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function RadioDropdown() {
  const [sort, setSort] = useState("date")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>정렬</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
          <DropdownMenuRadioItem value="date">
            최신순
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="name">
            이름순
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="size">
            용량순
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
        >
          <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>정렬</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuRadioGroup defaultValue="date">
                  <DropdownMenuRadioItem value="date">
                    최신순
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="name">
                    이름순
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="size">
                    용량순
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </ExampleShowcase>
      </div>

      <Separator className="my-12" />

      {/* Destructive Item Example */}
      <div className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold">위험 항목</h2>

        <ExampleShowcase
          title="Destructive 스타일"
          description="삭제 등 위험한 액션은 destructive variant를 사용합니다"
          code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon">
      <MoreVertical className="h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>수정</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">
      삭제
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>수정</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  삭제
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </ExampleShowcase>
      </div>
    </div>
  )
}
