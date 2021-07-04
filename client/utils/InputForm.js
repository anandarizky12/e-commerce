import { useStatee, useEffect } from "react";


export const useVarianInput = (initialState) => {
    const [data, setData] = useState(initialState);
  
    const handleImage = async (e) => {
      // validasi file
      const { files } = e.target;
  
      if (files && files.length > 0) {
        if (verifyFile(files)) {
          const currentFile = files[0];
          const base64Image = await toBase64(currentFile);
          const image = {
            image: base64Image,
          };
  
          setData((prev) => ({ ...prev, image }));
        }
      }
    };
  
    const handleChange = (e) => {
      const { id, value } = e.target;
      setData((prev) => ({ ...prev, [id]: value }));
    };
  
    return { data, handleImage, handleChange };
  };
  