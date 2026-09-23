import { NotionAPI } from 'notion-client'

export const notion = new NotionAPI({
  apiBaseUrl: process.env.NOTION_API_BASE_URL,
  // Notion rejects requests from Node's default fetch client without a User-Agent.
  ofetchOptions: {
    headers: {
      'User-Agent': 'WaynePortfolio/1.0 (+https://waynehsu.site)'
    }
  }
})
