import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, BookOpen, Phone } from 'lucide-react'
import Post from '@/models/Post';
import dbConnect from '@/lib/dbConnect';

// This would typically come from a CMS or database
function calculateReadingTime(content) {
  if (!content) return 0;
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return `${Math.ceil(words / wordsPerMinute)} min read`;
}

 async function singleBlog(slug){ 
    await dbConnect(); 
    
    // Find the post by slug and ensure it's published
    const post = await Post.findOne({ 
      slug, 
      status: 'published' 
    }).lean();
    
    if (!post) {
      return JSON.parse(JSON.stringify('Blog post not found')) 
    }

    // Get related posts (same keywords, exclude current post)
    const relatedPosts = await Post.find({
      _id: { $ne: post._id },
      status: 'published',
      keywords: { $in: post.keywords || [] }
    })
    .select('title slug metaDescription categories featuredImage createdAt')
    .limit(3)
    .sort({ createdAt: -1 })
    .lean();

    const response = {
      success: true,
      data: {
        id: post._id,
        title: post.title,
        slug: post.slug,
        content: post.content,
        metaTitle: post.metaTitle,
        metaDescription: post.metaDescription,
        canonical: post.canonical,
        keywords: post.keywords || [],
        featuredImage: post.featuredImage,
        publishedAt: post.createdAt,
        updatedAt: post.updatedAt,
        categories: post.categories,
        readingTime: calculateReadingTime(post.content),
        wordCount: post.content ? post.content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0
      },
      related: relatedPosts.map(relatedPost => ({
        id: relatedPost._id,
        title: relatedPost.title,
        slug: relatedPost.slug,
        metaDescription: relatedPost.metaDescription,
        featuredImage: relatedPost.featuredImage,
        categories: relatedPost.categories,
        publishedAt: relatedPost.createdAt
      })),
      meta: {
        timestamp: new Date().toISOString()
      }
    };

    return JSON.parse(JSON.stringify(response));
 
 } 

 async function getPostsByCategory(category, excludeId) {
  await dbConnect()
  const posts = await Post.find({
    status: "published",
    categories: category,          // match category
    _id: { $ne: excludeId }
  })
    .sort({ createdAt: -1 })    
    .limit(3)
    .lean()
  
  return JSON.parse(JSON.stringify(posts))
}



export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await singleBlog(slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found - Dr. R M Singh',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.data.metaTitle} - Dr. R M Singh Blog`,
    description: post.data.metaDescription,
    keywords: post.data.keywords.join(', ') + ', sexual health blog, Dr R M Singh',
    alternates: {
      canonical: post.canonical
    },
    openGraph: {
      title: post.data.metaTitle,
      description: post.data.metaDescription,
      url: '/' + post.data.slug,
      images: [post.data.featuredImage?.url],
      type: 'article',
      publishedTime: post.data.publishedAt,
      authors: 'Dr. R M Singh'
    },
    twitter: {
      card: 'summary_large_image',
      title: post.data.metaTitle,
      description: post.data.metaDescription,
      images: [post.data.featuredImage?.url]
    }
  }
}

const BlogPostPage = async ({ params }) => {

  const { slug } = await params
  const post = await singleBlog(slug)
  const getByCategory = await getPostsByCategory(post.data.categories?.[0], post.data.id)
  
  console.log(getByCategory)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link href="/" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }
 

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96">
        <Image
          src={post.data.featuredImage?.url || '/default.jpg'}
          alt={post.data.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        
        {/* Back Button */}
        <Link 
          href="/"
          className="absolute top-6 left-6 bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200"
        >
          <ArrowLeft size={16} />
          <span>Back to Blog</span>
        </Link>

        {/* Category Badge */}
        <div className="absolute top-6 right-6">
          <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.data.categories?.[0]}
          </span>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              {/* Article Header */}
              <header className="mb-8">
                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>Dr. R M Singh</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{new Date(post.data.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>{calculateReadingTime(post.data.content)}</span>
                  </div>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif leading-tight">
                  {post.data.title}
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  {post.data.metaDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {post.data.keywords.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </header>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: post.data.content }}
              />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Share2 size={20} className="text-gray-400" />
                    <span className="text-gray-600 font-medium">Share this article:</span>
                  </div>
                  <div className="flex space-x-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                      Facebook
                    </button>
                    <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                      Twitter
                    </button>
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">Dr</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Dr. R M Singh</h4>
                    <p className="text-gray-600 text-sm mb-3">MBBS, MD - Dermatology, Venereology & Leprosy</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Dr. R M Singh is a leading sexologist in Kanpur with over 24 years of experience in sexual medicine. 
                      He has helped thousands of patients overcome sexual health challenges with compassionate, 
                      evidence-based care.
                    </p>
                    {/* <Link href="/about" className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-2 inline-block">
                      Learn more about Dr. Singh →
                    </Link> */}
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8"> 

              {/* Quick Consultation */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3">Need Personal Advice?</h3>
                <p className="text-primary-100 text-sm mb-4">
                  This article provides general information. For personalized treatment, consult Dr. R M Singh.
                </p>
                <div className="space-y-3">
                  <a href="tel:+919936959955" className="btn-accent w-full text-center flex items-center justify-center space-x-2">
                    <Phone size={16} />
                    <span>Call Now</span>
                  </a> 
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {post.related.map((relatedPost, index) => (
                    <Link 
                      key={index}
                      href={`/${relatedPost.slug}`}
                      className="block group"
                    >
                      <div className="flex space-x-3">
                        <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={relatedPost.featuredImage?.url || '/default.jpg'}
                            alt={relatedPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary-600 line-clamp-2 leading-tight">
                            {relatedPost.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <Link href="/" className="block mt-4 text-primary-600 hover:text-primary-700 text-sm font-medium">
                  View All Articles →
                </Link>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Stay Updated</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest sexual health tips and articles delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg font-medium transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Comments & Discussion</h3>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-gray-600 mb-4">
                Have questions about this article? We'd love to hear from you, but please remember that comments are public.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                For private medical questions, please book a confidential consultation with Dr. R M Singh.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Link href="/contact" className="btn-primary">
                  Book Private Consultation
                </Link> */}
                <button className="btn-secondary">
                  Leave Public Comment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* More from this category */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
              More Articles on {post.category}
            </h3>
            <p className="text-gray-600">
              Explore other articles in this category for comprehensive information
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getByCategory.map((article, index) => (
              <Link 
                key={index}
                href={`/blog/${article.slug}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={article.featuredImage?.[0] || '/default.jpg'}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2 text-sm text-gray-500">
                    <Clock size={14} />
                    <span>{calculateReadingTime(article.content)}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h4>
                  <p className="text-gray-600 text-sm line-clamp-2">{article.metaDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostPage