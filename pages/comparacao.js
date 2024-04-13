let country1 = '';
let country2 = '';

const populateSelect = (data) =>{
    const select1 = document.getElementById('select-countries-comp1');
    const select2 = document.getElementById('select-countries-comp2');
    let table = '<option></option>';
    for (const key in data) {
        const item = data[key];
        console.log(key);
        table += `<option value="${item}">${item}</option>`;
    }
    console.log(table);
    select1.innerHTML = table;
    select1.addEventListener('change', (event)=>{
        country1 = event.target.value;
        console.log(country1);
        checkSelect();
    })
    select2.addEventListener('change', (event)=>{
        country2 = event.target.value;
        checkSelect();
    })
    select2.innerHTML = table;
}

const checkSelect = ()=>{
    const main = document.getElementById('main');
    if(country1==='' && country2==='') return null;
    fetch(`https://dev.kidopilabs.com.br/exercicio/covid.php?pais=${country1}`,
        {method: "GET"})
        .then(response=>response.json())
        .then(data1=>{
            let con1 = 0;
            let mor1 = 0;
            for(const key in data1){
                const row = data1[key];
                con1 += parseInt(row['Confirmados']);
                mor1 += parseInt(row['Mortos']);
            }
            fetch(`https://dev.kidopilabs.com.br/exercicio/covid.php?pais=${country2}`,
            {method: "GET"})
            .then(response=>response.json())
            .then(data2=>{
                let con2 = 0;
                let mor2 = 0;
                for(const key in data2){
                    const row = data2[key];
                    con2 += parseInt(row['Confirmados']);
                    mor2 += parseInt(row['Mortos']);
                }
                const dif = (mor1/con1)-(mor2/con2);
                const text = `<p><b>${country1}</b> tem <b>${con1}</b> casos confirmados, e <b>${mor1}</b> mortes registradas, portanto com uma taxa de <b>${mor1/con1}</b> mortos/casos.</p>
                              <p><b>${country2}</b> tem <b>${con2}</b> casos confirmados, e <b>${mor2}</b> mortes registradas, portanto com uma taxa de <b>${mor2/con2}</b> mortos/casos.</p>
                              <p>Portanto a diferença de taxas entre <b>${country1}</b> e <b>${country2}</b> é de <b>${dif}</b></p>`;
                main.innerHTML = text;
            }).catch(e2=>console.log(e2));
        }).catch(e1=>console.log(e1));
}

document.addEventListener('DOMContentLoaded', ()=>{
        fetch(`https://dev.kidopilabs.com.br/exercicio/covid.php?listar_paises=1`,
        {method: "GET"})
        .then(response=>response.json())
        .then(data=>{
            populateSelect(data);
            console.log(data);
        }).catch(e=>console.log(e));

})






