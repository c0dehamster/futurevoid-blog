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
            <h2 class="post__title">{post.title}</h2>
        {/if}

        {#if post.image}
            <img src={post.image} alt="" class="post__image" />
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
