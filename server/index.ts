import { publicProcedure, router } from "./trpc";
import { z } from 'zod';
export const appRouter = router({
	getTodos: publicProcedure.query(async () => {
		return [10, 20, 30, 40]
	}),
	userById: publicProcedure
		.input(z.string())
		.query(async (opts) => {
			const { input } = opts;
			const user = input;
			return user;
		}),
});


export type AppRouter = typeof appRouter;
