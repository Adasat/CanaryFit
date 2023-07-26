
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

export function formatDate(date) {
  const inputDate = new Date(date);
  const day = String(inputDate.getDate()).padStart(2, '0');
  const month = String(inputDate.getMonth() + 1).padStart(2, '0');
  const year = inputDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}

export function isUserLogged() {
    const user = localStorage.getItem('token')

    return user 

}