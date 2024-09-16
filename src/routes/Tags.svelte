<script lang="ts">
    import type { Tag } from "$lib/types/tag"

    import iconExpand from "$lib/Images/icon-expand-more.svg"
    import { tagsSelectedStore as tagsSelectedStore } from "./tagsSelected"

    export let tags: Array<Tag> | null

    let expanded = false
</script>

<div class="tags">
    <div class="tags__header">
        <p class="tags__label">Tags:</p>
        {#if $tagsSelectedStore.length > 0}
            <ul class="selected">
                {#each $tagsSelectedStore as tagSelected}
                    <div class="selected__list-item">{tagSelected}</div>
                    <!-- TODO: implement click-to-remove -->
                {/each}
            </ul>
        {/if}

        <!-- TODO: make the button flip on toggle -->
        <button class="tags__button" on:click={() => (expanded = !expanded)}>
            <img src={iconExpand} alt="expand" class="tags__icon" />
        </button>
    </div>

    <!-- Tablet-first -->

    <div class="dropdown {expanded ? 'dropdown--expanded' : ''}">
        <div class="dropdown__buffer">
            <ul class="dropdown__contents">
                {#if tags}
                    {#each tags as tag}
                        <li class="tag-item">
                            <input
                                type="checkbox"
                                class="tag-item__checkbox hidden"
                                bind:group={$tagsSelectedStore}
                                value={tag}
                                id={tag}
                            />
                            <label for={tag} class="tag-item__label"
                                >{tag}</label
                            >
                        </li>
                    {/each}
                {/if}
            </ul>
        </div>
    </div>
</div>

<style>
    .tags {
        width: 100%;
        padding-inline-start: 3rem;
        padding-inline-end: 1.5rem;

        background-color: var(--color-neutral-800);
        border-bottom: 1px solid var(--color-neutral-200);
    }

    /* Header */

    .tags__header {
        padding-block: 1rem;

        display: grid;
        grid-template-columns: 4rem auto 1.5rem;
        grid-template-areas: "label selected button";
    }

    .tags__label {
        grid-area: label;

        font-weight: bold;
    }

    .tags__button {
        grid-area: button;

        background-color: transparent;
    }

    .selected {
        display: flex;
        flex-wrap: wrap;
        row-gap: 0.5rem;
        column-gap: 1.5rem;
    }

    .selected__list-item {
        padding-inline: 1rem;

        border-radius: 1rem;

        background-color: var(--color-primary-400);
    }

    /* Dropdown */

    .dropdown {
        display: grid;
        /* Collapsed state. Transition does not work with height, therefore grid rows hack */
        grid-template-rows: 0fr;

        transition: grid-template-rows 200ms ease-out;
    }

    .dropdown--expanded {
        grid-template-rows: 1fr;
    }

    .dropdown__buffer {
        overflow: hidden;
    }

    .dropdown__contents {
        padding-block: 1.5rem;

        display: flex;
        flex-wrap: wrap;
        row-gap: 0.5rem;
        column-gap: 1.5rem;

        border-top: 1px solid var(--color-neutral-200);
    }
</style>
