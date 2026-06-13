import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TypingEffect from '../components/TypingEffect'
import { blogPosts, totalBlogPosts } from '../data/blogPosts'

export default function BlogPage() {
  const [showTitleTyping, setShowTitleTyping] = useState(false)

  useEffect(() => {
    setShowTitleTyping(Math.random() > 0.4)
  }, [])
  return (
    <>
      <Head>
        <title>Blog | Ye</title>
        <meta
          name="description"
          content="Where I try to express the weirdness that is the combination of the of the odd experiences, thoughts, and feelings that make up my life. Expect a mix of tech musings, personal reflections, and random tangents."
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 pb-16">
          <section className="section">
            <div className="container-wide">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h1 className="section-title text-2xl sm:text-3xl">
                    {showTitleTyping ? <TypingEffect text="Blog Lab" speed={60} loop={false} /> : 'Blog Lab'}
                  </h1>
                  <p className="mt-2 text-sm sm:text-base text-[var(--text)]/80">
                    The space between eureka and rambling — odd experiences, thoughts, and feelings that make up my life... or something like that.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm bg-[var(--text)]/8 text-[var(--text)]">
                    {totalBlogPosts} posts
                  </span>
                  <Link
                    href="/"
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm border border-[var(--accent)]/30 text-[var(--text)] hover:bg-[var(--accent)]/8 transition"
                  >
                    Back home
                  </Link>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {blogPosts.map((post) => {
                  return (
                    <article
                      key={post.slug}
                      className="rounded-xl border-2 border-[var(--text)]/18 bg-white p-4 sm:p-5 shadow-[0_10px_24px_rgba(0,0,0,0.04)]"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h2 className="text-lg sm:text-xl font-bold text-[var(--text)] leading-snug">
                            {post.title}
                          </h2>
                          <p className="mt-1 text-xs sm:text-sm text-[var(--text)]/70">
                            {post.publishedOn} · {post.mood}
                          </p>
                        </div>
                      </div>

                      <p className="mt-3 text-sm text-[var(--text)]/85 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-[var(--text)]/6 text-[var(--text)] rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="mt-4 inline-flex items-center rounded-full px-4 py-2 text-xs sm:text-sm bg-[var(--text)] text-white hover:opacity-90 transition font-semibold"
                      >
                        Open full post
                      </Link>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}