const getUserImage = () => {
  const imagesArr = [
    "https://ow-publisher-assets.s3.amazonaws.com/chat-app/avatars/001-snorlax.png",
    "https://ow-publisher-assets.s3.amazonaws.com/chat-app/avatars/002-psyduck.png",
    "https://ow-publisher-assets.s3.amazonaws.com/chat-app/avatars/003-pikachu.png",
    "https://ow-publisher-assets.s3.amazonaws.com/chat-app/avatars/004-jigglypuff.png",
    "https://ow-publisher-assets.s3.amazonaws.com/chat-app/avatars/005-bullbasaur.png",
  ];

  return imagesArr[Math.floor(Math.random() * imagesArr.length)];
};

export default { getUserImage };
