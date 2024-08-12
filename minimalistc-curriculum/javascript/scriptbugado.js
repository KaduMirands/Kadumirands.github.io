document.addEventListener('DOMContentLoaded', () => {
    const tabClicked = (tab) => {
        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');

        const contents = document.querySelectorAll('.content');
        contents.forEach(content => content.classList.remove('show'));

        const contentId = tab.getAttribute('content-id');
        const content = document.getElementById(contentId);
        content.classList.add('show');
    };

    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

    const currentActiveTab = document.querySelector('.tab-btn.active');
    tabClicked(currentActiveTab);
});