const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrapeSite(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    // Extract content
    const content = {
      title: $('title').text(),
      headings: [],
      paragraphs: [],
      images: [],
      links: []
    };
    
    // Get all headings
    $('h1, h2, h3, h4, h5, h6').each((i, el) => {
      content.headings.push({
        level: el.tagName,
        text: $(el).text()
      });
    });
    
    // Get all paragraphs
    $('p').each((i, el) => {
      content.paragraphs.push($(el).text());
    });
    
    // Get all images
    $('img').each((i, el) => {
      content.images.push({
        src: $(el).attr('src'),
        alt: $(el).attr('alt')
      });
    });
    
    // Save to JSON
    fs.writeFileSync('scraped-content.json', JSON.stringify(content, null, 2));
    console.log('Content scraped and saved to scraped-content.json');
    
  } catch (error) {
    console.error('Error scraping site:', error);
  }
}

// Usage
scrapeSite('https://unit.cloud');