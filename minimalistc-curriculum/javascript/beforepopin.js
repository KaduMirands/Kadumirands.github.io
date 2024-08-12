document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.content');

    const tabClicked = (tab) => {
        tabs.forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');

        contents.forEach(content => content.classList.remove('show'));

        const contentId = tab.getAttribute('content-id');
        const content = document.getElementById(contentId);
        content.classList.add('show');
    };

    tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

    const currentActiveTab = document.querySelector('.tab-btn.active');
    tabClicked(currentActiveTab);
});