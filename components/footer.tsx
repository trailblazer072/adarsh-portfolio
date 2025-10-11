"use client"

export default function Footer() {
  return (
    <div className="px-6 md:px-10 lg:px-16 py-10 border-t border-(--color-border) bg-(--color-card)/30 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Adarsh Raghuwanshi. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:opacity-80">
            Back to top
          </a>
          
        </div>
      </div>
    </div>
  )
}
