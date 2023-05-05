export const stories = [
    {
      id: 1,
      image: 'https://www.w3schools.com/howto/img_avatar.png',
      user: 'user1',
      videoSource: 'https://www.shutterstock.com/shutterstock/videos/1072143227/preview/stock-footage-carefree-young-vivacious-woman-dancing-alone-barefoot-on-sofa-in-modern-living-room-at-home-happy.webm',
    },
    {
      id: 2,
      image: 'https://www.w3schools.com/howto/img_avatar.png',
      user: 'user2',
      videoSource: 'https://www.shutterstock.com/shutterstock/videos/1072143227/preview/stock-footage-carefree-young-vivacious-woman-dancing-alone-barefoot-on-sofa-in-modern-living-room-at-home-happy.webm',
    },
    // Add more stories here
  ];
  
  export const getStoryById = (id) => {
    return stories.find((story) => story.id === id);
  };