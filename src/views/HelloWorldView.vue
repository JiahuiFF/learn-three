<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'

let camera, renderer, scene, geometry, material, mesh
const refContent = ref(null)

// 初始化渲染器
function initRenderer() {
  // 实例化渲染器
  renderer = new THREE.WebGLRenderer()

  // 设置宽和高
  renderer.setSize(window.innerWidth, window.innerHeight)

  // 设置背景
  renderer.setClearColor(0xFFFFFF)

  // 添加到DOM
  refContent.value?.appendChild(renderer.domElement)
}

// 初始化场景
function initScene() {
  // 实例化场景
  scene = new THREE.Scene()
}

// 创建模型
function initMesh() {
  // 创建几何体
  geometry = new THREE.BoxGeometry(2, 2, 2)

  // 创建材质
  material = new THREE.MeshNormalMaterial()

  // 创建网格
  mesh = new THREE.Mesh(geometry, material)

  // 将网格添加到场景
  scene.add(mesh)
}

// 初始化相机
function initCamera() {
  // 实例化相机
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    200,
  )
  camera.position.set(0, 0, 15)
}

function animate() {
  requestAnimationFrame(animate)

  mesh.rotation.x += 0.01
  mesh.rotation.y += 0.01

  renderer.render(scene, camera)
}

function init() {
  initRenderer()
  initScene()
  initCamera()
  initMesh()
  animate()
}

onMounted(() => {
  init()
})
</script>

<template>
  <div ref="refContent" />
</template>
