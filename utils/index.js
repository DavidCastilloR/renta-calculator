

export const toColon = (amount) => Intl.NumberFormat('es-CR', { style: 'currency', currency: 'CRC' }).format(amount);