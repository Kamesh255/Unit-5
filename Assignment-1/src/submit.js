function submit(value){
    const TitalHead = document.createElement('h2')
    const p = document.createElement('p')
    TitalHead.textContent = 'SUBMIT NOTE:'
    p.textContent = value;
    document.getElementById('submitNotes').append(TitalHead,p)
}
export{submit}