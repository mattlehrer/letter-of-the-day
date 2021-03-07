<script>
  import { onMount } from "svelte";

  onMount(() => {});

  const letters = {
    a: {
      letter: "a",
      images: [
        { src: "/images/a/apple.png", caption: "Apple" },
        { src: "/images/a/alligator.png", caption: "Alligator" },
        { src: "/images/a/ant.png", caption: "Ant" },
      ],
    },
  };

  const currentLetter = letters.a;
</script>

<style>
  header {
    font-size: 15rem;
  }
</style>

<div class="min-h-screen text-center bg-gray-100">
  <!-- Letter -->
  <header class="flex flex-col justify-center text-gray-700 ">
    {currentLetter.letter.toLocaleUpperCase()}
    {currentLetter.letter}
  </header>

  <!-- Example words -->
  <div class="flex flex-wrap justify-around space-x-6">
    <figure class="w-1/3">
      <img
        src="{currentLetter.images[0].src}"
        alt="{currentLetter.images[0].caption}"
      />
      <figcaption>{currentLetter.images[0].caption}</figcaption>
    </figure>
    <figure class="w-1/3">
      <img
        src="{currentLetter.images[1].src}"
        alt="{currentLetter.images[1].caption}"
      />
      <figcaption>{currentLetter.images[1].caption}</figcaption>
    </figure>
    <figure class="w-1/3">
      <img
        src="{currentLetter.images[2].src}"
        alt="{currentLetter.images[2].caption}"
      />
      <figcaption>{currentLetter.images[2].caption}</figcaption>
    </figure>
  </div>
</div>
