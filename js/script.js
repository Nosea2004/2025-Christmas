// 添加页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// 为祷词卡片添加点击音效（可选）
document.querySelectorAll('.prayer-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(1.02)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// 添加更多雪花
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❅';
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.animationDuration = Math.random() * 5 + 10 + 's';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    
    document.querySelector('.snowflakes').appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 15000);
}

// 每300ms创建一片新雪花
setInterval(createSnowflake, 300);
