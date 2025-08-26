const cheerio = require("cheerio");

async function scrapeTiles(targetUrl) {
  const res = await fetch(targetUrl, {
    headers: { "User-Agent": "Mozilla/5.0 (NextJS Scraper)" }
  });
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  const html = await res.text();

  const $ = cheerio.load(html);
  const tiles = [];

  $(".cLibTile").each((_, el) => {
    const tile = $(el);
    const h2Text = tile.find("h2").text().trim();
    const link = tile.find("a").attr("href");

    if (h2Text && link) {
      tiles.push({
        h2: h2Text,
        href: new URL(link, targetUrl).toString()
      });
    }
  });

  return tiles;
}

module.exports = { scrapeTiles };
