const image2Base64Preview = (file: File, maxWidth: number, callback: (base64Preview: string) => void) => {
  const reader = new FileReader();

  reader.onload = (event) => {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = maxWidth;
      canvas.height = (image.height / image.width) * maxWidth;
      context?.drawImage(image, 0, 0, canvas.width, canvas.height);
      const compressedDataURL = canvas.toDataURL('image/jpeg', 0.8);
      callback(compressedDataURL);
    };

    if (event.target && event.target.result) {
      image.src = event.target.result.toString();
    }
  };

  reader.readAsDataURL(file);
};

export { image2Base64Preview };
