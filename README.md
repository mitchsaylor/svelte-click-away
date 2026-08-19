# Svelte Click Away

A helper function that facilitates handling user interface elements that are reactive to user disengagement via a click outside of the element.

Requires [Svelte](https://svelte.dev/) 5.29 or newer.

## Usage

Install the package

```sh
npm i -D svelte-click-away
```

Sample use case (with TailwindCSS):

```html
// *.svelte

<script lang="ts">
    import { clickaway } from "svelte-click-away"

    let menuOpen: boolean = $state(false)

    const toggleMenu = () => {
        menuOpen = !menuOpen
    }
</script>

<div 
    {@attach clickaway}
    onclickaway={() => menuOpen = false}
    data-open={menuOpen}
    class="group"
>
    <button onclick={toggleMenu}>
        Menu
    </button>
    <div class="hidden group-data-[open=true]:block">
        <p>Sample menu contents</p>
        <!-- Menu contents -->
    </div>
</div>
```
