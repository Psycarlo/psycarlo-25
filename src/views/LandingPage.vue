<template>
  <div
    class="gap-8 flex flex-col min-h-screen items-center justify-center bg-gradient-to-r from-yellow-500 to-red-500 via-brand-btc animate-gradient-xy"
  >
    <h1 class="font-bold text-3xl">Mistério da bit roubada</h1>
    <div
      class="rounded-md py-4 px-6 bg-slate-50 shadow-md bg-opacity-75 w-[400px] h-72"
      ref="target"
      :style="{
        transform: targetTransform,
        transition: 'transform 0.25s ease-out'
      }"
    >
      <p class="mb-4">Olá amigo(a),</p>
      <p>
        Algo horrível aconteceu! Preciso da tua ajuda. A minha bit foi
        roubada...
      </p>
    </div>
    <router-link
      :to="{ name: 'One' }"
      class="py-3 bg-green-500 rounded-md shadow-md w-44 text-center font-bold text-white transform transition duration-300 ease-in-out hover:-translate-y-0.5"
    >
      Começar
    </router-link>
    <div class="flex flex-col text-center">
      <p class="text-sm">Experiência para computador</p>
      <p class="text-xs">
        Usa um computador para obteres o melhor desta experiência
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useMouseInElement } from '@vueuse/core'
  import { computed, ref } from 'vue'

  const target = ref(null)

  const { elementX, elementY, isOutside, elementHeight, elementWidth } =
    useMouseInElement(target)

  const targetTransform = computed(() => {
    const MAX_ROTATION = 6
    const rX = (
      MAX_ROTATION / 2 -
      (elementY.value / elementHeight.value) * MAX_ROTATION
    ).toFixed(2) // handles x-axis
    const rY = (
      (elementX.value / elementWidth.value) * MAX_ROTATION -
      MAX_ROTATION / 2
    ).toFixed(2) // handles y-axis
    return isOutside.value
      ? ''
      : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
  })
</script>
