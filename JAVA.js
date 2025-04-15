// 添加任务的函数
window.addTask = async function () {
    const taskNameInput = document.getElementById('task-name');
    const taskDescriptionInput = document.getElementById('task-description');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');

    const taskName = taskNameInput.value;
    const taskDescription = taskDescriptionInput.value;
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    if (taskName.trim()!== '') {
        try {
            const response = await fetch('http://localhost:8080/addTask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    taskName: taskName,
                    taskDescription: taskDescription,
                    startDate: startDate,
                    endDate: endDate
                })
            });

            if (response.ok) {
                const data = await response.json();
                console.log('任务添加成功:', data);

                const listItem = document.createElement('li');
                let taskInfo = `任务名称: ${taskName}`;
                if (taskDescription.trim()!== '') {
                    taskInfo += `, 任务介绍: ${taskDescription}`;
                }
                if (startDate!== '') {
                    taskInfo += `, 开始日期: ${startDate}`;
                }
                if (endDate!== '') {
                    taskInfo += `, 结束日期: ${endDate}`;
                }
                listItem.textContent = taskInfo;
                taskList.appendChild(listItem);

                // 清空输入框
                taskNameInput.value = '';
                taskDescriptionInput.value = '';
                startDateInput.value = '';
                endDateInput.value = '';

                // 关闭模态框
                modal.style.display = 'none';
            } else {
                console.error('任务添加失败:', response.statusText);
            }
        } catch (error) {
            console.error('网络错误:', error);
        }
    }
};