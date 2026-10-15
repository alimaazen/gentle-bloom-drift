import { createFileRoute } from "@tanstack/react-router";
import bottomFlowers from "@/assets/flowers-bottom.png";
import rightFlowers from "@/assets/flowers-right.png";
import watercolorPaper from "@/assets/watercolor-paper.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flowers in the Breeze" },
      { name: "description", content: "A portrait watercolor garden of blush flowers gently swaying in the breeze." },
      { property: "og:title", content: "Flowers in the Breeze" },
      { property: "og:description", content: "A quiet watercolor floral background, animated by a gentle breeze." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="floral-page" aria-label="Watercolor flowers swaying gently in the wind">
      <div className="floral-scene" role="img" aria-label="Pink peonies, roses and hydrangeas framing a pale watercolor background">
        <img className="floral-paper" src={watercolorPaper} width={768} height={1536} alt="" />
        <div className="floral-branch floral-branch-right">
          <img src={rightFlowers} width={768} height={1536} alt="" />
        </div>
        <div className="floral-branch floral-branch-left">
          <img src={rightFlowers} width={768} height={1536} alt="" />
        </div>
        <div className="floral-bed floral-bed-back">
          <img src={bottomFlowers} width={1536} height={1024} alt="" />
        </div>
        <div className="floral-bed floral-bed-front">
          <img src={bottomFlowers} width={1536} height={1024} alt="" />
        </div>
      </div>
    </main>
  );
}
