"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { useState } from "react";
import { trpc } from "./client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Provider({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient({}));
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: "http://localhost:3000/api/ppi",
				}),
			],
		})
	);
	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}
		>
			<QueryClientProvider client={queryClient}>{children}
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</trpc.Provider>
	);
}
