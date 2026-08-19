export interface ClickawayDetail {
	target: Node | null;
}

declare module 'svelte/elements' {
	interface HTMLAttributes<T> {
		onclickaway?: (
			event: CustomEvent<ClickawayDetail> & { currentTarget: EventTarget & T }
		) => void;
	}
}
export {};
