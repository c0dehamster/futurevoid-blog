<script lang="ts">
    import Header from "./Header.svelte"
    import "./style.css"
</script>

<svelte:head>
    <title>FutureVoid only exists on the Wired</title>
</svelte:head>

<div class="app">
    <Header></Header>
    <slot></slot>
</div>
