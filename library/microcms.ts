// SDK利用準備
import { createClient, MicroCMSQueries } from "microcms-js-sdk";

const nu_client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN_NU,
  apiKey: import.meta.env.MICROCMS_API_KEY_NU,
});

// 型定義
export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};

export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};

// n-sportsの呼び出し
export const getNsports = async (queries?: MicroCMSQueries) => {
  return await nu_client.get<BlogResponse>({ endpoint: "golf", queries: { limit: 99 } });
};