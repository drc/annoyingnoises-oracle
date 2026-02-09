import { ActionError, defineAction } from "astro:actions";

export const readSounds = {
	listAll: defineAction({
		accept: "json",
		handler: async (_, _ctx) => {
			try {
				return { data: { objects: [] } };
			} catch (error) {
				console.error("Error in readSounds.listAll:", error);
				throw new ActionError({
					code: "BAD_REQUEST",
					message: `Failed to retrieve all sounds: ${error instanceof Error ? error.message : String(error)}`,
				});
			}
		},
	}),
};
