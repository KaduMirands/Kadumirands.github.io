document.addEventListener('DOMContentLoaded', () => {
    const pBtn = document.querySelector('.p-btn');
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.content');
    const tabButtons = document.querySelector('.tab-buttons');
    const container = document.getElementById('container');

    let isContainerVisible = false;

    const toggleContainer = () => {
        if (isContainerVisible) {
            container.style.opacity = 0;
            container.style.transform = 'translateY(20px)';
            tabButtons.classList.remove('visible');
            pBtn.classList.remove('active'); // Remover a classe 'active'
            
            setTimeout(() => {
                container.style.display = 'none';
                pBtn.style.display = 'block';
            }, 500);
        } else {
            tabButtons.classList.add('visible');
            container.style.display = 'block';
            pBtn.classList.add('active'); // Adicionar a classe 'active'
            
            setTimeout(() => {
                container.style.opacity = 1; 
                container.style.transform = 'translateY(0)';
            }, 50);
        }
        
        isContainerVisible = !isContainerVisible;
    };

    const tabClicked = (tab) => {
        tabs.forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');

        contents.forEach(content => {
            content.classList.remove('show');
            content.style.display = 'none';
        });

        const contentId = tab.getAttribute('content-id');
        const content = document.getElementById(contentId);
        content.style.display = 'flex';
        setTimeout(() => content.classList.add('show'), 100);
    };

    pBtn.addEventListener('click', toggleContainer);
    tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));
});