import { GetServerSideProps } from "next";

export const runtime = 'edge';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const pages = [
    "",
    "/system-integrator",
    "/about",
    "/contact-us",
    "/courses",
    "/",

  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (p) => `
      <url><loc>https://automationcc.com${p}</loc></url>
    `
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
