import { useState, useEffect } from "react";
import { toBase64, verifyFile } from "../base64";



const useInputImage = (initialState ) => {
  const [data, setData] = useState(initialState);

  
  const handleonChange = async (e) => {
    // validasi file
    const { files } = e.target;

    if (files && files.length > 0) {
      if (verifyFile(files)) {
        const currentFile = files[0];
        const image = await toBase64(currentFile);
        setData((prev) => [...prev, { image }]);
      }
    }
  };

  return [data, handleonChange];
};

export default useInputImage;