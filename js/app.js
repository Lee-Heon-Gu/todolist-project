
document.getElementById('btnAdd').addEventListener('click', addList);
//btnAdd요소에 클릭 이벤트 추가
//클릭하면 addList함수 호출
function addList(){
    alert("추가!")
    // 태그 생성
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "btn-chk");
    // 입력 값
    var inputValue = document.querySelector('.text-basic').value;

    td2.append(inputValue);
    td1.appendChild(checkbox);
    tr.append(td1, td2);

    var listBody = document.getElementById("listBody");
    listBody.appendChild(tr);
};

document.getElementById("DeleteSel").addEventListener("click", deleteSel);
function deleteSel() {
    var listBody = document.getElementById("listBody");
    var allTr = document.querySelectorAll("#listBody>tr");
    var chkButton = document.getElementsByClassName("btn-chk");

    alert("선택 항목 삭제!");
    for (var i = (chkButton.length - 1); i >= 0; i--)
    {
        if (chkButton[i].checked === true)
        {
            listBody.removeChild(allTr[i]); 
        }
    }
};

document.getElementById("btnDelLast").addEventListener("click", delLastList);
function delLastList() {
    alert("마지막 항목 삭제!");
    var listBody = document.getElementById("listBody");
    listBody.removeChild(listBody.lastElementChild);
};

document.getElementById("btnDelAll").addEventListener("click", delAllList);
function delAllList() {
    alert("전체 삭제!");
    var listBody = document.getElementById("listBody");
    var allTr = document.querySelectorAll("#listBody>tr");
    for (var i = 0; i < allTr.length; i++)
    {
        listBody.removeChild(allTr[i]);
    }
};

// 한글 입력 후 enter시 두번 중복 실행 문제 해결.
document.querySelector(".text-basic").addEventListener("keypress", function(event) {
    if (event.code == 'Enter')
    {
        alert("Enter pressed!");
        addList();
    }
} );