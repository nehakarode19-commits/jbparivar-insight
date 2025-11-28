import { FileText } from "lucide-react";

export interface TributeItem {
  id: string;
  title: string;
  type: "tribute" | "article" | "document";
  downloadUrl?: string;
}

export const tributesData: TributeItem[] = [
  // Tributes
  {
    id: "tribute-sunandaben-vohra",
    title: "Tribute by Sunandaben Vohra",
    type: "tribute",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Tribute-by-Sunandaben-Vohra.pdf",
  },
  {
    id: "tribute-sagarmal-jain",
    title: "Tribute by Sagarmal Jain (Hindi)",
    type: "tribute",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Tribute-by-Sagarmal-Jain-Hindi.pdf",
  },
  {
    id: "tribute-nalini-balbir",
    title: "Tribute by Nalini Balbir (France)",
    type: "tribute",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Tribute-by-Nalini-Balbir-France.pdf",
  },
  {
    id: "tribute-jayanti-joshi",
    title: "Tribute by Jayanti Joshi",
    type: "tribute",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Tribute-by-Jayanti-Joshi.pdf",
  },
  {
    id: "tribute-hinsha-virodha-sangh",
    title: "Tribute by Hinsha Virodha Sangh",
    type: "tribute",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Tribute-by-Hinsha-Virodha-Sangh.pdf",
  },
  {
    id: "tribute-kumarpal-desai-gujarati",
    title: "Tribute by Dr. Kumarpal Desai (Gujarati)",
    type: "tribute",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Tribute-by-Dr.-Kumarpal-Desai-Gujarati.pdf",
  },
  {
    id: "tribute-kumarpal-desai-english",
    title: "Tribute by Dr. Kumarpal Desai (English)",
    type: "tribute",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Tribute-by-Dr.-Kumarpal-Desai-English.pdf",
  },
  {
    id: "tribute-sharad-thakar",
    title: "Tribute by Dr. Sharad Thakar",
    type: "tribute",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Tribute-by-Dr.-Sharad-Thakar.pdf",
  },
  {
    id: "tribute-bhartiben-mehta",
    title: "Tribute by Bhartiben Mehta",
    type: "tribute",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Tribute-by-Bhartiben-Mehta.pdf",
  },
  {
    id: "tribute-acharya-ratnasundar-suriji",
    title: "Tribute by Acharya Shree Ratnasundar Suriji",
    type: "tribute",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Tribute-by-Acharya-Shree-Ratnasundar-Suriji.pdf",
  },
  {
    id: "tribute-acharya-jayghosh-suriji",
    title: "Tribute by Acharya Shree Jayghosh Suriji",
    type: "tribute",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Tribute-by-Acharya-Shree-Jayghosh-Suriji.pdf",
  },
  // Articles
  {
    id: "article-punya-vijayji-1",
    title: "Article on Shree Punya Vijayji by Shree Jambu Vijayji",
    type: "article",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Article-on-Shree-Punya-Vijayji-by-Shree-Jambu-Vijayji.pdf",
  },
  {
    id: "article-punya-vijayji-2",
    title: "Article on Shree Punya Vijayji by Shree Jambu Vijayji",
    type: "article",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Article-on-Shree-Punya-Vijayji-by-Shree-Jambu-Vijayji-1.pdf",
  },
  {
    id: "article-navkarmantra",
    title: "Article on Navkarmantra by Shree Jambu Vijayji",
    type: "article",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Article-on-Navkarmantra-by-Shree-Jambu-Vijayji.pdf",
  },
  {
    id: "article-sunri-magazine",
    title: "Article by Sunri Magazine",
    type: "article",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Article-by-Sunri-Magazine.pdf",
  },
  {
    id: "article-nandiyashaji",
    title: "Article by Shree Nandiyashaji",
    type: "article",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Article-by-Shree-Nandiyashaji.pdf",
  },
  {
    id: "article-jambu-vijayji-1",
    title: "Article by Shree Jambu Vijayji",
    type: "article",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Article-by-Shree-Jambu-Vijayji.pdf",
  },
  {
    id: "article-jambu-vijayji-2",
    title: "Article by Shree Jambu Vijayji",
    type: "article",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Article-by-Shree-Jambu-Vijayji-1.pdf",
  },
  {
    id: "article-pravin-shah",
    title: "Article by Pravin K Shah",
    type: "article",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Article-by-Pravin-K-Shah.pdf",
  },
  {
    id: "article-prameshchandra-gandhi",
    title: "Article by Prameshchandra Gandhi",
    type: "article",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Article-by-Prameshchandra-Gandhi.pdf",
  },
  {
    id: "article-hiroko-matsuoka",
    title: "Article by Hiroko Matsuoka (Japan)",
    type: "article",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Article-by-Hiroko-Matsuoka-Japan.pdf",
  },
  {
    id: "article-gunvant-shah",
    title: "Article by Gunvant Shah",
    type: "article",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Article-by-Gunvant-Shah.pdf",
  },
];

export const documentsData: TributeItem[] = [
  {
    id: "doc-works-list",
    title: "List of works by Shree Jambu Vijayji",
    type: "document",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/List-of-works-by-Shree-Jambu-Vijayji.pdf",
  },
  {
    id: "doc-article-work-list",
    title: "List of Article Work by Shree Jambu Vijayji",
    type: "document",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/List-of-Article-Work-by-Shree-Jambu-Vijayji.pdf",
  },
  {
    id: "doc-chaturmas-list",
    title: "List of Chaturmas",
    type: "document",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/List-of-Chaturmas.pdf",
  },
  {
    id: "doc-jayanti-joshi-letter",
    title: "Letter by Jayanti Joshi",
    type: "document",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Letter-by-Jayanti-Joshi.pdf",
  },
];
