import type { Attachment } from 'svelte/attachments';

export const clickaway: Attachment = (node: Element) => {
	const handleClick = (event: MouseEvent) => {
		const target = event.target as Node | null;
		if (node && !node.contains(target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('clickaway', { detail: { target } }));
		}
	};
	document.addEventListener('click', handleClick, true);
	return () => {
		document.removeEventListener('click', handleClick, true);
	};
};
