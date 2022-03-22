const RULES = {
  MAX_PRODUCT_PRICE: 10000,
  MIN_PRODUCT_PRICE: 100,
  MAX_PRODUCT_AMOUNT: 20,
  MIN_PRODUCT_AMOUNT: 0,
  MINIMUM_CHARGE: 10,
  MAX_LENGTH_PRODUCT_NAME: 10,
};

const ERROR_MESSAGE = {
  PRODUCT_NAME_IS_DUPLICATED: '이미 존재하는 이름의 상품입니다.',
  PRODUCT_NAME_LENGTH: '상품명은 최대 10글자까지 입력해주세요.',
  PRODUCT_PRICE:
    '상품가격은 100원~10,000원 사이 여야 하며 10원으로 나누어 떨어져야 합니다.',
  PRODUCT_AMOUNT: '한 제품당 수량은 최대 20개 입니다.',
  TOO_MUCH_VENDING_MACHINE_CHANGE:
    '자판기가 보유할 수 있는 최대 금액은 100,000원 입니다.',
};

export { RULES, ERROR_MESSAGE };
