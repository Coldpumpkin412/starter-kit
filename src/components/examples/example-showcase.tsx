"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface ExampleShowcaseProps {
  title: string
  description: string
  code: string
  children: React.ReactNode
}

export function ExampleShowcase({
  title,
  description,
  code,
  children,
}: ExampleShowcaseProps) {
  const [showCode, setShowCode] = useState(false)

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border border-border bg-muted/50 p-4">
          {children}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowCode(!showCode)}
          className="w-full"
        >
          {showCode ? "미리보기" : "예제보기"}
          <ChevronDown
            className={`ml-2 h-4 w-4 transition-transform ${
              showCode ? "-rotate-180" : ""
            }`}
          />
        </Button>

        {showCode && (
          <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4">
            <code className="text-sm text-slate-100 font-mono leading-relaxed">
              {code}
            </code>
          </pre>
        )}
      </CardContent>
    </Card>
  )
}
