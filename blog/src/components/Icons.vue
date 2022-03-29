<template>
    <svg v-if="name === 'book'" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.4" d="M8 7H16" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.4" d="M8 10.5H13" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'add'" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.4">
            <path d="M8 12H16" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 16V8" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'minus'" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.34" d="M8 12H16" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'edit'" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.0399 3.01976L8.15988 10.8998C7.85988 11.1998 7.55988 11.7898 7.49988 12.2198L7.06988 15.2298C6.90988 16.3198 7.67988 17.0798 8.76988 16.9298L11.7799 16.4998C12.1999 16.4398 12.7899 16.1398 13.0999 15.8398L20.9799 7.95976C22.3399 6.59976 22.9799 5.01976 20.9799 3.01976C18.9799 1.01976 17.3999 1.65976 16.0399 3.01976Z" stroke="#1890FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.4" d="M14.9102 4.1499C15.5802 6.5399 17.4502 8.4099 19.8502 9.0899" stroke="#1890FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'tick'" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'scissor'" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <g opacity="0.4">
            <path d="M8.41998 10.9001C9.48037 10.9001 10.34 10.0404 10.34 8.98006C10.34 7.91967 9.48037 7.06006 8.41998 7.06006C7.3596 7.06006 6.5 7.91967 6.5 8.98006C6.5 10.0404 7.3596 10.9001 8.41998 10.9001Z" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.41998 16.9401C9.48037 16.9401 10.34 16.0805 10.34 15.0201C10.34 13.9597 9.48037 13.1001 8.41998 13.1001C7.3596 13.1001 6.5 13.9597 6.5 15.0201C6.5 16.0805 7.3596 16.9401 8.41998 16.9401Z" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.5002 8.7002L10.1602 14.1902" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.5002 15.28L10.1602 9.79004" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
    </svg>
    <svg v-if="name === 'trush'" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <g opacity="0.4">
            <path d="M17.8996 9.04973C15.7196 8.82973 13.5196 8.71973 11.3296 8.71973C10.0296 8.71973 8.72961 8.78972 7.43961 8.91972L6.09961 9.04973" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.70898 8.38994L9.84898 7.52994C9.94898 6.90994 10.029 6.43994 11.139 6.43994H12.859C13.969 6.43994 14.049 6.92994 14.149 7.52994L14.289 8.37994" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.49 9.12988L16.06 15.7299C15.99 16.7599 15.93 17.5599 14.1 17.5599H9.89C8.06 17.5599 7.99999 16.7599 7.92999 15.7299L7.5 9.12988" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
    </svg>
    <svg v-if="name === 'search'" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.4" d="M18.9304 20.6898C19.4604 22.2898 20.6704 22.4498 21.6004 21.0498C22.4504 19.7698 21.8904 18.7198 20.3504 18.7198C19.2104 18.7098 18.5704 19.5998 18.9304 20.6898Z" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'upload'" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.4405 8.8999C20.0405 9.2099 21.5105 11.0599 21.5105 15.1099V15.2399C21.5105 19.7099 19.7205 21.4999 15.2505 21.4999H8.74047C4.27047 21.4999 2.48047 19.7099 2.48047 15.2399V15.1099C2.48047 11.0899 3.93047 9.2399 7.47047 8.9099" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <g opacity="0.4">
            <path d="M12 2V14.88" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.3504 12.6504L12.0004 16.0004L8.65039 12.6504" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
    </svg>
    <svg v-if="name === 'user'" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.4" d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'logout'" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.90039 7.56023C9.21039 3.96023 11.0604 2.49023 15.1104 2.49023H15.2404C19.7104 2.49023 21.5004 4.28023 21.5004 8.75023V15.2702C21.5004 19.7402 19.7104 21.5302 15.2404 21.5302H15.1104C11.0904 21.5302 9.24039 20.0802 8.91039 16.5402" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <g opacity="0.4">
            <path d="M14.9991 12H3.61914" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.85 8.65039L2.5 12.0004L5.85 15.3504" stroke="#1890FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
    </svg>
</template>

<script>
    export default {
        props: ['name','height']
    }
</script>

<style lang="scss" scoped>

</style>