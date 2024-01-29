"use client"

import {z} from 'zod'

export const employeeFormSchema = z.object({
  id: z.number().min(0),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  birthday: z.string().min(1)
}) 