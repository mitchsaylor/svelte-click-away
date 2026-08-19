# Svelte ClickAway Helper

A helper function that facilitates handling user interface elements that are reactive to user disengagement via a click outside of the element.

Built for and with [Svelte 5](https://svelte.dev/).

## Usage

Install the package from NPM with your package manager of choice.

```sh
npm i -D svelte-click-away
```

Sample use case (with TailwindCSS):

```
// +page.svelte
<script lang="ts">
    import { clickAway } from "svelte-click-away"

    let dropdownOpen: boolean = $state(false)

    const toggleMenu = () => {
        dropdownOpen = !dropdownOpen
    }
</script>

<div 
    use:clickAway
    onclickaway={() => dropdownOpen = false}
    data-open={dropdownOpen}
    class="group"
>
    <button onclick={toggleMenu}>
        Menu
    </button>
    <div class="hidden group-data-[open=true]:block">
        <!-- Dropdown contents -->
    </div>
</div>
```
