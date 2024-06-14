// Função para adicionar uma nova tarefa
function addTask() {
    var input = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (input.value === "") {
      alert("Por favor, insira uma tarefa!");
      return;
    }
  
    // Cria um novo elemento de lista (li)
    var listItem = document.createElement("li");
    listItem.textContent = input.value;
  
    // Adiciona um evento de clique para marcar a tarefa como concluída
    listItem.addEventListener("click", function() {
      listItem.classList.toggle("completed");
      updateLocalStorage();
    });
  
    // Adiciona um botão de remoção à tarefa
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.addEventListener("click", function() {
      listItem.remove();
      updateLocalStorage();
    });
  
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
  
    // Limpa o campo de entrada
    input.value = "";
  
    // Atualiza o Local Storage
    updateLocalStorage();
  }
  
  // Função para atualizar o Local Storage com as tarefas
  function updateLocalStorage() {
    var tasks = [];
    var taskList = document.getElementById("taskList").getElementsByTagName("li");
  
    for (var i = 0; i < taskList.length; i++) {
      var taskText = taskList[i].textContent;
      var isCompleted = taskList[i].classList.contains("completed");
      tasks.push({ text: taskText, completed: isCompleted });
    }
  
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  // Função para carregar tarefas do Local Storage
  function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks"));
  
    if (tasks) {
      var taskList = document.getElementById("taskList");
  
      tasks.forEach(function(task) {
        var listItem = document.createElement("li");
        listItem.textContent = task.text;
  
        if (task.completed) {
          listItem.classList.add("completed");
        }
  
        listItem.addEventListener("click", function() {
          listItem.classList.toggle("completed");
          updateLocalStorage();
        });
  
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.addEventListener("click", function() {
          listItem.remove();
          updateLocalStorage();
        });
  
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
      });
    }
  }
  
  // Carrega as tarefas quando a página é carregada
  document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
  });
  