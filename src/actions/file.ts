import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";

export const file = {
	downloadSound: defineAction({
		accept: "form",
		input: z.object({
			file: z.instanceof(File),
		}),
		handler: async ({ file }, ctx) => {
			try {
				const runtime = ctx.locals.runtime;

				const resp = await runtime.env.BUCKET.put(
					`dota/${file.name}`,
					await file.arrayBuffer(),
				);
				console.log(resp?.uploaded);
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
