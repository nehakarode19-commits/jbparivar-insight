import book1 from "@/assets/books/book-1.jpg";
import book2 from "@/assets/books/book-2.jpg";
import book3 from "@/assets/books/book-3.jpg";
import book4 from "@/assets/books/book-4.jpg";

export interface Book {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  author?: string;
  publisher?: string;
  productId?: string;
  downloadUrl?: string;
}

export const booksData: Book[] = [
  {
    id: "agam-02-ang-02-sutrakrutang-sutra",
    title: "Agam 02 Ang 02 Sutrakrutang Sutra",
    category: "Jain Agam",
    description: "Agam 02 Ang 02 Sutrakrutang Sutra - An important canonical text of Jain scripture, carefully edited and annotated.",
    image: book1,
    author: "Jambu Vijayaji",
    publisher: "Shri Mahavira Jaina Vidyalaya",
    productId: "244",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Agam-02-Ang-02-Sutrakrutang-Sutra.pdf",
  },
  {
    id: "agam-03-ang-03-sthananga-sutra-part-01",
    title: "Agam 03 Ang 03 Sthananga Sutra Part 01",
    category: "Jain Agam",
    description: "Agam 03 Ang 03 Sthananga Sutra Part 01 - First part of the Sthananga Sutra, a foundational Jain canonical text.",
    image: book2,
    author: "Jambu Vijayaji",
    publisher: "Shri Mahavira Jaina Vidyalaya",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Agam-03-Ang-03-Sthananga-Sutra-Part-01.pdf",
  },
  {
    id: "agam-03-ang-03-sthananga-sutra-part-02",
    title: "Agam 03 Ang 03 Sthananga Sutra Part 02",
    category: "Jain Agam",
    description: "Agam 03 Ang 03 Sthananga Sutra Part 02 - Second part of the Sthananga Sutra with detailed commentary.",
    image: book3,
    author: "Jambu Vijayaji",
    publisher: "Shri Mahavira Jaina Vidyalaya",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Agam-03-Ang-03-Sthananga-Sutra-Part-02.pdf",
  },
  {
    id: "agam-03-ang-03-sthananga-sutra-part-03",
    title: "Agam 03 Ang 03 Sthananga Sutra Part 03",
    category: "Jain Agam",
    description: "Agam 03 Ang 03 Sthananga Sutra Part 03 - Third part completing the Sthananga Sutra series.",
    image: book4,
    author: "Jambu Vijayaji",
    publisher: "Shri Mahavira Jaina Vidyalaya",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Agam-03-Ang-03-Sthananga-Sutra-Part-03.pdf",
  },
  {
    id: "agam-06-ang-06-gnatadharma-sutra",
    title: "Agam 06 Ang 06 Gnatadharma Sutra",
    category: "Jain Agam",
    description: "Agam 06 Ang 06 Gnatadharma Sutra - A significant text dealing with knowledge and dharma in Jain philosophy.",
    image: book1,
    author: "Jambu Vijayaji",
    publisher: "Shri Mahavira Jaina Vidyalaya",
    downloadUrl: "https://siddhijambuparivar.com/wp-content/uploads/2022/11/Agam-06-Ang-06-Gnatadharma-Sutra.pdf",
  },
  {
    id: "agam-45-chulika-02-anuyogdwar-sutra-part-01",
    title: "Agam 45 Chulika 02 Anuyogdwar Sutra Part 01",
    category: "Jain Agam",
    description: "Agam 45 Chulika 02 Anuyogdwar Sutra Part 01 - First part of Anuyogdwar Sutra, dealing with interpretation methodology.",
    image: book2,
    author: "Jambu Vijayaji",
    publisher: "Shri Mahavira Jaina Vidyalaya",
    downloadUrl: "#",
  },
  {
    id: "agam-45-chulika-02-anuyogdwar-sutra-part-02",
    title: "Agam 45 Chulika 02 Anuyogdwar Sutra Part 02",
    category: "Jain Agam",
    description: "Agam 45 Chulika 02 Anuyogdwar Sutra Part 02 - Second part completing the Anuyogdwar Sutra series.",
    image: book3,
    author: "Jambu Vijayaji",
    publisher: "Shri Mahavira Jaina Vidyalaya",
    downloadUrl: "#",
  },
  {
    id: "dashvaikalik-sutra-vrutti-ane-dinag",
    title: "Dashvaikalik Sutra Vrutti Ane Dinag",
    category: "Jain Scripture",
    description: "Dashvaikalik Sutra with commentary (Vritti) and Dinaga - An important Jain canonical text with scholarly commentary.",
    image: book4,
    author: "Jambu Vijayaji",
    publisher: "Shri Mahavira Jaina Vidyalaya",
    downloadUrl: "#",
  },
  {
    id: "dvadasaram-nayachakram-part-1-tika",
    title: "Dvadasaram Nayachakram Part 1 Tika",
    category: "Jain Philosophy",
    description: "Dvadasaram Nayachakram Part 1 with Tika - Commentary on the twelve-spoked wheel of perspectives.",
    image: book1,
    author: "Jambu Vijayaji",
    downloadUrl: "#",
  },
  {
    id: "dvadasaram-nayachakram-part-2-tika",
    title: "Dvadasaram Nayachakram Part 2 Tika",
    category: "Jain Philosophy",
    description: "Dvadasaram Nayachakram Part 2 with Tika - Second part of the commentary series.",
    image: book2,
    downloadUrl: "#",
  },
  {
    id: "dvadasaram-nayachakram-part-3-tika",
    title: "Dvadasaram Nayachakram Part 3 Tika",
    category: "Jain Philosophy",
    description: "Dvadasaram Nayachakram Part 3 with Tika - Final part completing the commentary.",
    image: book3,
    downloadUrl: "#",
  },
  {
    id: "gurubhakti-gahuli-sangrah",
    title: "Gurubhakti Gahuli Sangrah",
    category: "Devotional",
    description: "Gurubhakti Gahuli Sangrah - Collection of devotional verses and hymns dedicated to spiritual teachers.",
    image: book4,
    downloadUrl: "#",
  },
  {
    id: "guruvani-1",
    title: "Guruvani 1",
    category: "Teachings",
    description: "Guruvani 1 - First volume of teachings and wisdom from Maharaj Saheb.",
    image: book1,
    downloadUrl: "#",
  },
  {
    id: "guruvani-2",
    title: "Guruvani 2",
    category: "Teachings",
    description: "Guruvani 2 - Second volume continuing the collection of spiritual teachings.",
    image: book2,
    downloadUrl: "#",
  },
  {
    id: "guruvani-3",
    title: "Guruvani 3",
    category: "Teachings",
    description: "Guruvani 3 - Third volume of profound spiritual guidance and wisdom.",
    image: book3,
    downloadUrl: "#",
  },
  {
    id: "hastilikhit-granthsuchi-part-1",
    title: "Hastilikhit Granthsuchi Part 1",
    category: "Bibliography",
    description: "Hastilikhit Granthsuchi Part 1 - Catalog of handwritten manuscripts, first volume.",
    image: book4,
    downloadUrl: "#",
  },
  {
    id: "hemchandrashabdanushasanam",
    title: "Hemchandrashabdanushasanam",
    category: "Grammar",
    description: "Hemchandrashabdanushasanam - Comprehensive treatise on Sanskrit grammar by Acharya Hemachandra.",
    image: book1,
    downloadUrl: "#",
  },
  {
    id: "siddhhemchandrashabdanushasanam",
    title: "Siddhhemchandrashabdanushasanam",
    category: "Grammar",
    description: "Siddhhemchandrashabdanushasanam - Siddha version of Hemachandra's grammar work.",
    image: book2,
    downloadUrl: "#",
  },
  {
    id: "jainagamono-itihas-bhag-1",
    title: "Jainagamono Itihas Bhag 1",
    category: "History",
    description: "Jainagamono Itihas Bhag 1 - History of Jain Agamas, first part.",
    image: book3,
    downloadUrl: "#",
  },
  {
    id: "jainagamono-itihas-bhag-2",
    title: "Jainagamono Itihas Bhag 2",
    category: "History",
    description: "Jainagamono Itihas Bhag 2 - History of Jain Agamas, second part.",
    image: book4,
    downloadUrl: "#",
  },
];
