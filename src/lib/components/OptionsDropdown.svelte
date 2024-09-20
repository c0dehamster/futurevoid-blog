<script lang="ts">
    import iconOptions from "$lib/Images/icon-more-vertical.svg"
    import { copy } from "svelte-copy"

    export let url: string

    let expanded = false

    const onCopy = () => {
        alert("Link copied to clipboard")
        expanded = false
    }

    const onCopyError = () => {
        alert("Could not copy the link =(")
    }
</script>

<div class="dropdown-wrapper {expanded ? 'dropdown-wrapper--expanded' : ''} ">
    <div class="dropdown {expanded ? 'dropdown--expanded' : ''}">
        <div class="dropdown__buffer">
            <div class="dropdown__contents">
                <button
                    use:copy={url}
                    on:svelte-copy={onCopy}
                    on:svelte-copy:error={onCopyError}
                    class="dropdown__button"
                >
                    Copy link
                </button>
            </div>
        </div>
    </div>

    <button on:click={() => (expanded = !expanded)} class="options">
        <img src={iconOptions} alt="options" />
    </button>
</div>

<style>
    .dropdown-wrapper {
        min-width: 2rem;
        min-height: 2rem;

        display: grid;
        grid-template-columns: auto 2rem;

        border-radius: 1rem;
    }

    .dropdown-wrapper--expanded {
        background-color: var(--color-primary-400);
    }

    .options {
        background-color: transparent;
    }

    .dropdown {
        display: grid;
        grid-template-columns: 0fr;
    }

    .dropdown__buffer {
        overflow: hidden;
    }

    .dropdown--expanded {
        grid-template-columns: 1fr;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dropdown__contents {
        padding-inline-start: 1rem;
        padding-inline-end: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dropdown__button {
        background-color: transparent;
        white-space: nowrap;

        color: var(--color-neutral-100);
    }
</style>
