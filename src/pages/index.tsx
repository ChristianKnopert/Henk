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
          <CardTitle>Aerial photography of Henk Knopert</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This website is made to display all the photos made by Henk Knopert.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>About me:</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside flex flex-col">
              <p>Im from</p> 
              <p>Pizza</p>
            
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
