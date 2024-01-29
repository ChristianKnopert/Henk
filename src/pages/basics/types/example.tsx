import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
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

import { useForm } from "react-hook-form"
import { employeeFormSchema } from "./config/employee-form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { DataTable } from "@/components/ui/data-table"
import { columns } from "./config/employee-columns"

type Employee = {
  id: number,
  firstName: string,
  lastName: string,
  birthday: string
}

export default function Example() {
  const [employees, setEmployees] = useState<Employee[]>([])
  // const [employeeBday, setEmployeeBday] = useState<string>((new Date()).toISOString().slice(0,10))
  const employeeForm = useForm<z.infer<typeof employeeFormSchema>>({
    resolver: zodResolver(employeeFormSchema),
    defaultValues: {
      id: 0,
      firstName: '',
      lastName: '',
      birthday: (new Date()).toISOString().slice(0,10)
    },
  })
  const handleEmployeeFormSubmit = (newEmployee:any) => {
    console.log(newEmployee)
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
          <form onSubmit={employeeForm.handleSubmit(handleEmployeeFormSubmit)} className="space-y-8 w-full">
            <FormField
              control={employeeForm.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center">
                    <FormLabel className="text-md w-1/2">First name</FormLabel>
                    <FormControl>
                      <input placeholder="First name" {...field} className="border-2 rounded-md px-2 py-1 w-full"/>
                    </FormControl>
                  </div>
                  <FormMessage className="text-right"/>
                </FormItem>
              )}
            />
            <FormField
              control={employeeForm.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center">
                    <FormLabel className="w-1/2 text-md">Last name</FormLabel>
                    <FormControl>
                      <input placeholder="Last name" {...field} className="border-2 rounded-md px-2 py-1 w-full"/>
                    </FormControl>
                  </div>
                  <FormMessage className="text-right"/>
                </FormItem>
              )}
            />
            <FormField
              control={employeeForm.control}
              name="birthday"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center w-full">
                    <FormLabel className="w-1/2 text-md">Birthday</FormLabel>
                    <FormControl>
                      <input
                        value={employeeForm.getValues().birthday}
                        onChange={e => employeeForm.setValue('birthday', e.target.value)}
                        placeholder="Birthday"
                        name="birthday"
                        id='birthday'
                        type='date'
                        className="border-2 w-full rounded-md px-2 py-1"
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="text-right"/>
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