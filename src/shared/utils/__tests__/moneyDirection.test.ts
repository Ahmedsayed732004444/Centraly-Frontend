import { safeTxDirection, drawerTxDirection, ownerTxDirection } from '../moneyDirection';

describe('safeTxDirection', () => {
  it('treats Income as in', () => {
    expect(safeTxDirection('Income')).toBe('in');
  });

  it('treats Expense as out, regardless of a positive magnitude', () => {
    expect(safeTxDirection('Expense')).toBe('out');
  });
});

describe('drawerTxDirection', () => {
  it('treats 1 as in', () => {
    expect(drawerTxDirection(1)).toBe('in');
  });

  it('treats 2 as out', () => {
    expect(drawerTxDirection(2)).toBe('out');
  });
});

describe('ownerTxDirection', () => {
  it('treats OwnerDeposit (10) as in', () => {
    expect(ownerTxDirection(10)).toBe('in');
  });

  it('treats OwnerWithdrawal (11) as out', () => {
    expect(ownerTxDirection(11)).toBe('out');
  });
});
