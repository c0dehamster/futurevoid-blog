<script lang="ts">
    import iconArrowOutward from "$lib/Images/icon-arrow-outward.svg"
</script>

<div class="page-wrapper">
    <main class="main">
        <div class="hero">
            <h1 class="title">
                <p class="title__welcome">Welcome to the blog of</p>
                <p class="title__highlighted">FutureVoid</p>
            </h1>

            <p class="hero__description">
                The place where I learn to make a website from scratch, because
                that's the easiest way to make a blog, right?
            </p>

            <a href="/" class="hero__cta">
                See my posts

                <img src={iconArrowOutward} alt="" class="hero__icon" />
            </a>
        </div>
    </main>
</div>

<style>
    .page-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: var(--color-neutral-800);
    }

    .main {
        min-height: 100vh;

        display: grid;
        place-items: center;

        /* Clear the header */
        padding-block-start: 8rem;
    }

    .hero {
        /* Hero section takes the entire page */
        min-height: 100%;

        padding-block-end: 3rem;
        padding-inline: 2rem;

        display: grid;
        justify-items: center;
        grid-template-rows: 3fr auto 2fr;
        grid-template-areas:
            "title"
            "description"
            "cta-button";
        gap: 2.5rem;

        text-align: center;
    }

    .title {
        grid-area: title;
        align-self: end;

        font-size: var(--font-size-600);
    }

    .title__welcome {
        white-space: nowrap;
    }

    .title__highlighted {
        font-size: var(--font-size-700);
    }

    .hero__description {
        grid-area: description;
        font-size: var(--font-size-400);

        text-wrap: balance;
    }

    .hero__cta {
        grid-area: cta-button;
        align-self: end;

        height: 3rem;
        padding-inline-start: 1.5rem;
        padding-inline-end: 1rem;

        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        color: var(--color-neutral-2100);
        background-color: var(--color-primary-400);
        border: 2px solid var(--color-neutral-200);
    }

    .hero__cta:hover,
    .hero__cta:focus {
        background-color: var(--color-accent-400);

        border-color: var(--color-neutral-100);
    }

    @media screen and (width > 32rem) {
        .main {
            padding-inline: 4rem;
            padding-block-end: 8rem;
        }

        .hero {
            min-height: auto;

            padding: 0rem;
        }

        .title__welcome {
            font-size: var(--font-size-700);
        }

        .title__highlighted {
            font-size: var(--font-size-800);
        }

        .hero__description {
            max-width: 32rem;
            font-size: var(--font-size-600);
        }

        .hero__cta {
            align-self: start;
            height: 4rem;

            gap: 1rem;

            padding-inline-start: 2rem;
            padding-inline-end: 1.5rem;

            font-size: var(--font-size-600);
        }

        .hero__icon {
            height: 2rem;
            aspect-ratio: 1;
        }
    }

    @media screen and (width > 48rem) {
        .title__welcome {
            font-size: var(--font-size-800);
        }
    }

    @media screen and (width > 64rem) {
        .hero {
            row-gap: 5rem;
            column-gap: 2.5rem;
            grid-template-rows: auto;
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
                "title title"
                "description cta-button";
        }

        .title {
            font-size: var(--font-size-900);
        }

        .hero__description {
            text-align: end;
        }

        .hero__cta {
            align-self: center;
        }
    }
</style>
