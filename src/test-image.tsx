import React from 'react';

const TestImage = () => {
  const [imageSrc, setImageSrc] = React.useState<string>('');
  
  React.useEffect(() => {
    // Test different ways to load the image
    const tests = [
      () => import('../assets/profile.jpg').then(m => m.default),
      () => Promise.resolve('/profile.jpg'),
      () => Promise.resolve('./assets/profile.jpg'),
    ];

    // Try the first method
    tests[0]().then(src => {
      console.log('Image loaded with method 1:', src);
      setImageSrc(src);
    }).catch(err => {
      console.error('Method 1 failed:', err);
      // Try the second method
      tests[1]().then(src => {
        console.log('Image loaded with method 2:', src);
        setImageSrc(src);
      }).catch(err2 => {
        console.error('Method 2 failed:', err2);
      });
    });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Image Test</h3>
      {imageSrc ? (
        <div>
          <p>Image source: {imageSrc}</p>
          <img 
            src={imageSrc} 
            alt="Test" 
            style={{ width: '100px', height: '100px', border: '1px solid red' }}
            onError={(e) => console.error('Test image failed to load')}
            onLoad={() => console.log('Test image loaded successfully')}
          />
        </div>
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default TestImage;
