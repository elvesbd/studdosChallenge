import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

export function DateFormat(props) {
  const date = new Date(props),
  day = date.getDate().toString().padStart(2, '0'),
  month = (date.getMonth() + 1).toString().padStart(2, '0'),
  year = date.getFullYear()

  return `${day}/${month}/${year}`;
};

