<script lang="ts">
    import { testPost } from "$lib/test-data/testPost"
    import type { Post } from "$lib/types/post"
    import PostTile from "./PostTile.svelte"

    let posts: Array<Post> | null = [testPost, testPost]
</script>

<div class="page-wrapper">
    <main class="main">
        <div class="tags">
            <div class="tags__header">
                <p class="tags__label">Tags:</p>
                <!-- TODO: implement the dropdown-->
            </div>
        </div>

        {#if posts}
            <ul class="feed">
                {#each posts as post}
                    <li class="feed__list-item">
                        <PostTile {post}></PostTile>
                    </li>
                {/each}
            </ul>
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

    .main {
        max-width: 40rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
    }

    .tags {
        padding-block: 1rem;
        padding-inline: 3rem;

        background-color: var(--color-neutral-800);
    }

    .feed {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    @media screen and (width > 40rem) {
        .page-wrapper {
            padding-inline: 8rem;
        }
    }
</style>
