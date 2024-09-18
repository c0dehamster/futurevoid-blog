<script lang="ts">
    import type { Post } from "$lib/types/post"

    import iconOptions from "$lib/Images/icon-more-vertical.svg"

    export let post: Post
</script>

<div class="post">
    <button class="post__options">
        <img src={iconOptions} alt="options" />
    </button>

    <div class="post__contents">
        {#if post.title}
            <!-- TODO: human-readable ID generator -->
            <a href="/{post.id}" class="post__title">{post.title}</a>
        {/if}

        {#if post.imageUrl}
            <img src={post.imageUrl} alt="" class="post__image" />
        {/if}

        {#if post.bodyText}
            <p class="post__body-text">{post.bodyText}</p>
        {/if}
    </div>

    <div class="tags">
        <p class="tags__label">Tags:</p>

        {#if post.tags}
            <ul class="tags__list">
                {#each post.tags as tag, i}
                    <li class="tags__list-item">{tag}</li>
                {/each}
            </ul>
        {/if}
    </div>
</div>

<style>
    /* Mobile-first */
    .post {
        position: relative;

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
        max-width: 80%;
        text-wrap: balance;

        font-size: var(--font-size-600);
        font-weight: bold;
    }

    .post__title:hover,
    .post__title:focus {
        text-decoration: underline;
    }

    .post__body-text {
        color: var(--color-neutral-200);
    }

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
        .post {
            padding: 3rem;

            gap: 2rem;

            border: 1px solid var(--color-neutral-200);
        }

        .post__contents {
            padding: 0rem;
        }
    }

    @media screen and (width > 64rem) {
        .post {
            padding-inline: 4rem;
        }

        .post__contents {
            gap: 2rem;
        }

        .post__title {
            font-size: var(--font-size-700);
        }
    }
</style>
