// src/components/ProjectCard.jsx
export default function ProjectCard({ p }) {
  const isExternal = /^https?:\/\//i.test(p.link);

  return (
    <div className="
      card bg-base-100 shadow-sm transition duration-300
      hover:shadow-xl hover:-translate-y-0.5 border border-base-200
      hover:border-primary/40 hover:ring hover:ring-primary/10
    ">
      {/* Optional: cover image if you add p.image later */}
      {p.image && (
        <figure className="px-4 pt-4">
          <img src={p.image} alt={p.title} className="rounded-xl object-cover w-full h-40" loading="lazy" />
        </figure>
      )}

      <div className="card-body">
        <h3 className="card-title leading-snug">{p.title}</h3>
        <p className="opacity-80">{p.desc}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {p.tech?.map(t => (
            <span key={t} className="badge badge-outline">{t}</span>
          ))}
        </div>

        <div className="card-actions justify-end mt-4">
          {isExternal ? (
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-secondary hover:scale-[1.02] transition"
              title="Open live site"
            >
              Live
              <svg viewBox="0 0 24 24" className="w-4 h-4 ml-1" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  d="M14 3h7m0 0v7m0-7L10 14"/>
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  d="M5 7v11a2 2 0 0 0 2 2h11"/>
              </svg>
            </a>
          ) : (
            <a href={p.link} className="btn btn-sm btn-secondary hover:scale-[1.02] transition">Details</a>
          )}

          {p.repoUrl && (
            <a
              href={p.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm hover:scale-[1.02] transition"
              title="View source code"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
