"use client"

import {z} from 'zod'

export const employeeFormSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  birthday: z.date()
}) 