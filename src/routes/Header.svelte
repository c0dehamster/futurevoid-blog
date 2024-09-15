<script lang="ts"></script>

<header class="header">
    <nav class="navigation">
        <ul class="navigation__list">
            <li class="navigation__list-item">
                <a href="/" class="navigation__link">Home</a>
            </li>

            <li class="navigation__list-item">
                <a href="/about" class="navigation__link">About</a>
            </li>

            <li class="navigation__list-item">
                <a href="/contact-me" class="navigation__link">Contact me</a>
            </li>

            <li class="navigation__list-item">
                <a href="/rss-feed" class="navigation__link">RSS feed</a>
            </li>
        </ul>
    </nav>
</header>

<style>
    .header {
        position: fixed;
        inset-block-start: 0;
        inset-inline: 0;
        z-index: 10;

        height: 4rem;

        padding-inline: 8rem;

        display: flex;
        align-items: center;
        justify-content: end;

        background-color: var(--color-primary-400);
    }

    .navigation__list {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 2.5rem;
    }
</style>
