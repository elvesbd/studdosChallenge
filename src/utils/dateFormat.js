export function DateFormat(props) {
  /* const date = new Date(props),
  day = date.getDate().toString().padStart(2, '0'),
  month = (date.getMonth() + 1).toString().padStart(2, '0'),
  year = date.getFullYear()

  return `${day}/${month}/${year}`; */
  let date = new Date(props).toLocaleDateString();
  new date.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
  console.log(date)
};
