export function moneyFormatter (value) {
  return value.toLocaleString('pt-br',{
    style: 'currency',
    currency: 'BRL'
  });
}