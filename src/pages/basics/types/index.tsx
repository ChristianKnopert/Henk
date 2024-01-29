import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { typeDescriptions, typesConfig } from "./config/types-config"
import { DataTable } from "@/components/ui/data-table"
import { columns } from "./config/types-columns"

export default function Types() {
  return (
    <div className="flex flex-col gap-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Types</CardTitle>
          <CardDescription>Basic overview of types in TypeScript</CardDescription>
        </CardHeader>
        <CardContent>
          {typesConfig.mainText}
        </CardContent>
      </Card>
      <Card>
        <CardContent className="px-4 py-6">
          <DataTable columns={columns} data={typeDescriptions} title='Primitive types'/>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Handy links</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li className="hover:opacity-80 hover:underline underline-offset-2">
              <a href='/basics/types/example'>Example</a>
            </li>
            <li className="hover:opacity-80 hover:underline underline-offset-2">
              <a href='https://www.typescripttutorial.net/typescript-tutorial/typescript-types/'>TypeScript types</a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}