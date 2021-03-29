class NavigationBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <link rel="shortcut logo" href="./images/p_logo.png" type="image/x-icon">
        <style>
            .dropdown:hover .dropdown-content {
                display: block;
                position: absolute;
            }
        </style>
      <header>
<!-- Navigation bar start -->
<div class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
                <a href="/">
                    <span class="sr-only">Peacemakr</span>
                    <img class="h-8 w-auto" src="./images/p_logo.png">
                </a>
            </div>
            <div class="-mr-2 -my-2 md:hidden">
                <button type="button"
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        id="main-menu" aria-haspopup="true"
                        onclick="navToggle();">
                    <span class="sr-only">Open main menu</span>
                    <!-- Heroicon name: menu -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
            <nav id="site-menu" class="hidden md:flex space-x-10">
                <a href="solutions.html" class="font-medium text-gray-500 hover:text-indigo-600">Solutions</a>
                <div class="dropdown cursor-pointer relative">
                    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                    <button class="engineers_button text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="true">
                        <span>Engineers</span>
                        <!--
                          Heroicon name: solid/chevron-down

                          Item active: "text-gray-600", Item inactive: "text-gray-400"
                        -->
                        <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <!-- Engineers drop down content -->
                    <div class="dropdown-content top-0 hidden z-10 -ml-4 mt-6 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">

                                <a href="engineers.html" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                    <!-- Heroicon name: outline/shield-check -->
                                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <div class="ml-4">
                                        <p class="text-base font-medium text-gray-900">
                                            SDKs
                                        </p>
                                        <p class="mt-1 text-sm text-gray-500">
                                            Your customers&#039; data will be safe and secure. Check out SDKs and hand on demo.
                                        </p>
                                    </div>
                                </a>

                                <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                    <!-- Heroicon name: outline/view-grid -->
                                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                    <div class="ml-4">
                                        <p class="text-base font-medium text-gray-900">
                                            FAQs
                                        </p>
                                        <p class="mt-1 text-sm text-gray-500">
                                            Answers to most common questions.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Resources -->
                <div class="dropdown cursor-pointer relative">
                    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                    <button class="resources_button text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="true">
                        <span>Resources</span>
                        <!--
                          Heroicon name: solid/chevron-down

                          Item active: "text-gray-600", Item inactive: "text-gray-400"
                        -->
                        <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <!-- Resources drop down content -->
                    <div class="dropdown-content top-0 hidden z-10 -ml-4 mt-6 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                <a href="media.html" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                    <!-- Heroicon name: outline/bookmark-alt -->
                                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <div class="ml-4">
                                        <p class="text-base font-medium text-gray-900">
                                            Media
                                        </p>
                                        <p class="mt-1 text-sm text-gray-500">
                                            Learn more about Peacemakr's contributions towards better security practices.
                                        </p>
                                    </div>
                                </a>

                                <a href="podcast.html" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                    <!-- Heroicon name: outline/calendar -->
                                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <div class="ml-4">
                                        <p class="text-base font-medium text-gray-900">
                                            Security and coffee
                                        </p>
                                        <p class="mt-1 text-sm text-gray-500">
                                            Lets talk Security.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="pricing.html" class="font-medium text-gray-500 hover:text-indigo-600">Pricing</a>
            </nav>
            <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a href="https://admin.peacemakr.io/#/login" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                    Sign in
                </a>
                <a href="https://admin.peacemakr.io/#/signup" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    Free sign up
                </a>
            </div>
        </div>
    </div>

    <!-- Mobile   -->
    <!--Mobile menu, show/hide based on mobile menu state.-->
            <div id="menu" class="z-50 absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden">
                <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div class="pt-5 pb-6 px-5">
                <div class="flex items-center justify-between">
                    <div>
                        <img class="h-8 w-auto" src="./images/p_logo.png">
                    </div>
                    <div class="-mr-2">
                        <button type="button"
                                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onclick="navToggle();">
                            <span class="sr-only">Close main menu</span>
                            <!-- Heroicon name: x -->
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="py-6 px-5 space-y-6">
                <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a href="solutions.html" class="text-base font-medium text-gray-900 hover:text-gray-700">
                        Solutions
                    </a>

                    <a href="engineers.html" class="text-base font-medium text-gray-900 hover:text-gray-700">
                        SDKs
                    </a>

                    <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                        FAQs
                    </a>

                    <a href="media.html" class="text-base font-medium text-gray-900 hover:text-gray-700">
                        Media
                    </a>

                    <a href="podcast.html" class="text-base font-medium text-gray-900 hover:text-gray-700">
                        Security Talks
                    </a>

                    <a href="pricing.html" class="text-base font-medium text-gray-900 hover:text-gray-700">
                        Pricing
                    </a>
                </div>
                <div>
                    <a href="https://admin.peacemakr.io/#/signup" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        Free sign up
                    </a>
                    <p class="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?
                        <a href="https://admin.peacemakr.io/#/login" class="text-indigo-600 hover:text-indigo-500">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Navigation bar end -->
      </header>
    `;
    }
}

customElements.define('navigation-bar', NavigationBar);

window.navToggle = function navToggle() {
    let btn = document.getElementById('main-menu');
    let nav = document.getElementById('menu');

    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
}

