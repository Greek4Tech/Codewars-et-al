function howMuchILoveYou(nPetals) {
    const phrase = [
      'I love you',
      'a little',
      'a lot',
      'passionately',
      'madly',
      'not at all'
    ];
    return phrase[(nPetals - 1) % phrase.length];
  }