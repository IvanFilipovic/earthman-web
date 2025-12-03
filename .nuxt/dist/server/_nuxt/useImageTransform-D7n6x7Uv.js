function useImageTransform() {
  const getTransformedUrl = (url, width, options = {}) => {
    if (!url) return "";
    const {
      quality = 85,
      format = "auto",
      fit = "scale-down",
      height
    } = options;
    const path = url.replace("https://static.earth-man.eu/", "");
    const params = [
      `width=${width}`,
      `quality=${quality}`,
      `format=${format}`,
      fit && `fit=${fit}`,
      height && `height=${height}`
    ].filter(Boolean).join(",");
    return `https://static.earth-man.eu/cdn-cgi/image/${params}/${path}`;
  };
  const getResponsiveImages = (url, widths = [400, 800, 1200], sizesAttr, options = {}) => {
    if (!url) return { srcset: "", sizes: "", src: "" };
    const srcset = widths.map((width) => `${getTransformedUrl(url, width, options)} ${width}w`).join(", ");
    const sizes = sizesAttr || "100vw";
    const src = getTransformedUrl(url, widths[widths.length - 1], options);
    return {
      srcset,
      sizes,
      src
    };
  };
  return {
    getTransformedUrl,
    getResponsiveImages
  };
}
export {
  useImageTransform as u
};
//# sourceMappingURL=useImageTransform-D7n6x7Uv.js.map
