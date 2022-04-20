function generateListing(answers) {
  return `
  
  ## ITEM TYPE
  ${answers.itemType},

  ## ITEM TYPE
  ${answers.itemDescription},

  ## FLAWS
  ${answers.flaws},

  // ## SIZE
  // ${answers.size},

  // ## PIP2PIT  
  // ${answers.pit2pit},

  // ## TEE LENGTH
  // ${answers.teeLength},

  // ## CLOSING TEXT
  // ${answers.closingText},

  // ## HASHTAGS
  // ${answers.hashTags},

  // ## PRICE
  // ${answers.price},
  
`;
}

module.exports = generateListing();
