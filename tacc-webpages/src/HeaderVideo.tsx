"use client";

export default function VideoPlayer() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      style={{ width: "100%", borderRadius: '16px', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)', pointerEvents: 'none'}}
      aria-label={"The Automation Control Center | TACC Video"}
      
    >
      
      <source src="https://res.cloudinary.com/echwood/video/upload/v1768722643/tacc_eukisc.mp4" type="video/mp4" />
      <meta itemProp="thumbnail" content="/imgs/tacc.png"/>
      Your browser does not support the video tag.
    </video>
  );
}
