import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaTimes, FaCheck } from 'react-icons/fa';

const ProductSwipe = () => {
    const products = [
      { id: 1, name: 'Product 1', image: 'https://picsum.photos/360/640?random=1' },
      { id: 2, name: 'Product 2', image: 'https://picsum.photos/360/640?random=2' },
      { id: 3, name: 'Product 3', image: 'https://picsum.photos/360/640?random=3' },
      { id: 4, name: 'Product 4', image: 'https://picsum.photos/360/640?random=4' },
      { id: 5, name: 'Product 5', image: 'https://picsum.photos/360/640?random=5' },
    ];
  
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [imageTranslation, setImageTranslation] = useState(0);
  const [animationCompleted, setAnimationCompleted] = useState(true);

  const imageRef = useRef(null);
  const [imageSize, setImageSize] = useState({
    width: '90%',
    height: 'auto',
  });

  const topBarHeight = 40; // You can adjust this value based on the height of your top bar
  const maxImageWidth = 360; // Adjust this value based on the maximum desired width for the image

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const availableHeight = windowHeight - topBarHeight;
      const aspectRatio = 360 / 640; // Replace these values with your image's aspect ratio (width / height)
  
      let maxWidth = windowWidth <= 480 ? '100%' : '90%';
      const maxHeight = `${availableHeight}px`;
  
      const calculatedWidth = availableHeight * aspectRatio;
      const calculatedMaxWidth = parseInt(maxWidth, 10) * windowWidth / 100;
  
      if (calculatedWidth > calculatedMaxWidth) {
        maxWidth = `${calculatedMaxWidth}px`;
      } else {
        maxWidth = `${calculatedWidth}px`;
      }
  
      setImageSize({
        width: maxWidth,
        height: maxHeight,
      });
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageStyle = (isCurrent) => ({
    width: isCurrent ? imageSize.width : imageSize.width,
    height: isCurrent ? imageSize.height : imageSize.height,
    objectFit: 'cover',
    border: '5px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    transform: isCurrent
      ? `translateX(${imageTranslation.x}px) translateY(${imageTranslation.y}px) rotate(${imageTranslation.rotation}deg)`
      : 'translateX(0) translateY(0) rotate(0)',
    transition: swipeDirection ? 'transform 0.5s' : 'none',
    zIndex: isCurrent ? 2 : 1,
  });
  
  const buttonStyle = (color) => ({
    backgroundColor: 'white',
    color: color,
    padding: '12px',
    margin: '10px',
    borderRadius: '50%',
    border: `2px solid ${color}`,
    fontSize: '24px',
    cursor: 'pointer',
    transition: swipeDirection ? 'transform 0.5s' : 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });


  const buttonClickStyle = {
    transform: 'scale(0.9)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  const [rejectStyle, setRejectStyle] = useState(buttonStyle('red'));
  const [acceptStyle, setAcceptStyle] = useState(buttonStyle('green'));

  const handleMouseDown = (color, setButtonStyle) => {
    setButtonStyle({ ...buttonStyle(color), ...buttonClickStyle });
  };

  const handleMouseUp = (color, setButtonStyle) => {
    setButtonStyle(buttonStyle(color));
  };

  const handleSwipe = (direction) => {
    setSwipeDirection(direction);
    setAnimationCompleted(false);
  
    const translationAmount = direction === 'left' ? -1000 : 1000;
    const rotationAmount = direction === 'left' ? -90 : 90;
    setImageTranslation({ x: translationAmount, y: 0, rotation: rotationAmount });

    setTimeout(() => {
      if (currentProductIndex < products.length - 1) {
        setCurrentProductIndex(currentProductIndex + 1);
      }
      setSwipeDirection(null);
      setImageTranslation({ x: 0, y: 0, rotation: 0 });
      setAnimationCompleted(true);
    }, 500);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    preventDefaultTouchmoveEvent: true,
  });

  
  return (
    <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div {...swipeHandlers} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', paddingTop: `${topBarHeight}px` }}>
        <div style={{ width: imageSize.width, height: imageSize.height, position: 'relative' }}> {/* Add this container div */}
          <img
            ref={imageRef}
            src={products[currentProductIndex].image}
            alt={products[currentProductIndex].name}
            style={imageStyle(true)}
          />
          {currentProductIndex < products.length - 1 && (
            <img
              src={products[currentProductIndex + 1].image}
              alt={products[currentProductIndex + 1].name}
              style={imageStyle(false)}
            />
          )}
        </div>
      </div>
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 60,
        right: 0,
        left: 0,
        zIndex: 1,
      }}
    >
    <button
        style={rejectStyle}
        onMouseDown={() => handleMouseDown('red', setRejectStyle)}
        onMouseUp={() => handleMouseUp('red', setRejectStyle)}
        onMouseLeave={() => handleMouseUp('red', setRejectStyle)}
        onClick={() => handleSwipe('left')} // Updated
    >
        <FaTimes size={24} /> {/* Cross symbol */}
    </button>
    <button
        style={acceptStyle}
        onMouseDown={() => handleMouseDown('green', setAcceptStyle)}
        onMouseUp={() => handleMouseUp('green', setAcceptStyle)}
        onMouseLeave={() => handleMouseUp('green', setAcceptStyle)}
        onClick={() => handleSwipe('right')} // Updated
    >
        <FaCheck size={24} /> {/* Tick symbol */}
    </button>
    </div>
  </div>
);
};

export default ProductSwipe;

