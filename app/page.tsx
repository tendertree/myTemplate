"use client";
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { trpc } from './_trpc/client'

export default function Home() {
	const getTodos = trpc.getTodos.useQuery();
	return (
		<div>
			{JSON.stringify(getTodos.data)}
			<p>This is just template page.. did you?</p>
			<Button variant="outline">Button</Button>
		</div>
	)
}
