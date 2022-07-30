<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex items-center mt-3 mb-3">
    <div class="flex-shrink-0 w-10 h-10">
      <img
        class="w-full h-full rounded-full"
        src="https://thumbs.dreamstime.com/b/asteroid-belt-22278431.jpg"
        alt=""
      >
    </div>
    <div class="ml-2 text-sm">
      <p class="md:text-base text-gray-900 whitespace-pre">
        {{ props.name }}
      </p>
    </div>

    <!-- TODO -->
    <!-- <div class="ml-10 text-sm">
      <button>detail</button>
    </div> -->
  </div>
</template>
