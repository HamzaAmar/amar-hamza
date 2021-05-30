const baseUrl = 'localhost:3000';
const date = new Date();

const myInfo = {
  title: `Hamza Miloud Amar`,
  description:
    'hello my name is hamza am a full stack javascript developer',
  feed_url: `${baseUrl}/rss.xml`,
  site_url: `${baseUrl}`,
  managingEditor: 'Hamza Miloud Amar`',
  webMaster: 'Hamza Miloud Amar`',
  copyright: `All rights reserved ${date.getFullYear()}, Florian Kapfenberger`,
  language: 'en',
  pubDate: new Date().toLocaleString(),
  ttl: '60',
};

export default myInfo;
