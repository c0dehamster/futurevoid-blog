<script lang="ts">
    import { page } from "$app/stores"
    import { testPosts } from "$lib/test-data/testPost"
    import type { Post } from "$lib/types/post"

    let posts = testPosts
    let post: Post | undefined // Needs a proper fix

    $: {
        post = testPosts.find((post) => post.id === $page.params.postExpanded)
    }
</script>

<div class="page-wrapper">
    <main class="main">
        {#if post}
            <div class="post">
                {#if post.title}
                    <h1 class="post__title">{post.title}</h1>
                {/if}

                {#if post.image}
                    <img src={post.image} alt="" class="post__image" />
                {/if}

                {#if post.bodyText}
                    <p class="post__body-text">{post.bodyText}</p>
                {/if}
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

        display: flex;
        flex-direction: column;

        background-color: var(--color-neutral-800);
    }
</style>
