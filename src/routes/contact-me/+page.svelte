<div class="page-wrapper">
    <main class="card">
        <ul class="contact-info">
            <li class="contact-info__list-item">
                <a href="#0" class="link">
                    <div class="link__bullet"></div>
                    <span class="link__label"> Me on Bluesky </span>
                </a>

                <p class="contact-info__description">
                    If you want to send me a DM, this is probably the right
                    place
                </p>
            </li>

            <li class="contact-info__list-item">
                <a href="#0" class="link">
                    <div class="link__bullet"></div>
                    <span class="link__label"> Me on Mastodon </span>
                </a>

                <p class="contact-info__description">
                    I promise I will be posting something there eventually
                </p>
            </li>

            <li class="contact-info__list-item">
                <a href="#0" class="link">
                    <div class="link__bullet"></div>
                    <span class="link__label"> Me on GitHub </span>
                </a>

                <p class="contact-info__description">
                    Not sure why anyone would want to see my GitHub as there is
                    nothing there, except for the source code of this very site
                </p>
            </li>
        </ul>
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

    .card {
        max-width: 64rem;

        padding-block: 3rem;
        padding-inline: 2rem;

        background-color: var(--color-neutral-800);
    }

    .contact-info {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .contact-info__list-item {
        display: grid;
        grid-template-columns: 2rem auto;
        grid-template-areas:
            "link link"
            "description description";
        gap: 0.5rem;
    }

    .link {
        grid-area: link;

        font-size: var(--font-size-500);
        font-weight: bold;

        justify-self: start;

        display: grid;
        grid-template-columns: 2rem auto;
        gap: 0.5rem;
    }

    .link__bullet {
        width: 1.25rem;
        aspect-ratio: 1;
        border-radius: 50%;
        place-self: center;

        background-color: var(--color-primary-400);
    }

    .link__label {
        position: relative;
    }

    /* An unnecessarily complex system of link highlighting */

    .link__label::before {
        content: "";
        position: absolute;

        inset-inline: 50%;
        inset-block-end: -0.25rem;

        border-bottom: 1px solid var(--color-neutral-200);

        transition: inset-inline 50ms ease-out;
    }

    .link:hover .link__label::before,
    .link:focus .link__label::before {
        inset-inline: 0rem;
    }

    .link:hover .link__bullet,
    .link:focus .link__bullet {
        background-color: var(--color-accent-400);
    }
    .contact-info__description {
        grid-area: description;
    }

    @media screen and (width > 40rem) {
        .page-wrapper {
            padding-inline: 6rem;
        }

        .card {
            padding: 3rem;
        }

        .contact-info__list-item {
            grid-template-areas:
                "link link"
                ". description";
            column-gap: 1rem;
        }

        .link {
            column-gap: 1rem;

            font-size: var(--font-size-600);
        }

        .link__bullet {
            width: 1.5rem;
        }
    }

    @media screen and (width > 64rem) {
        .page-wrapper {
            padding-inline: 8rem;
        }

        .card {
            padding: 4rem;
        }
    }
</style>
