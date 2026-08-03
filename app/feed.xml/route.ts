import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.abudyog.in';
  const baseUrl = rawBaseUrl.replace(/^https?:\/\/(www\.)?abudyog\.in/, 'https://www.abudyog.in');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AB Udyog Pvt. Ltd. — Corporate &amp; Industrial Feed Updates</title>
    <link>${baseUrl}</link>
    <description>Latest product launches, physical refinery milestones, and high-protein DORB animal feed updates from Eastern India's leading solvent extraction complex.</description>
    <language>en-us</language>
    <copyright>© ${new Date().getFullYear()} AB Udyog Pvt. Ltd. All rights reserved.</copyright>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <item>
      <title>Magik DORB Super Fine Animal Feed Showcase Launched</title>
      <link>${baseUrl}/products/magik-dorb</link>
      <guid>${baseUrl}/products/magik-dorb</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <description>AB Udyog announces the official launch of Magik DORB — micro-milled, high-protein de-oiled rice bran formulated for aquaculture, poultry, cattle, and swine nutrition.</description>
    </item>
    <item>
      <title>AB Health Consumer Edible Oils Brand Portfolio</title>
      <link>${baseUrl}/products/ab-health</link>
      <guid>${baseUrl}/products/ab-health</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <description>Physically refined Rice Bran Oil and Refined Soyabean Oil fortified with Vitamins A &amp; D and high natural Oryzanol for active family wellness.</description>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
