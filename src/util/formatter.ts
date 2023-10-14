export function formatCep(cep: string) {
  if (cep.length > 5 && !cep.includes('-')) {
    return cep.slice(0, 5) + '-' + cep.slice(5);
  } else return cep;
}