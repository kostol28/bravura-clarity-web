import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Calendar, Clock, ArrowRight, TrendingUp, Database, BarChart3 } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Future of Data Analytics: Trends to Watch in 2024",
    excerpt: "Discover the emerging trends that are reshaping the data analytics landscape and how businesses can prepare for the next wave of innovation.",
    author: "Sarah Mitchell",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "🔮",
  };

  const blogPosts = [
    {
      title: "5 Common Data Integration Challenges and How to Solve Them",
      excerpt: "Learn about the most frequent obstacles businesses face when integrating data from multiple sources and practical solutions to overcome them.",
      author: "David Chen",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Technical Guide",
      icon: <Database className="h-8 w-8 text-primary" />,
    },
    {
      title: "Building Your First Real-Time Dashboard: A Step-by-Step Guide",
      excerpt: "Create compelling, real-time dashboards that provide instant insights into your business performance with this comprehensive tutorial.",
      author: "Maria Rodriguez",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Tutorial",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
    },
    {
      title: "ROI of Data Analytics: Measuring the Impact on Your Business",
      excerpt: "Discover how to calculate and demonstrate the return on investment of your data analytics initiatives to stakeholders.",
      author: "James Thompson",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Business Strategy",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
    },
    {
      title: "Data Privacy and Compliance: What Every Business Needs to Know",
      excerpt: "Navigate the complex landscape of data privacy regulations and ensure your business remains compliant while leveraging data effectively.",
      author: "Sarah Mitchell",
      date: "February 22, 2024",
      readTime: "9 min read",
      category: "Compliance",
      icon: <Database className="h-8 w-8 text-primary" />,
    },
    {
      title: "Machine Learning for Small Businesses: Getting Started",
      excerpt: "Demystify machine learning and discover how small and medium businesses can start leveraging AI for competitive advantage.",
      author: "David Chen",
      date: "February 15, 2024",
      readTime: "8 min read",
      category: "Machine Learning",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
    },
    {
      title: "The Art of Data Storytelling: Making Your Data Speak",
      excerpt: "Transform complex data insights into compelling narratives that drive action and engagement across your organization.",
      author: "Maria Rodriguez",
      date: "February 8, 2024",
      readTime: "5 min read",
      category: "Data Visualization",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
    },
  ];

  const categories = [
    "All Posts",
    "Industry Insights",
    "Technical Guide",
    "Tutorial",
    "Business Strategy",
    "Compliance",
    "Machine Learning",
    "Data Visualization",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-subtle">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">Blog & Resources</Badge>
            
            <h1 className="heading-hero text-foreground">
              Insights and expertise from
              <span className="bg-gradient-hero bg-clip-text text-transparent"> data professionals</span>
            </h1>
            
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest trends, best practices, and thought leadership 
              in data analytics, business intelligence, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 lg:py-32">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <Badge variant="secondary" className="w-fit mx-auto">Featured Article</Badge>
              <h2 className="heading-section">Latest from our team</h2>
            </div>

            <Card className="card-elegant hover:border-primary/20">
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-lg">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">By {featuredPost.author}</p>
                      <Button className="btn-hero">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-64 h-64 bg-gradient-hero rounded-2xl flex items-center justify-center">
                      <span className="text-8xl">{featuredPost.image}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="heading-section">Recent articles</h2>
              <p className="text-large text-muted-foreground">
                Explore our collection of articles, tutorials, and insights to help you make the most of your data.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "btn-hero" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="card-elegant hover:border-primary/20 h-full">
                  <CardContent className="space-y-6 h-full flex flex-col">
                    <div className="p-4 bg-primary/10 rounded-xl w-fit">
                      {post.icon}
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <div className="flex items-center space-x-4">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                      
                      <h3 className="text-xl font-semibold leading-tight line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="space-y-4 pt-4 border-t border-border">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>By {post.author}</span>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" className="btn-hero">
                Load More Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8 text-primary-foreground">
            <h2 className="heading-section">Stay informed</h2>
            <p className="text-large opacity-90">
              Subscribe to our newsletter and get the latest insights, tutorials, and industry updates delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white text-foreground placeholder:text-muted-foreground"
              />
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-sm opacity-75">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;