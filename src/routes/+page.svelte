<script lang="ts">
    import type { Post } from "$lib/types/post"
    import type { Tag } from "$lib/types/tag"

    import PostTile from "./PostTile.svelte"
    import Tags from "./Tags.svelte"

    import { tagsSelectedStore } from "./tagsSelected"

    export let data

    // Type assertion because Appwrite does not
    // provide type safety
    let posts = data.posts.documents as unknown as Array<Post>

    let tags: Array<Tag> = []

    // TODO: find a prettier/more concise way of making the list of tags

    posts.forEach((post) => {
        if (post.tags) {
            post.tags.forEach((tag) => {
                if (!tags.includes(tag)) {
                    tags.push(tag)
                }
            })
        }
    })

    let postsToShow: Array<Post> = []

    $: {
        if ($tagsSelectedStore.length > 0) {
            postsToShow = posts.filter((post) =>
                post.tags?.some((taggedWith: Tag) =>
                    $tagsSelectedStore.includes(taggedWith)
                )
            )
        } else {
            postsToShow = posts
        }
    }
</script>

<div class="page-wrapper">
    <main class="main">
        <Tags {tags}></Tags>

        {#if postsToShow}
            <ul class="feed">
                {#each postsToShow as post}
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
