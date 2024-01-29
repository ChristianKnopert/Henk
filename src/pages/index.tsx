import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="z-10 max-w-5xl w-full flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Next.js Example</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This repository contains a basic example of a Next.js application. The application is configured to use:</p>
          <ul className="list-disc list-inside">
            <li>TypeScript</li>
            <li>Tailwind (styling)</li>
            <li>shadcn (UI components)</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Handy links</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside flex flex-col">
            <li>
              <a href='https://tailwindcss.com/docs/installation'>TailwindCSS Docs</a>
            </li>
            <li>
              <a href='https://ui.shadcn.com/'>shadcn (UI components)</a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
