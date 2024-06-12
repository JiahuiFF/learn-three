<script setup>
import { onMounted, ref } from 'vue'

// 导入Three.js
import * as THREE from 'three'

const refContent = ref(null)

onMounted(() => {
  // 创建场景
  const scene = new THREE.Scene()

  // 初始化相机
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  )

  // 初始化渲染器
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setAnimationLoop(animate)

  // 使用ref作为Three.js场景的挂载点
  refContent.value && refContent.value.appendChild(renderer.domElement)

  // 初始化立方体模型
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0x00FF00 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  camera.position.z = 5

  function animate() {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }
})
</script>

<template>
  <main>
    <div ref="refContent" />
  </main>
</template>
