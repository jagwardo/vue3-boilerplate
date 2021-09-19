<template>
    <!-- image search box -->
    <div class="pt-6 navbar-container">
        <div class="flex gap-4 justify-between items-center">
            <div class="bg-white rounded flex items-center w-2/3 p-3 shadow-sm">
                <input type="search" name="" id="" placeholder="search for posts" x-model="q" class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent rounded-lg">
                <button class="outline-none focus:outline-none">
                    <svg class="w-5 text-company-primary h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>                
            </div>
            <div class="flex items-center ml-5">
                <NotificationDropDown />
                <ChatDropDown />
            </div>
            <div class="flex flex-stretch items-center border-l pl-8">
                <p class="text-sm font-bold text-gray-500 mr-4">Hello, {{ Author.FirstName}}</p>
                <AccountDropDown v-bind:profile="Author.Profile" />
            </div>
        </div>
    </div>
</template>

<script>
import AccountDropDown from './dropdown/account-dropdown.vue'
import NotificationDropDown from './dropdown/notification-dropdown.vue'
import ChatDropDown from './dropdown/chat-dropdown.vue'

export default {
    name: "Navbar",
    components: {
        AccountDropDown,
        NotificationDropDown,
        ChatDropDown
    },
    data() {
        return {
            Author: {
                FirstName: "Salih",
                LastName: "Zain",
                Profile: "https://miro.medium.com/fit/c/512/512/2*4b7tChoTJ3c71hFbtJqPKg.jpeg"
            }
        }
    }
}
</script>