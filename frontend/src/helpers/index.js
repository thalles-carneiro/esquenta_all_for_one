const validateInputs = (card) => {
  const { name, description, image, rare, attr1, attr2, attr3 } = card;
  const MAX_ATTR = 90;
  const MAX_TOTAL_ATTR = 210;

  if ([name, description, image, rare].some((input) => input.length === 0)) {
    return true;
  }

  if (
    [+attr1, +attr2, +attr3].some((input) => input > MAX_ATTR || input < 0)
  ) {
    return true;
  }

  if (((+attr1) + (+attr2) + (+attr3)) > MAX_TOTAL_ATTR) {
    return true;
  }

  return false;
};

const validateSuperTrunfo = (deck) => {
  return deck.some((card) => card.trunfo);
};

export {
  validateInputs,
  validateSuperTrunfo,
};
