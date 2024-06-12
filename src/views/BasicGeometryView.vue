<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'

const refContent = ref(null)

let renderer, scene, camera, geometry, material, mesh

// 初始化渲染器
function initRenderer() {
  // 实例化渲染器
  renderer = new THREE.WebGLRenderer()

  // 设置宽和高
  renderer.setSize(600, 400)

  // 设置背景
  renderer.setClearColor(0x000000)

  // 添加到dom
  refContent.value?.appendChild(renderer.domElement)
}

// 初始化场景
function initScene() {
  scene = new THREE.Scene()
}

// 初始化正交投影照相机
function initOrthographicCamera() {
  // 实例化正交投影照相机
  camera = new THREE.OrthographicCamera(-3, 3, 2, -2, 1, 10)

  // 设置照相机的位置
  camera.position.set(3, 3, 3)

  // 设置照相机看向原点
  camera.lookAt(new THREE.Vector3(0, 0, 0))
}

// 初始化透视投影照相机
// function initPerspectiveCamera() {
//   camera = new THREE.PerspectiveCamera(80, 600 / 400, 1, 10)
//   camera.position.set(3, 2, 3)
//   // camera.position.set(1, 2, 5)
//   camera.lookAt(new THREE.Vector3(0, 0, 0))
// }

function initMesh() {
  drawAxes(scene)

  // geometry = createCube()
  // geometry = createBox()
  // geometry = createPlane()
  geometry = createSphere()
  // geometry = createCircle()
  // geometry = createCylinder()
  // geometry = createTetrahedron()
  // geometry = createOctahedron()

  material = new THREE.MeshBasicMaterial({
    color: 0xECB414,
    wireframe: true,
  })

  mesh = new THREE.Mesh(geometry, material)

  scene.add(mesh)
}

// 创建正方体
// function createCube() {
//   return new THREE.BoxGeometry(1, 1, 1)
// }

// 创建长方体
// function createBox() {
//   return new THREE.BoxGeometry(
//     1, // width: x轴方向的长度
//     2, // height: y轴方向的长度
//     3, // depth: z轴方向的长度
//     2, // widthSegments: x方向上水平分为几份
//     2, // heightSegments: y方向上水平分为几份
//     3, // depthSegments: z方向上水平分为几份
//   )
// }

// 创建平面
// function createPlane() {
//   return new THREE.PlaneGeometry(2, 2, 3, 3)
// }

// 创建球体
function createSphere() {
  return new THREE.SphereGeometry(
    2,
    18,
    16,
  )

  // return new THREE.SphereGeometry(
  //   2,
  //   8,
  //   6,
  //   Math.PI / 6,
  //   Math.PI / 3,
  // )

  // return new THREE.SphereGeometry(
  //   2,
  //   8,
  //   6,
  //   0,
  //   Math.PI * 2,
  //   Math.PI / 6,
  //   Math.PI / 3,
  // )
}

// 创建圆形
// function createCircle() {
//   return new THREE.CircleGeometry(
//     2,
//     18,
//     // 0,
//     // Math.PI,
//   )
// }

// 创建标准圆柱体
// function createCylinder() {
//   return new THREE.CylinderGeometry(
//     1,
//     1,
//     3,
//     18,
//     3,
//     true,
//   )
// }

// 创建正四面体
// function createTetrahedron() {
//   return new THREE.TetrahedronGeometry(1)
// }

// 创建正八面体
//

// 创建坐标系
function drawAxes() {
  const axesHelper = new THREE.AxesHelper(150)
  scene.add(axesHelper)

  // x-axis
  // const xMaterial = new THREE.LineBasicMaterial({
  //   color: 0xFF0000,
  // })

  // const xPoints = []
  // xPoints.push(new THREE.Vector3(0, 0, 0))
  // xPoints.push(new THREE.Vector3(3, 0, 0))

  // const xGeometry = new THREE.BufferGeometry().setFromPoints(xPoints)

  // const xAxis = new THREE.Line(xGeometry, xMaterial)
  // scene.add(xAxis)

  // y-axis
  // const yMaterial = new THREE.LineBasicMaterial({
  //   color: 0x00FF00,
  // })

  // const yPoints = []
  // yPoints.push(new THREE.Vector3(0, 0, 0))
  // yPoints.push(new THREE.Vector3(0, 3, 0))

  // const yGeometry = new THREE.BufferGeometry().setFromPoints(yPoints)

  // const yAxis = new THREE.Line(yGeometry, yMaterial)
  // scene.add(yAxis)

  // z-axis
  // const zMaterial = new THREE.LineBasicMaterial({ color: 0x0000FF })

  // const zPoints = []
  // zPoints.push(new THREE.Vector3(0, 0, 0))
  // zPoints.push(new THREE.Vector3(0, 0, 3))

  // const zGeometry = new THREE.BufferGeometry().setFromPoints(zPoints)

  // const zAxis = new THREE.Line(zGeometry, zMaterial)
  // scene.add(zAxis)
}

function beginRenderer() {
  renderer.render(scene, camera)
}

function init() {
  initRenderer()
  initScene()
  initOrthographicCamera()
  // initPerspectiveCamera()
  initMesh()
  beginRenderer()
}

onMounted(() => {
  init()
})
</script>

<template>
  <div ref="refContent" />
</template>
