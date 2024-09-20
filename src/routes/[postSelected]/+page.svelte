<script lang="ts">
    import { page } from "$app/stores"
    import OptionsDropdown from "$lib/components/OptionsDropdown.svelte"
    import { formatBodyText } from "$lib/formatBodyText.js"
    import type { Post } from "$lib/types/post"
    import { onMount } from "svelte"

    export let data

    let post = data.post

    let currentURL = ""

    onMount(() => {
        currentURL = $page.url.href
    })

    let bodyTextFormatted = post.bodyText ? formatBodyText(post.bodyText) : null
</script>

<div class="page-wrapper">
    <main class="main">
        {#if post}
            <div class="post">
                <div class="post__options">
                    <OptionsDropdown url={currentURL}></OptionsDropdown>
                </div>

                <div class="post__contents">
                    {#if post.title}
                        <h1 class="post__title">{post.title}</h1>
                    {/if}

                    {#if post.imageUrl}
                        <img src={post.imageUrl} alt="" class="post__image" />
                    {/if}

                    {#if bodyTextFormatted}
                        <div class="post__body-text">
                            {#each bodyTextFormatted as paragraph}
                                <p class="post__paragraph">
                                    {paragraph}
                                </p>
                            {/each}
                        </div>
                    {/if}
                </div>

                <div class="tags">
                    <p class="tags__label">Tags:</p>

                    {#if post.tags}
                        <ul class="tags__list">
                            {#each post.tags as tag}
                                <li class="tags__list-item">{tag}</li>
                            {/each}
                        </ul>
                    {/if}
                </div>
            </div>
        {/if}
    </main>
</div>

<style>
    .page-wrapper {
        min-height: 100vh;
        padding-block: 8rem;

        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: var(--color-neutral-400);
    }
    .post {
        position: relative;

        max-width: 64rem;

        display: flex;
        flex-direction: column;

        background-color: var(--color-neutral-800);
    }

    .post__options {
        position: absolute;
        inset-block-start: 1.5rem;
        inset-inline-end: 1.5rem;

        background-color: transparent;
    }

    .post__contents {
        padding: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .post__title {
        font-size: var(--font-size-600);
    }

    .post__body-text {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        color: var(--color-neutral-200);
    }

    /* Tags */

    .tags {
        padding-inline: 2rem;
        padding-block: 1rem;

        display: flex;
        align-items: center;
        gap: 2rem;

        background-color: var(--color-primary-400);
    }

    .tags__list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        row-gap: 0.5rem;
        column-gap: 1.5rem;
    }

    .tags__label {
        font-weight: bold;
    }

    .tags__list-item {
        color: var(--color-neutral-200);
    }

    @media screen and (width > 40rem) {
        .page-wrapper {
            padding-inline: 4rem;
        }

        .post {
            padding: 3rem;

            gap: 2rem;
        }

        .post__contents {
            padding: 0rem;
        }

        .post__title {
            font-size: var(--font-size-700);
        }

        .post__body-text {
            font-size: var(--font-size-500);
        }

        .tags {
            font-size: var(--font-size-500);
        }
    }

    @media screen and (width > 64rem) {
        .page-wrapper {
            padding-inline: 8rem;
        }

        .post {
            padding: 4rem;

            gap: 2.5rem;
        }

        .post__contents {
            gap: 2.5rem;
        }
    }
</style>
