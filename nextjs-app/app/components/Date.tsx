import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function DateComponent({
  dateString,
}: {
  dateString: string | undefined;
}) {
  if (!dateString) {
    return null;
  }

  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), "dd 'de' LLLL 'de' yyyy", { locale: ptBR })}
    </time>
  );
}
