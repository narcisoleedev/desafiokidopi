const showData = (data, country) =>{
    const main = document.getElementById('main');
    let table = '';
    for (const key in data) {
        const item = data[key];
        table += `<div id=rowTable>
                  <div id="itemTable">${item['ProvinciaEstado']}</div>
                  <div id="itemTable">${item['Pais']}</div>
                  <div id="itemTable">${item['Confirmados']}</div>
                  <div id="itemTable">${item['Mortos']}</div>
                  </div>`;
    }
    const div = `<div id=table>
                 <div id=headerTable>
                    <div id="itemTable">Estado</div>
                    <div id="itemTable">Pais</div>
                    <div id="itemTable">Confirmados</div>
                    <div id="itemTable">Mortos</div>
                 </div>
                 ${table}<div>`;
    console.log(table);
    main.innerHTML = div;
    const footer = document.getElementById("footer");
    footer.innerText = `${new Date().toISOString()}-${country}`
}

const callApi = (data, country) =>{
    fetch(`http://localhost:8000/log.php`, {
        method: 'POST',
        body: JSON.stringify({ country: country }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const fetchApi = (country) => {
    fetch(`https://dev.kidopilabs.com.br/exercicio/covid.php?pais=${country}`,
    {method: "GET"})
    .then(response=>response.json())
    .then(data=>{
        showData(data, country);
        callApi(data, country);
    }).catch(e=>console.log(e));
}

document.addEventListener('DOMContentLoaded', ()=>{
    const countries = document.getElementById('select-countries');
    countries.addEventListener('change', (event)=>{
        const country = event.target.value;
        fetchApi(country);
    });
})






