export function DateFormat(props) {
  const regex = /[-/]/;
  const splitDate = props.split(regex);

  let date;

  if (splitDate.length === 3) {
    splitDate[2].length > splitDate[0].length
      ? date = new Date(splitDate[2], splitDate[1] - 1 , splitDate[0])
      : date = new Date(splitDate[0], splitDate[1] -1, splitDate[2])
  } else {
    date = new Date(props);
  }

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');// erro aqui
  const year = date.getFullYear();
  
  

  return `${day}/${month}/${year}`;  
};
