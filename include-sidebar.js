document.addEventListener('DOMContentLoaded', function () {
    const sidebarContainer = document.getElementById('sidebar');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'sidebar.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            sidebarContainer.innerHTML = xhr.responseText;

            // Add the script from the sidebar.html content
            const script = document.createElement('script');
            script.innerHTML = `
                function toggleSidebar() {
                    const sidebar = document.querySelector('.sidebar');
                    sidebar.classList.toggle('collapsed');
                    sidebar.classList.toggle('expanded');
                    const texts = document.querySelectorAll('.menu-text, .dropdown-arrow, .toggle-label');
                    if (sidebar.classList.contains('expanded')) {
                        texts.forEach(text => {
                            text.style.opacity = '1';
                        });
                    } else {
                        texts.forEach(text => {
                            text.style.opacity = '0';
                        });
                    }
                }

                function toggleDropdown(event) {
                    event.preventDefault();
                    const parent = event.target.closest('a');
                    const dropdownMenu = parent.nextElementSibling;
                    const dropdownArrow = parent.querySelector('.dropdown-arrow');
                    if (dropdownMenu && !document.querySelector('.sidebar').classList.contains('collapsed')) {
                        dropdownMenu.classList.toggle('show');
                        if (dropdownArrow) {
                            dropdownArrow.classList.toggle('fa-chevron-down');
                            dropdownArrow.classList.toggle('fa-chevron-up');
                        }
                    }
                }

                const darkModeToggle = document.getElementById('dark-mode-toggle');
                darkModeToggle.addEventListener('change', () => {
                    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
                    document.body.classList.toggle('light-mode', !darkModeToggle.checked);
                });
            `;
            document.body.appendChild(script);
        }
    };
    xhr.send();
});
