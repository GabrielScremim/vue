<template>
    <p>{{ valor }}</p>
    <button @click="incrementar">Incrementar</button>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue'

const valor = ref(0)

function incrementar() {
    valor.value++
}

// Ciclos de vida do componente
onBeforeMount(() => {
    console.log('Antes de montar')
})

onMounted(() => {
    console.log('Componente montado')
})

onBeforeUnmount(() => {
    console.log('Antes de desmontar')
})

onUnmounted(() => {
    console.log('Componente desmontado')
})

</script>
