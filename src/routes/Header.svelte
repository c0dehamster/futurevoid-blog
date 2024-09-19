<script lang="ts">
    import iconMenu from "$lib/Images/icon-menu.svg"

    let expanded = false
</script>

<header class="header">
    <button class="toggle-nav" on:click={() => (expanded = !expanded)}>
        <img src={iconMenu} alt="menu" class="toggle-nav__icon" />
    </button>

    <!-- Temporary. TODO: make a proper logo -->
    <div class="logo">
        <a href="/" class="logo__link">FutureVoid</a>
    </div>

    <nav class="navigation {expanded ? 'navigation--expanded' : ''}">
        <div class="navigation__buffer">
            <ul class="navigation__list">
                <li
                    class="navigation__list-item navigation__list-item--featured"
                >
                    <a href="/" class="navigation__link">Home</a>
                </li>

                <li class="navigation__list-item">
                    <a href="/about" class="navigation__link">About</a>
                </li>

                <li class="navigation__list-item">
                    <a href="/contact-me" class="navigation__link">Contact me</a
                    >
                </li>

                <li class="navigation__list-item">
                    <a href="/rss-feed" class="navigation__link">RSS feed</a>
                </li>
            </ul>
        </div>
    </nav>
</header>

<style>
    .header {
        position: fixed;
        inset-block-start: 0;
        inset-inline: 0;
        z-index: 10;

        height: 4rem;

        padding-inline: 4rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: var(--color-primary-400);
    }

    .logo {
        font-size: var(--font-size-500);
        font-weight: bold;
    }

    .toggle-nav {
        position: relative;
        z-index: 100;

        background-color: transparent;

        /* Tablet-first */
        display: none;
    }

    .navigation__list {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 2.5rem;

        white-space: nowrap;
    }

    .navigation__link {
        position: relative;
    }

    .navigation__link::before {
        content: "";
        position: absolute;

        inset-inline: 50%;
        inset-block-end: -0.25rem;

        border-bottom: 1px solid var(--color-neutral-200);

        transition: inset-inline 50ms ease-out;
    }

    .navigation__link:hover::before,
    .navigation__link:focus::before {
        inset-inline: 0rem;
    }

    @media screen and (width < 40rem) {
        .header {
            padding-inline: 1.5rem;
        }
        .toggle-nav {
            display: inline-flex;
        }

        /* TODO: click outside the drawer to close it */

        /* Drawer */

        .navigation {
            position: fixed;
            inset-block: 0rem;
            inset-inline-start: 0rem;

            padding-block: 8rem;

            background-color: var(--color-primary-400);

            /* Slide in-and-out functionality */

            display: grid;
            grid-template-columns: 0fr;

            transition: grid-template-columns 150ms ease-out;
        }

        .navigation--expanded {
            grid-template-columns: 1fr;

            box-shadow: 0rem 0rem 4rem 4rem rgba(0 0 0 / 0.25);
        }

        .navigation__buffer {
            overflow: hidden;
        }

        .navigation__list {
            padding-inline: 3rem;

            flex-direction: column;
            align-items: start;
            gap: 3rem;
        }

        .navigation__list-item--featured {
            width: 100%;

            padding-block-end: 1.5rem;

            border-bottom: 1px solid var(--color-neutral-200);

            font-size: var(--font-size-500);
        }

        .navigation__link {
            font-weight: bold;
        }
    }

    @media screen and (width > 64rem) {
        .header {
            padding-inline: 8rem;
        }
    }
</style>
