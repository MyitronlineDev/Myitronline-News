import { useEffect } from "react";

export default function GoogleAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-8096635845270044"
      data-ad-slot="9990742215"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
