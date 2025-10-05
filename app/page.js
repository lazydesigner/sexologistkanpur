import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react'
import Post from '@/models/Post';
import dbConnect from '@/lib/dbConnect';
 
 
export const dynamic = "force-dynamic"

export const metadata = {
  title: 'Sexual Health Blog - Expert Articles by Dr. R M Singh | Kanpur',
  description: 'Read expert articles on sexual health, erectile dysfunction, premature ejaculation, and wellness tips by Dr. R M Singh, best sexologist in Kanpur.',
  keywords: 'sexual health blog, erectile dysfunction articles, premature ejaculation tips, sexual wellness, Dr R M Singh blog'
}

async function getPosts() {
  await dbConnect()
  const posts = await Post.find({ status: "published" })
    .sort({ createdAt: -1 })
    .limit(1)
    .lean()
  return JSON.parse(JSON.stringify(posts))
}

async function getAllPosts() {
  await dbConnect()
  const posts = await Post.find({ status: "published" })
    .sort({ createdAt: -1 }) 
    .lean()
  return JSON.parse(JSON.stringify(posts))
}

const calculateReadTime = (content) => {
    if (!content) return '5 min read'
    const words = content.split(/\s+/).length
    const minutes = Math.ceil(words / 200)
    return `${minutes} min read`
  }

const BlogPage = async () => {

  const featuredPost = await getPosts() 
  const blogPosts = await getAllPosts()


  const categories = [
    { name: 'All Posts', count: 15, active: true },
    { name: 'Erectile Dysfunction', count: 5 },
    { name: 'Premature Ejaculation', count: 4 },
    { name: 'Low Libido', count: 3 },
    { name: 'Sexual Wellness', count: 3 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-serif">Sexual Health Blog</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Expert insights, tips, and guidance on sexual health from Dr. R M Singh, 
              Kanpur's leading sexologist with 24+ years of experience
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
              <div className="relative h-64 lg:h-80">
                <Image
                  src={featuredPost[0]?.featuredImage?.url || '/default.jpg'}
                  alt={featuredPost[0]?.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center space-x-4 mb-3 text-sm">
                    <span className="bg-primary-500 px-2 py-1 rounded text-xs">{featuredPost[0]?.categories?.[0]}</span>
                    <span className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(featuredPost[0]?.createdAt).toLocaleDateString()}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{calculateReadTime(featuredPost[0]?.content)}</span>
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2 font-serif">{featuredPost[0]?.title}</h2>
                  <p className="text-gray-200">{featuredPost[0]?.metaDescription}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="text-gray-400" size={16} />
                    <span className="text-gray-600 text-sm">Dr. R M Singh</span>
                  </div>
                  <Link 
                    href={`/${featuredPost[0]?.slug}`}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post?.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={post?.featuredImage?.url || '/default.jpg'}
                      alt={post?.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary-500 text-white px-2 py-1 rounded text-xs font-medium">
                        {post?.categories?.[0]}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post?.createdAt).toLocaleDateString()}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{calculateReadTime(post?.content)}</span>
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 font-serif leading-tight">
                      {post?.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {post?.metaDescription}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="text-gray-400" size={14} />
                        <span className="text-gray-500 text-sm">Dr. R M Singh</span>
                      </div>
                      <Link 
                        href={`/${post?.slug}`}
                        className="text-primary-500 hover:text-primary-700 font-medium text-sm flex items-center space-x-1"
                      >
                        <span>Read More</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="btn-primary">Load More Articles</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button 
                        className={`w-full text-left flex items-center justify-between p-2 rounded-lg transition-colors ${
                          category.active 
                            ? 'bg-primary-50 text-primary-600 font-medium' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Erectile Dysfunction', 'Premature Ejaculation', 'Sexual Health', 'Treatment', 'Wellness', 'Libido', 'Relationships', 'Mental Health'].map((tag) => (
                    <button
                      key={tag}
                      className="bg-gray-100 hover:bg-primary-50 text-gray-600 hover:text-primary-600 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3">Health Newsletter</h3>
                <p className="text-primary-100 text-sm mb-4">
                  Get expert sexual health tips and latest articles delivered to your inbox
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-400"
                  />
                  <button className="w-full bg-accent-500 hover:bg-accent-600 text-white py-2 rounded-lg font-medium transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post?.id} className="flex space-x-3">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={post?.featuredImage?.url || '/default.jpg'}
                          alt={post?.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link 
                          href={`/${post?.slug}`}
                          className="text-sm font-medium text-gray-900 hover:text-primary-600 line-clamp-2 leading-tight"
                        >
                          {post?.title}
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(post?.publishedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Need Personal Consultation?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Reading articles is great, but personalized advice is better. Book a confidential consultation today.
                </p> 
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">Still Have Questions?</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Our blog provides valuable information, but every situation is unique. 
            Get personalized advice from Dr. R M Singh for your specific concerns. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919936959955" className="btn-accent">
              Call Now: +91-99369-59955
            </a> 
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage