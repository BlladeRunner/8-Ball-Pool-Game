import { useState, useEffect } from "react";

const useAssetsLoader = (assetFiles, onLoaded) => {
  const [assets, setAssets] = useState({});
  const [loadingCount, setLoadingCount] = useState(assetFiles.length);

  useEffect(() => {
    const loadedAssets = {};

    assetFiles.forEach((fileName) => {
      const img = new Image();
      img.src = `./src/assets/sprites/${fileName}`;
      img.onload = () => {
        setLoadingCount((prevCount) => prevCount - 1);
      };
      loadedAssets[fileName] = img;
    });

    setAssets(loadedAssets);
  }, [assetFiles]);

  useEffect(() => {
    if (loadingCount === 0) {
      onLoaded(assets);
    }
  }, [loadingCount, assets, onLoaded]);
};

const Assets = () => {
  const [loaded, setLoaded] = useState(false);
  const [sprites, setSprites] = useState({});

  useAssetsLoader(["spr_background.png", "spr_stick.png"], (assets) => {
    setSprites(assets);
    setLoaded(true);
  });

  if (!loaded) {
    return <div>Loading assets...</div>;
  }

  return (
    <div>
      <h1>Game Loaded</h1>
      <img src={sprites["spr_background.png"].src} alt="Background" />
      <img src={sprites["spr_stick.png"].src} alt="Stick" />
    </div>
  );
};

export default Assets;
