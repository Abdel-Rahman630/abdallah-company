/**
 * A utility hook for client-side image optimization.
 */
export function useImageOptimize() {
  /**
   * Converts an image URL or Blob into a WebP data URL.
   */
  const convertToWebp = async (imageSource: string | Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Could not get canvas context"));
          return;
        }
        ctx.drawImage(img, 0, 0);
        // Convert to WebP with 0.8 quality
        resolve(canvas.toDataURL("image/webp", 0.8));
      };

      img.onerror = (err) => reject(err);

      if (typeof imageSource === "string") {
        img.src = imageSource;
      } else {
        img.src = URL.createObjectURL(imageSource);
      }
    });
  };

  /**
   * Minifies/resizes an image URL or Blob, maintaining aspect ratio.
   */
  const minifyImage = async (
    imageSource: string | Blob,
    maxWidth = 800,
    maxHeight = 800,
    quality = 0.7
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Could not get canvas context"));
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        // Return minified WebP
        resolve(canvas.toDataURL("image/webp", quality));
      };

      img.onerror = (err) => reject(err);

      if (typeof imageSource === "string") {
        img.src = imageSource;
      } else {
        img.src = URL.createObjectURL(imageSource);
      }
    });
  };

  return { convertToWebp, minifyImage };
}
