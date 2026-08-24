import type { Attachment } from 'svelte/attachments';

/**
 * A helper function for handling clicking away from a DOM node
 * 
 * @param node - Attach the DOM node using Svelte's {@attach clickaway}, then use the helper function with onclickaway={}.
 */
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
