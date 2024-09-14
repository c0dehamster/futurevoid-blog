<script lang="ts">
    import { testPost } from "$lib/test-data/testPost"
    import type { Post } from "$lib/types/post"
    import PostTile from "./PostTile.svelte"

    let posts: Array<Post> | null = [testPost]
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
        padding-inline: 8rem;

        background-color: var(--color-neutral-400);
    }

    .main {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    .tags {
        padding-block: 1rem;
        padding-inline: 3rem;

        background-color: var(--color-neutral-800);
    }
</style>
