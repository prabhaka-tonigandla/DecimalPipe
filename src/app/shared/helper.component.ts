import { accounting } from 'accounting';

export function formatCurrency(value) {
    return accounting.formatMoney(value, '', 0, ' ', '.');
}

export function unformatCurrency(value) {
    return accounting.unformat(value);
}