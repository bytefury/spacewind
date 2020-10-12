<template>
  <div
    class="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-16 px-4 py-3 md:px-8 bg-gradient-to-r from-primary-500 to-primary-400"
  >
    <div class="flex items-center">
      <a
        href="/"
        class="float-none text-lg not-italic font-black tracking-wider text-white brand-main md:float-left font-base"
      >
        <img
          id="logo-white"
          src="https://demo.craterapp.com/assets/img/logo-white.png"
          alt="Crater Logo"
          class="hidden h-6 md:block"
        />
        <img
          id="logo-mobile"
          src="https://demo.craterapp.com/assets/img/crater-white-small.png"
          alt="Laraspace Logo"
          class="block h-8 md:hidden"
        />
      </a>
    </div>
    <ul class="float-right h-8 m-0 list-none" style="height: 36px">
      <li class="relative block float-left px-1 py-0 m-0">
        <a
          slot="activator"
          href="#"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          class="inline-block text-sm text-black bg-transparent bg-white rounded-sm avatar"
        >
          <img
            src="/default-avatar.jpg"
            alt="Avatar"
            class="rounded-sm"
            style="width: 36px"
          />
        </a>
      </li>
    </ul>
  </div>
</template>
