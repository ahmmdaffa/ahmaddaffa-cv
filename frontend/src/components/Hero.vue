<script setup>
import Fotoprofil from '@/assets/profil.jpg'
</script>

<template>
  <section
    id="profil"
    class="w-full px-6 py-20 flex flex-col md:flex-row items-center bg-gray-800 text-white"
  >
    <div class="md:w-1/2 mb-10 md:mb-0 px-6 md:px-16">
      <h1
        class="text-5xl font-bold mb-4 animate-slide-in-left"
        style="animation-delay: 200ms"
      >
        Hallo, Saya <span class="text-blue-400">Ahmad Daffa</span>
      </h1>
      <p class="text-xl mb-8 animate-slide-in-left" style="animation-delay: 400ms">
        Pengembang web masa depan dengan semangat tinggi dalam UI/UX dan pengalaman pengguna
        digital.
      </p>
      <a
        href="#kontak"
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block animate-slide-in-left"
        style="animation-delay: 600ms"
      >
        Hubungi Saya
      </a>
    </div>
    <div class="md:w-1/2 flex justify-center animate-slide-in-right">
      <img
        :src="Fotoprofil"
        alt="Foto Profil"
        class="w-80 h-80 rounded-full object-cover shadow-2xl ring-4 ring-grey-500 transition duration-300"
      />
    </div>
  </section>
</template>
