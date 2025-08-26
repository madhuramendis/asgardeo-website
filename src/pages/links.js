import { scrapeTiles } from "../lib/scrape";

export async function getServerSideProps() {
  const target = "https://wso2.com/identity-and-access-management/developer/learning-resources/?product=identity-server";
  const tiles = await scrapeTiles(target);
  return { props: { tiles, target } };
}

export default function LinksPage({ tiles, target }) {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Learning Resources (WSO2 Identity Server)</h1>
      <p>
        Source:{" "}
        <a href={target} target="_blank" rel="noopener noreferrer">
          {target}
        </a>
      </p>

      {tiles.length === 0 && <p>No tiles found.</p>}

      <div>
        {tiles.map((tile, i) => (
          <div key={i} style={{ marginBottom: "16px" }}>
            <a href={tile.href} target="_blank" rel="noopener noreferrer">
              <h2>{tile.h2}</h2>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
