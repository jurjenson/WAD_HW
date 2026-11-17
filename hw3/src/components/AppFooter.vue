<template>
    <footer>
        <p>&copy; {{ year }} WAD Homework 3 - University of Tartu</p>
        <p>Contact: team@example.com</p>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
footer {
    background-color: #333;
    color: white;
    padding: 1.5rem;
    text.align: center;
    line-height: 1.6;
}
</style>