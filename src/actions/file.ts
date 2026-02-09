import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";

export const file = {
	downloadSound: defineAction({
		accept: "form",
		input: z.object({
			file: z.instanceof(File),
		}),
		handler: async ({ file }, _ctx) => {
			try {

				/**
				 * change this to use s3api instead of r2 bindings
				 */
				return {
					success: true,
					message: `Sound uploaded to ${file.name}`,
				};
			} catch (error) {
				throw new ActionError({
					code: "BAD_REQUEST",
					message: `Failed to upload audio: ${error instanceof Error ? error.message : String(error)}`,
				});
			}
		},
	}),
};
