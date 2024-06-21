function includeSidebar() {
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            sidebarPlaceholder.innerHTML = data;
            const script = document.createElement('script');
            script.src = 'sidebar.js'; // Ensure the sidebar script is executed
            document.body.appendChild(script);
        })
        .catch(error => console.error('Error loading sidebar:', error));
}
document.addEventListener('DOMContentLoaded', includeSidebar);
