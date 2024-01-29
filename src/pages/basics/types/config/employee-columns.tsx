"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Employee = {
  id: number,
  firstName: string
  lastName: string
  birthday: Date
}

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "id",
    header: ({column}) => {
      return (
        <button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          ID
        </button>
      )
    },
  },
  {
    accessorKey: "firstName",
    header: ({column}) => {
      return (
        <button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          First name
        </button>
      )
    },
  },
  {
    accessorKey: "lastName",
    header: ({column}) => {
      return (
        <button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Last name
        </button>
      )
    },
  },
  {
    accessorKey: "birthday",
    header: ({column}) => {
      return (
        <button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Birthday
        </button>
      )
    },
    cell: ({row}) => {
      return (
        <div>
          {new Date(row.getValue("birthday")).toISOString().slice(0,10)}
        </div>
      )
    }
  },
]
