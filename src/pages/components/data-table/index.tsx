import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Payment, columns } from "./config/columns";
import { payments } from "./config/test-data";
import { DataTable } from "./data-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

async function getData(): Promise<Payment[]> {
  return payments
}

export const getServerSideProps = (async () => {
  return {props: {data: payments}}
}) satisfies GetServerSideProps<{data: Payment[]}>

export default function DataTablePage({data} : InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [switchChecked, setSwitchChecked] = useState(false)
  const handleCheckedChange = () => {
    setSwitchChecked(!switchChecked)
  }
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <p>DataTable component</p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="flex items-center">
                  <FontAwesomeIcon icon={faQuestionCircle} className="relative inline-flex p-0 w-4 h-4 animate-bounce"/>
                </TooltipTrigger>
                <TooltipContent className="bg-white text-black text-md border-2 rounded-md">
                  <ul className="list-disc list-inside font-normal">
                    <li>Click on the column headers to sort by the values in that column</li>
                    <li>Click on the switch below to enable column visibility selection</li>
                  </ul>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardTitle>
          <CardDescription>Example</CardDescription>
        </CardHeader>
        <CardContent>
          <span className="flex gap-x-2">
            <Switch checked={switchChecked} onCheckedChange={handleCheckedChange}/>
            <p>Edit columns</p>
          </span>
          <DataTable columns={columns} data={data} editColumns={switchChecked}/>      
        </CardContent>
      </Card>
    </div>
  )
}