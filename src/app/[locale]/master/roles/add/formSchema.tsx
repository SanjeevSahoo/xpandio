import { z } from "zod";

export const schema = z.object({
  name: z.string().trim().min(4, {
    message: "Role name is required.",
  }),
  project_id: z.string().trim().min(1, {
    message: "Application is required.",
  }),
});
