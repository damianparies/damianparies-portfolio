import { useRef, useState } from "react";

const metrics = [
  { label: "Online Catalogue Growth", value: "30%+" },
  { label: "Social Followers Built", value: "500k+" },
  { label: "Total Views Generated", value: "50M+" },
  { label: "Brands Partnered With", value: "30+" },
  { label: "Theme Pages Built", value: "20+" },
];

export function IPhoneMockup() {
  const [hovered, setHovered] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ perspective: "1200px" }}
      className="flex justify-center items-center"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 280,
          height: 560,
          background:
            "radial-gradient(ellipse, rgba(56,140,255,0.18) 0%, transparent 70%)",
          filter: "blur(50px)",
          animation: "iPhoneGlow 4s ease-in-out infinite",
          transition: "opacity 0.6s ease",
          opacity: hovered ? 1 : 0.5,
        }}
      />

      {/* Phone shell */}
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: hovered
            ? "rotateX(2deg) rotateY(-3deg) scale(1.02)"
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          transition: "transform 0.6s cubic-bezier(0.34, 1.2, 0.64, 1)",
          animation: "iPhoneFloat 6s ease-in-out infinite",
          width: 260,
          height: 536,
          borderRadius: 44,
          background: "linear-gradient(145deg, #2a2a2e 0%, #1a1a1e 30%, #0d0d0f 100%)",
          boxShadow:
            "0 0 0 2px #1a1a1e, 0 0 0 4px #3a3a40, 0 0 0 5px #1a1a1e, inset 0 0 4px rgba(255,255,255,0.05), 0 30px 80px rgba(0,0,0,0.7), 0 10px 30px rgba(0,0,0,0.4), 0 0 60px rgba(56,140,255,0.08)",
          position: "relative",
        }}
      >
        {/* Side buttons */}
        <div style={{ position: "absolute", right: -3, top: 130, width: 3, height: 44, background: "linear-gradient(180deg,#3a3a40,#2a2a2e)", borderRadius: "0 2px 2px 0" }} />
        <div style={{ position: "absolute", left: -3, top: 100, width: 3, height: 28, background: "linear-gradient(180deg,#3a3a40,#2a2a2e)", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: -3, top: 142, width: 3, height: 48, background: "linear-gradient(180deg,#3a3a40,#2a2a2e)", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: -3, top: 200, width: 3, height: 48, background: "linear-gradient(180deg,#3a3a40,#2a2a2e)", borderRadius: "2px 0 0 2px" }} />

        {/* Glossy top reflection */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0, left: 16, right: 16,
            height: "48%",
            borderRadius: "44px 44px 0 0",
            background: "linear-gradient(180deg,rgba(255,255,255,0.08) 0%,rgba(255,255,255,0.02) 40%,transparent 100%)",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />

        {/* Screen */}
        <div
          style={{
            position: "absolute",
            top: 10, left: 10, right: 10, bottom: 10,
            borderRadius: 36,
            background: "#000",
            overflow: "hidden",
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: "absolute",
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
              width: 88,
              height: 24,
              background: "#000",
              borderRadius: 20,
              zIndex: 20,
              boxShadow: "0 0 0 1px rgba(255,255,255,0.05)",
            }}
          />

          {/* Screen content */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(165deg,#0a0a0f 0%,#0d0e14 50%,#0a0c12 100%)",
              padding: "46px 16px 20px",
              overflowY: "auto",
              scrollbarWidth: "none",
            }}
          >
            {/* Status bar */}
            <div
              style={{
                position: "absolute",
                top: 12,
                left: 28,
                right: 28,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: 10,
                fontWeight: 700,
                color: "rgba(255,255,255,0.75)",
                zIndex: 15,
              }}
            >
              <span>9:41</span>
              <span style={{ fontSize: 9, letterSpacing: 1 }}>●●●● WiFi</span>
            </div>

            {/* Header */}
            <div style={{ marginBottom: 8 }}>
              <p
                style={{
                  fontSize: 8,
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "rgba(100,160,255,0.7)",
                  marginBottom: 4,
                }}
              >
                Portfolio
              </p>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.15,
                  letterSpacing: -0.5,
                }}
              >
                Work{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg,#6aafff,#4d8bff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Highlights
                </span>
              </h2>
            </div>

            {/* Divider */}
            <div
              style={{
                height: 1,
                background:
                  "linear-gradient(90deg,transparent,rgba(100,160,255,0.15),transparent)",
                margin: "8px 0",
              }}
            />

            {/* Metric cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 13,
                    padding: "10px 12px",
                    position: "relative",
                    overflow: "hidden",
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: `opacity 0.5s ease ${i * 80 + 200}ms, transform 0.5s ease ${i * 80 + 200}ms`,
                  }}
                >
                  {/* Top sheen */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 1,
                      background:
                        "linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)",
                    }}
                  />
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      background: "linear-gradient(135deg,#6aafff,#4d8bff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      lineHeight: 1,
                      marginBottom: 3,
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {m.label}
                  </div>
                  {/* Subtle progress bar */}
                  <div
                    style={{
                      height: 2,
                      borderRadius: 2,
                      background: "rgba(255,255,255,0.04)",
                      marginTop: 7,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        borderRadius: 2,
                        background:
                          "linear-gradient(90deg,rgba(56,140,255,0.6),rgba(100,170,255,0.2))",
                        width: `${60 + i * 8}%`,
                        transition: `width 1.2s ease ${i * 100 + 400}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Home indicator */}
          <div
            style={{
              position: "absolute",
              bottom: 6,
              left: "50%",
              transform: "translateX(-50%)",
              width: 100,
              height: 4,
              background: "rgba(255,255,255,0.22)",
              borderRadius: 4,
              zIndex: 20,
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes iPhoneFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes iPhoneGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 0.75; transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
}
