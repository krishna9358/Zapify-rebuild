import { z } from "zod";


export const signupSchema = z.object({
    name : z.string().min(3).max(20),
    email : z.string().email(),
    password : z.string().min(8).max(20),
})

export const signinSchema = z.object({
    email : z.string().email(),
    password : z.string().min(8).max(20),
})


export const zapCreateSchema = z.object({
    availableTriggerId : z.string(),
    triggerMetadata : z.any().optional(),
    actions: z.array(z.object({
        availableActionId: z.string(),
        actionMetadata : z.any().optional()
    }))
})