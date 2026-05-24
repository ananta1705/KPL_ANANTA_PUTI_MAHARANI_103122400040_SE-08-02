const hitungHarga = require('./hitung');

test('total 50000 dengan diskon 5000', () => {
    expect(hitungHarga(50000, 5000)).toBe(45000);
});

test('total 100000 dengan diskon 10000', () => {
    expect(hitungHarga(100000, 10000)).toBe(90000);
});

test('total 75000 dengan diskon 25000', () => {
    expect(hitungHarga(75000, 25000)).toBe(50000);
});