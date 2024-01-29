import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ToastPage() {
  const {toast} = useToast()
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Toast functionality</CardTitle>
          <CardDescription>Example</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => {
              toast({
                title: 'Toast Test Title',
                description: 'Successfully triggered a toast !'
              })
            }}
          >
            Show Toast
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}