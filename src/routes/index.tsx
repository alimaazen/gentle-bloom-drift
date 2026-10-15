// ============= Full file contents =============

import { createFileRoute } from "@tanstack/react-router";
import branchTall from "@/assets/flowers-branch-tall.png";
import cornerLeft from "@/assets/flowers-corner-left.png";
import cornerRight from "@/assets/flowers-corner-right.png";
import meadow from "@/assets/flowers-meadow.png";
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
      <div className="floral-scene" role="img" aria-label="Pink peonies, roses and wildflowers framing a pale watercolor background">
        <img className="floral-paper" src={watercolorPaper} width={768} height={1536} alt="" />

        <div className="cluster cluster-corner-tl">
          <img src={cornerLeft} width={1024} height={1024} alt="" loading="lazy" />
        </div>
        <div className="cluster cluster-corner-tr">
          <img src={cornerRight} width={1024} height={1024} alt="" loading="lazy" />
        </div>
        <div className="cluster cluster-stem-left">
          <img src={branchTall} width={768} height={1536} alt="" loading="lazy" />
        </div>
        <div className="cluster cluster-stem-right">
          <img src={branchTall} width={768} height={1536} alt="" loading="lazy" />
        </div>
        <div className="cluster cluster-stem-mid">
          <img src={branchTall} width={768} height={1536} alt="" loading="lazy" />
        </div>
        <div className="cluster cluster-meadow-back">
          <img src={meadow} width={1536} height={768} alt="" loading="lazy" />
        </div>
        <div className="cluster cluster-meadow-front">
          <img src={meadow} width={1536} height={768} alt="" loading="lazy" />
        </div>
      </div>
    </main>
  );
}
