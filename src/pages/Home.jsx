import { Link } from "react-router-dom";

/**
 * Put /brijesh.webp (or .jpg) in /public as a fallback.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 via-base-100 to-base-100">
      {/* ===== HERO ===== */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[auto,1fr] gap-10 items-center">
            {/* Avatar */}
            <div className="avatar place-self-center lg:place-self-start">
              <div className="w-44 rounded-2xl ring ring-primary ring-offset-base-100 ring-offset-2 shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQFLf-aZWv4wJQ/profile-displayphoto-shrink_400_400/B4DZU19aIYHYAg-/0/1740367047269?e=1761177600&v=beta&t=IjJrS7hVvuuObXqY6e3JKT-uK2CgxZP6YFJvZ0gobM4"
                  alt="Brijesh Singh"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "/brijesh.webp"; // local fallback
                  }}
                />
              </div>
            </div>

            {/* Text card */}
            <div className="rounded-3xl bg-base-100/70 backdrop-blur border border-base-200 shadow-lg p-8">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Brijesh Singh
                </span>
              </h1>

              <p className="mt-4 text-lg md:text-xl opacity-80">
                Full-stack developer. I build fast, reliable apps — from AI trading
                systems to modern web UIs.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="btn btn-primary btn-lg shadow-md hover:shadow-primary/30 hover:-translate-y-0.5 transition"
                >
                  View Projects
                </Link>

                {/* THIS WAS MISSING THE CLOSING TAG */}
                <a
                  href="https://github.com/brijehssingh"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-lg hover:btn-secondary transition"
                >
                  GitHub
                </a>
              </div>

              {/* quick stats */}
              <div className="mt-6 stats bg-base-100 shadow-sm rounded-2xl w-full sm:w-auto">
                <div className="stat">
                  <div className="stat-title">Projects</div>
                  <div className="stat-value">12+</div>
                  <div className="stat-desc">React • Node • AI</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Focus</div>
                  <div className="stat-value text-secondary">Full-stack</div>
                  <div className="stat-desc">Web • Infra • ML</div>
                </div>
              </div>
            </div>
          </div>

          {/* soft separator wave */}
          <svg
            className="w-full mt-12 opacity-20"
            height="24"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22,103.59,29.86,158,24,70.36-7.61,136-31.93,206-35.52,102.17-5.4,198.12,31.3,300,38.06,98.35,6.51,191.06-18.06,288-31.91,86.39-12.28,175.12-8.33,248,6.85V0Z"
              className="fill-base-200"
            ></path>
          </svg>
        </div>
      </section>

      {/* ===== SOCIAL / CODING PROFILES ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          <span className="inline-block rounded-xl bg-base-200 px-4 py-2">
            My Coding & Social <span className="text-primary">Profiles</span>
          </span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/brijesh_07070/"
            target="_blank"
            rel="noreferrer"
            className="group card bg-base-100/70 backdrop-blur border border-base-200 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition rounded-2xl"
          >
            <div className="card-body items-center text-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode"
                className="w-12 h-12 mb-2 group-hover:scale-110 transition"
                loading="lazy"
              />
              <h3 className="card-title">LeetCode</h3>
              <p className="opacity-80">brijesh_07070</p>
            </div>
          </a>

          {/* GeeksforGeeks */}
          <a
            href="https://www.geeksforgeeks.org/user/brijesh90ts/"
            target="_blank"
            rel="noreferrer"
            className="group card bg-base-100/70 backdrop-blur border border-base-200 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition rounded-2xl"
          >
            <div className="card-body items-center text-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
                alt="GeeksforGeeks"
                className="w-12 h-12 mb-2 group-hover:scale-110 transition"
                loading="lazy"
              />
              <h3 className="card-title">GeeksforGeeks</h3>
              <p className="opacity-80">brijesh90ts</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bsingh0785/"
            target="_blank"
            rel="noreferrer"
            className="group card bg-base-100/70 backdrop-blur border border-base-200 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition rounded-2xl"
          >
            <div className="card-body items-center text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-12 h-12 mb-2 group-hover:scale-110 transition"
                loading="lazy"
              />
              <h3 className="card-title">LinkedIn</h3>
              <p className="opacity-80">bsingh0785</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
