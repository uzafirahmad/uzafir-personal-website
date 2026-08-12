import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: 15,
          background: "#0f1b3d",
          color: "white",
          fontFamily: "Georgia, serif",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -12,
            bottom: 7,
            width: 80,
            height: 9,
            borderRadius: 999,
            background: "linear-gradient(90deg, #ff8c6c, #da4bfe 55%, #715cff)",
            transform: "rotate(-18deg)",
          }}
        />
        <span style={{ position: "relative", marginLeft: -2, marginTop: -3 }}>UA</span>
      </div>
    ),
    size,
  );
}
