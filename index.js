// 获取模态框、打开按钮、关闭按钮和任务列表
const modal = document.getElementById('myModal');
const newTodoBtn = document.getElementById('NewTodo');
const closeBtn = document.querySelector('.close');
const taskList = document.getElementById('tasks');

// 显示模态框
if (newTodoBtn) {
    newTodoBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
}

// 关闭模态框
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// 点击模态框外区域关闭模态框
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

