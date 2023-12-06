const node_for_click = document.getElementById('for_click')

function find_edit()
{
    document.all[11].innerHTML = "Kamalov"
    document.all[10].innerHTML = "Artur"
    document.all[12].innerHTML = "Nailevich"
    document.all[13].innerHTML = "male"
    document.all[15].innerHTML = "Irkutsk"


}

node_for_click.addEventListener("click",find_edit)