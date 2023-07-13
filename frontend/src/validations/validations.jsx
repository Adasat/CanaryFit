// Filtrar por Tipos de Ejercicio


export const filterTraining = (marcador) => {
    if(marcador === 'Pull, Push and Legs'){
        return 1
    }else if (marcador === 'Full Body'){
        return 2
    }else if (marcador === 'Upper and Lower Body'){
        return 3
    }else if (marcador === 'By Muscles'){
        return 4
    }else{
        return 5
    }
}