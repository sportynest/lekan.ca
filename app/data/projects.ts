import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "studybuddy",
    title: "StudyBuddy",
    shortDescription: "Versatile AI companion providing intelligent assistance across various domains, from complex problem-solving to creative tasks, with adaptive context awareness for personalized interactions.",
    fullDescription:
      "StudyBuddy is a sophisticated full-stack AI companion platform built with React and TypeScript for the frontend, utilizing Cloudflare Workers for serverless backend operations. The architecture implements a microservices design pattern with multiple AI model integrations, including OpenAI's GPT models, to provide real-time, context-aware assistance across various domains.\n\nThe technical implementation features advanced state management using React hooks and context API, with WebSocket connections for real-time communication between frontend and backend services. The platform employs a multi-tenant architecture supporting concurrent users with session management, authentication via Auth0, and data persistence using Convex database with real-time subscriptions.\n\nKey technical innovations include adaptive AI model selection algorithms that dynamically choose the most appropriate language model based on query complexity and context, intelligent conversation memory management for maintaining context across sessions, and performance optimization through CDN integration and edge computing. The system processes natural language queries through a custom preprocessing pipeline that includes tokenization, entity recognition, and semantic analysis before routing to appropriate AI services.\n\nPerformance metrics demonstrate sub-second response times for 95% of queries, with automatic scaling handling peak usage periods. The platform includes comprehensive error handling, retry mechanisms, and fallback strategies to ensure 99.9% uptime reliability across diverse use cases and global user bases.",
    image: "/Images/studybuddy.png",
    weblink: "https://studdybuddy.ca",
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis of Movie Reviews",
    shortDescription: "Advanced NLP project applying machine learning techniques to classify sentiment in movie reviews with high accuracy through sophisticated text preprocessing, feature engineering, and model optimization.",
    fullDescription:
      "This project showcases advanced Natural Language Processing capabilities through the development of a sophisticated sentiment classification system for movie reviews. By implementing comprehensive text preprocessing pipelines and advanced feature engineering techniques, the model achieves remarkable accuracy in understanding and categorizing human emotions expressed in written content.\n\nThe technical architecture leverages industry-standard libraries including scikit-learn for machine learning algorithms, NLTK for natural language processing tasks, and Pandas for efficient data manipulation. The implementation includes multiple stages: text normalization, tokenization, stop-word removal, and TF-IDF vectorization to transform raw text into meaningful numerical representations.\n\nThrough extensive experimentation with different machine learning approaches, the project demonstrates the effectiveness of Support Vector Machine models, achieving an impressive 89.9% accuracy rate. The solution incorporates both linear and RBF kernel variations, with comprehensive cross-validation and hyperparameter tuning to ensure robust performance across diverse datasets.\n\nThe project not only delivers high-accuracy sentiment classification but also provides valuable insights into feature importance, model interpretability, and the nuanced challenges of natural language understanding. By handling real-world text data with varying lengths, contexts, and writing styles, this implementation serves as a strong foundation for more complex NLP applications in industry settings.",
    image: "/images/sentiment-analysis.png",
    githubLink: "https://github.com/sportynest/setiment-analysis-model",
  },
  {
    id: "moodle-email-scraper",
    title: "Moodle Email Scraper",
    shortDescription: "Python-based web scraping tool for extracting student contact information from Moodle LMS, featuring parallel processing optimization, robust error handling, and ethical data collection practices.",
    fullDescription:
      "The Moodle Email Scraper represents a sophisticated automation solution designed to streamline educational communication processes through intelligent web scraping technology. Built with BeautifulSoup and advanced Python programming techniques, this tool efficiently navigates Moodle's complex web interfaces to extract student email addresses while maintaining the highest standards of data privacy and system integrity.\n\nThe technical implementation showcases several advanced programming concepts, including parallel processing with ThreadPoolExecutor that delivers a 50% performance improvement over sequential approaches. The scraper intelligently handles pagination, rate limiting, and dynamic content loading—common challenges in web automation that require careful engineering and robust error handling mechanisms.\n\nBeyond basic functionality, the solution incorporates several enterprise-grade features: comprehensive logging systems for monitoring and debugging, configurable rate limiting to respect server constraints, and structured JSON output for seamless data integration with other systems. The architecture includes intelligent retry mechanisms, graceful error handling, and progress tracking to ensure reliable operation even with network interruptions or system changes.\n\nThis project exemplifies the practical application of software engineering principles in solving real-world educational challenges, demonstrating how automation can enhance administrative efficiency while maintaining ethical standards and system performance. The modular design allows for easy customization and extension to other learning management systems, making it a versatile tool for educational institutions seeking to improve their communication workflows.",
    image: "/images/moodle-email-scraper.png",
    githubLink: "https://github.com/sportynest/Moodle-Email-Scrapper",
  },
  {
    id: "bible-language-model",
    title: "Bible-Based Language Model (TBC)",
    shortDescription: "Innovative research project developing a specialized language model for biblical text analysis, interpretation, and generation, combining deep learning architectures with theological scholarship.",
    fullDescription:
      "This innovative project explores the intersection of artificial intelligence and biblical scholarship, developing specialized language models for biblical text analysis and interpretation. The goal is to create AI systems that can understand, analyze, and generate contextually appropriate biblical content across multiple translations and theological contexts.\n\nCurrently in early development stages, this project focuses on building the foundational architecture and data processing capabilities needed for sophisticated biblical text understanding. The approach combines modern language model techniques with theological scholarship to ensure culturally and historically sensitive interpretations.\n\nAs a work-in-progress, this represents an ongoing exploration of how AI can enhance biblical scholarship while maintaining the reverence and nuance required for religious applications.",
    image: "/images/bible-model-project.png",
  }
];
