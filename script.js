let user_name = 'Enzo'
let user_password = '123'

function clicou_login() {

    let user_name_text = window.document.getElementById('nome')
    let user_name_password_html = window.document.getElementById('senha')


    if (user_name_text.value.length == 0 || user_name_password_html.value.length == 0) {
        alert("Verifique os dados e tente novamente")
    } else {
        if (user_name_text.value == user_name && user_name_password_html.value == user_password) {
            window.location.href = 'account.html'
        } else {
            console.log('errado')
            alert("Verifique os dados e tente novamente...")
        }
    }
}


function account() {
    let boas_vindas= window.document.getElementById('boas-vindas')
    boas_vindas.innerHTML = `BEM VINDO <strong id='boas-vindas-name'>${user_name}</strong>`
    
}

function calcular_tmb() {
    let numPeso = window.document.getElementById('Peso')
    let numAltura = window.document.getElementById('altura')
    let numIdade = window.document.getElementById('Idade')
    let rad_sex_tmb = window.document.getElementsByName('radsextmb')
    let rad_at_fisica = window.document.getElementsByName('radatfisica')
    let tmb;

    if (numPeso.value.length == 0 || numAltura.value.length == 0 || numIdade.value.length == 0) {
        alert('Verifique os dados e tente novamente')
    } else {
        if (rad_sex_tmb[0].checked) {
            tmb = (( 13.7516 * numPeso.value) + ( 5.0033 * numAltura.value) - ( 6.755 * numIdade.value) + 66.473).toFixed(2)
            console.log(tmb)
        } else if (rad_sex_tmb[1].checked) {
            tmb = (( 9.5634 * numPeso.value) + ( 1.8496 * numAltura.value) - ( 4.6756 * numIdade.value ) + 655.0955).toFixed(2)
            console.log(tmb)
        }

        let resposta_kcal = window.document.getElementById('resposta_script-tmb')

    let resposta_p = window.document.getElementById('mensagem_script-tmb')


    resposta_p.style.fontSize = '30px'
        resposta_p.style.color = 'var(--cor3)'
        resposta_p.style.fontWeight = '600'
        resposta_p.innerHTML = 'Sua Taxa Metabolica é:'

        resposta_kcal.style.backgroundColor = 'var(--cor4)'

    if (rad_at_fisica[0].checked) {
        resposta_kcal.innerHTML = `${tmb}Kcal`
    } else if (rad_at_fisica[1].checked) {
        resposta_kcal.innerHTML = `${(tmb*1.2).toFixed(2)}Kcal`
    } else if (rad_at_fisica[2].checked) {
        resposta_kcal.innerHTML = `${(tmb*1.375).toFixed(2)}Kcal`
    } else if (rad_at_fisica[3].checked) {
        resposta_kcal.innerHTML = `${(tmb*1.55).toFixed(2)}Kcal`
    } else if (rad_at_fisica[4].checked) {
        resposta_kcal.innerHTML = `${(tmb*1.725).toFixed(2)}Kcal`
    } else if (rad_at_fisica[5].checked) {
        resposta_kcal.innerHTML = `${(tmb*1.9).toFixed(2)}Kcal`
    }

    }
}
