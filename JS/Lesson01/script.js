function saveNote() {
    var name = document.getElementById('notename').value;
    var content = document.getElementById('notecontent').value;
    if (content == '') {
        alert('enter valid note text');
    }
    else {
        if (name == 0) {
            alert('enter valid note text');
        }
        else { localStorage[name] = content; }
    }
}

function listLoad() { 
    var list = document.getElementById('notelist'); 
    /* получаем доступ к элементу - списку нашей веб - страницы*/ 
    for (var i in localStorage) 
        /* цикл для перебора каждого значения, сохраненного в localStorage, 
         при этом i, принимает значение идентификатора хранимых данных, т.е., в нашем  
         примере, переменная i содержит наименование записи*/ { 
        var a = document.createElement('a'); /* создаем новый html - */ 
        a.setAttribute('onclick', "loadNote('" + i + "'); return false;"); 
        /*определяем атрибут onclick, при клике, в нашем случае, вызовется функция  
        loadNote с параметром Наименования записи*/ 
        a.innerText = i; 
        /* задаем значение текста ссылки эквивалентным наименованию записи*/ 
        var element = document.createElement('li'); 
        /* создаем новый html - элемент, а именно пункт списка*/ 
        element.appendChild(a); 
        /* добавляем пункту списка дочерний элемент – ссылку*/ 
        list.appendChild(element); 
        /* добавляем списку дочерний элемент – пункт списка*/ 
    } 

} 
function loadNote(v) {
    document.getElementById('notecontent').value = localStorage[v];
    document.getElementById('notename').value = v;
}

function deleteNote() {
    var name = document.getElementById('notename').value;
    if (name != '') {
        localStorage.removeItem(name);
    }
    else {
        alert('note not found');
    }
}
