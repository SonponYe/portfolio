import { useMemo, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { blogPosts, totalBlogPosts } from '../data/blogPosts'

export default function BlogPage() {
  const defaultOpen = useMemo(() => {
    const firstSlug = blogPosts[0]?.slug
    return firstSlug ? { [firstSlug]: true } : {}
  }, [])

  const [openPosts, setOpenPosts] = useState(defaultOpen)

  const togglePost = (postSlug) => {
    setOpenPosts((previous) => ({
      ...previous,
      [postSlug]: !previous[postSlug]
    }))
  }

  return (
    <>
      <Head>
        <title>Blog | Ye</title>
        <meta
          name="description"
          content="A personal blog space for experiments, stories, and weird ideas."
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 pb-16">
          <section className="section">
            <div className="container-wide">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h1 className="section-title text-2xl sm:text-3xl">Blog Lab</h1>
                  <p className="mt-2 text-sm sm:text-base text-[var(--text)]/80">
                    Your corner for experiments, strange takes, and creative chaos.
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

              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {blogPosts.map((post) => {
                  const isOpen = Boolean(openPosts[post.slug])

                  return (
                    <article
                      key={post.slug}
                      className="rounded-xl border border-[var(--text)]/10 bg-white p-4 sm:p-5"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h2 className="text-lg sm:text-xl font-semibold text-[var(--text)] leading-snug">
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

                      <button
                        type="button"
                        onClick={() => togglePost(post.slug)}
                        aria-expanded={isOpen}
                        className="mt-4 inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm border border-[var(--accent)]/30 text-[var(--text)] hover:bg-[var(--accent)]/8 transition"
                      >
                        {isOpen ? 'Hide post' : 'Read more'}
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-[var(--text)]/10 space-y-3">
                              {post.body.map((paragraph) => (
                                <p
                                  key={paragraph}
                                  className="text-sm text-[var(--text)]/85 leading-relaxed"
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
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