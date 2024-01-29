import { SyntheticEvent, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { useForm } from "react-hook-form"
import { employeeFormSchema } from "./config/employee-form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { DatePicker } from "@/components/ui/date-picker"
import { DataTable } from "@/components/ui/data-table"
import { columns } from "./config/employee-columns"

type Employee = {
  id: number,
  firstName: string,
  lastName: string,
  birthday: Date
}

export default function Example() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [employeeBday, setEmployeeBday] = useState<Date>(new Date())
  const employeeForm = useForm<z.infer<typeof employeeFormSchema>>({
    resolver: zodResolver(employeeFormSchema),
    defaultValues: {
      id: 0,
      firstName: '',
      lastName: '',
      birthday: employeeBday
    }
  })
  const handleEmployeeFormSubmit = (newEmployee:any) => {
    setEmployees(prev => {
      return [...prev, newEmployee]
    })
    employeeForm.reset()
  }
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-md">Add new employee</CardTitle>
        </CardHeader>
        <CardContent>
        <Form {...employeeForm}>
          <form onSubmit={employeeForm.handleSubmit(handleEmployeeFormSubmit)} className="space-y-8 w-3/4">
            <FormField
              control={employeeForm.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex justify-between items-center w-full">
                  <FormLabel className="text-md w-1/2">First name</FormLabel>
                  <FormControl>
                    <input placeholder="First name" {...field} className="border-2 rounded-md px-2 py-1 w-full"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={employeeForm.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex justify-between items-center">
                  <FormLabel className="w-1/2 text-md">Last name</FormLabel>
                  <FormControl>
                    <input placeholder="Last name" {...field} className="border-2 rounded-md px-2 py-1 w-full"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={employeeForm.control}
              name="birthday"
              render={({ field }) => (
                <FormItem className="flex justify-between items-center">
                  <FormLabel className="w-1/2 text-md">Birthday</FormLabel>
                  <FormControl>
                    <DatePicker {...field} date={employeeBday} setDate={setEmployeeBday} className='border-2 rounded-md px-2 py-1'/>
                    {/* <input placeholder="Birthday" {...field} className="border-2 rounded-md px-2 py-1"/> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Employees</CardTitle>
          <CardDescription>A list of all employees</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={employees} />
        </CardContent>
      </Card>
    </div>
  )
}