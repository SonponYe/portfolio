import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import TypingEffect from '../../components/TypingEffect'
import { blogPosts } from '../../data/blogPosts'

export default function BlogPostPage({ post }) {
  const [showTitleTyping, setShowTitleTyping] = useState(false)

  useEffect(() => {
    setShowTitleTyping(Math.random() > 0.4)
  }, [post?.slug])
  if (!post) {
    return (
      <>
        <Head>
          <title>Post Not Found | Ye</title>
        </Head>

        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 section">
            <div className="container-wide">
              <div className="rounded-2xl border-2 border-[var(--text)]/20 bg-white p-6 sm:p-8">
                <h1 className="text-2xl font-bold text-[var(--text)]">Post not found</h1>
                <p className="mt-3 text-[var(--text)]/80">That blog post does not exist anymore or the link is outdated.</p>
                <Link
                  href="/blog"
                  className="mt-5 inline-flex items-center rounded-full px-4 py-2 text-sm bg-[var(--text)] text-white"
                >
                  Back to blog
                </Link>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title} | Blog | Ye</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 section pb-16">
          <div className="container-wide">
            <div className="mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center rounded-full px-3 py-1.5 text-xs sm:text-sm border border-[var(--accent)]/35 text-[var(--text)] hover:bg-[var(--accent)]/8 transition"
              >
                Back to all posts
              </Link>
            </div>

            <article className="rounded-2xl border-2 border-[var(--text)]/20 bg-white p-5 sm:p-7 lg:p-9 shadow-[0_16px_36px_rgba(0,0,0,0.06)]">
              <header className="border-b-2 border-[var(--text)]/15 pb-5">
                <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text)] leading-tight">
                  {showTitleTyping ? <TypingEffect text={post.title} speed={35} loop={false} /> : post.title}
                </h1>
                <p className="mt-3 text-sm sm:text-base text-[var(--text)]/80">
                  {post.publishedOn} • {post.mood}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs sm:text-sm px-2.5 py-1.5 bg-[var(--text)]/7 text-[var(--text)] rounded font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </header>

              <div className="mt-6 space-y-4">
                {post.body?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm sm:text-base text-[var(--text)]/88 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export function getStaticPaths() {
  return {
    paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false
  }
}

export function getStaticProps({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug) || null

  return {
    props: {
      post
    }
  }
}
