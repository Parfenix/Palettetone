const cosl = document.querySelectorAll('col') // селектор из верстки , возможно  измениться название 
 

function generateRandomColor() {
    const hexCodes ='0123456789ABCDEF'
    let color  = ''
    for ( let i = 0 ; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() *  hexCodes.length)] //  код для получения  рандомных цвета 
    }
    return '#' + color
}

function getRandomColors(){
    cosl.forEach( (col ) => {
      col.style.background = generateRandomColor()  //  код для изменения  цвета на фоне     
    } )
    }
getRandomColors()
