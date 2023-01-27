function calc(){
    let num = document.getElementById('num')
    let resTab = document.getElementById('resTab')

    let n = Number(num.value)

    if(num.value.length == 0){
        alert('[ERRO] Digite um numero e tente novamente')
    } else {      
        let n = Number(num.value)
        resTab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = c
            resTab.appendChild(item)
        }
    }
}