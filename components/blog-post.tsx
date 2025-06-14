"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { User, Calendar, Tag, MessageCircle } from "lucide-react"

const blogPost = {
  id: 1,
  title: "The Most Successful Engineering Contractor",
  content: `Lorem ipsum dolor sit amet, consectetur is the adipiscing elit, sed do eiusmod tempor theres incididunt ut labore et. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
  quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  image: "/placeholder.svg?height=400&width=600&text=Modern+Industrial+Building",
  author: "Dustrial",
  date: "Jan 10, 2019",
  category: "Industry",
  comments: 3,
  tags: ["Bio", "Car", "Daily", "Food", "Health"],
}

const comments = [
  {
    id: 1,
    author: "Jon Doe",
    date: "December 31, 2018 at 5:18 am",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    avatar: "/placeholder.svg?height=50&width=50&text=JD",
  },
  {
    id: 2,
    author: "Admin",
    date: "December 31, 2018 at 5:20 am",
    content:
      "The face of the moon was in shadow.The spectacle before us was indeed sublime.All that they dummy equipment and instruments are alive.",
    avatar: "/placeholder.svg?height=50&width=50&text=AD",
  },
  {
    id: 3,
    author: "Hendry Cavill",
    date: "December 31, 2018 at 5:25 am",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatar: "/placeholder.svg?height=50&width=50&text=HC",
  },
]

export default function BlogPost() {
  const [commentForm, setCommentForm] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
  })

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Comment submitted:", commentForm)
    // Reset form
    setCommentForm({ comment: "", name: "", email: "", website: "" })
  }

  return (
    <article className="bg-white">
      {/* Featured Image */}
      <div className="relative h-96 mb-8 overflow-hidden rounded-lg">
        <Image src={blogPost.image || "/placeholder.svg"} alt={blogPost.title} fill className="object-cover" />
      </div>

      {/* Post Meta */}
      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
        <div className="flex items-center">
          <User size={16} className="mr-2" />
          <span>{blogPost.author}</span>
        </div>
        <div className="flex items-center">
          <Calendar size={16} className="mr-2" />
          <span>{blogPost.date}</span>
        </div>
        <div className="flex items-center">
          <Tag size={16} className="mr-2" />
          <span>{blogPost.category}</span>
        </div>
        <div className="flex items-center">
          <MessageCircle size={16} className="mr-2" />
          <span>{blogPost.comments} Comments</span>
        </div>
      </div>

      {/* Post Content */}
      <div className="prose max-w-none mb-8">
        <div className="text-gray-600 leading-relaxed space-y-4">
          {blogPost.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-orange-500 text-white p-6 my-8 rounded-lg">
          <p className="text-lg italic leading-relaxed">{blogPost.quote}</p>
        </div>

        <div className="text-gray-600 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-8 pb-8 border-b border-gray-200">
        <div className="flex items-center flex-wrap gap-2">
          <span className="text-gray-700 font-medium">Tags:</span>
          {blogPost.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded hover:bg-orange-500 hover:text-white transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mb-12 pb-8 border-b border-gray-200">
        <Link href="/blog/previous" className="text-orange-500 hover:text-orange-600 transition-colors">
          ‹ Previous Post
        </Link>
      </div>

      {/* Comments Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">{blogPost.comments} Comments</h3>
        <div className="space-y-8">
          {comments.map((comment) => (
            <div key={comment.id} className="flex space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src={comment.avatar || "/placeholder.svg"}
                  alt={comment.author}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-gray-900">{comment.author}</h4>
                  <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">Reply</button>
                </div>
                <p className="text-gray-500 text-sm mb-3">{comment.date}</p>
                <p className="text-gray-600 leading-relaxed">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comment Form */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Leave a Reply</h3>
        <form onSubmit={handleCommentSubmit} className="space-y-6">
          <textarea
            placeholder="Comment"
            value={commentForm.comment}
            onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
            required
          ></textarea>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name *"
              value={commentForm.name}
              onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
            <input
              type="email"
              placeholder="Email *"
              value={commentForm.email}
              onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <input
            type="url"
            placeholder="Website"
            value={commentForm.website}
            onChange={(e) => setCommentForm({ ...commentForm, website: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />

          <button
            type="submit"
            className="bg-orange-500 text-white px-8 py-3 font-medium hover:bg-orange-600 transition-colors rounded-sm"
          >
            POST COMMENT
          </button>
        </form>
      </div>
    </article>
  )
}
