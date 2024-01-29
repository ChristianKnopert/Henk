"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TSType = {
  name: string
  description: string
}

export const columns: ColumnDef<TSType>[] = [
  {
    accessorKey: "name",
    header: ({column}) => {
      return (
        <button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Name
        </button>
      )
    },
  },
  {
    accessorKey: "description",
    header: ({column}) => {
      return (
        <button onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Description
        </button>
      )
    },
  },
]
