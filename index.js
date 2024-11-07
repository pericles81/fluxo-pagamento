btn.addEventListener('click',()=>{
    
    const quantidadeMensal = prompt('quantas sensais serão?')
    const quantidadeIntercalada = prompt('quantas intercaladas serão?')

    const Sinal = Number(sinal.value)
    const Mensal = Number(mensal.value)
    const Intercalada = Number(intercalada.value)
    const Chaves = Number(chaves.value)
    const Financiamento = Number(financiamento.value)


    const finalMensal = quantidadeMensal * Mensal
    const finalIntercalada = quantidadeIntercalada * Intercalada

    const valorFinal = Sinal + finalMensal + finalIntercalada + Chaves + Financiamento

    res.innerHTML=`${valorFinal}`
})