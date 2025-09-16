export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About Brijesh
        </span>
      </h1>

      {/* Bio card */}
      <div className="rounded-3xl bg-base-100/80 backdrop-blur border border-base-200 shadow-xl p-6 md:p-8 mb-8">
        <p className="text-lg opacity-90">
          I’m <strong>Brijesh</strong>, a <strong>B.Tech 4th-year</strong> student and full-stack developer.
          I build production-ready web apps with the <strong>MERN stack</strong> and write efficient,
          readable code in <strong>C++</strong>. I practice <strong>DSA</strong> regularly (LeetCode/GFG)
          and love turning ideas into fast, user-friendly products.
        </p>
      </div>

      {/* Skills grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* C++ */}
        <div className="card bg-base-100 border border-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title">C++ (Core + DSA)</h2>
            <ul className="list-disc ml-5 space-y-2 text-sm opacity-90">
              <li>STL: vector, map/unordered_map, set, priority_queue, algorithms</li>
              <li>OOP: classes, inheritance, templates, RAII, smart pointers</li>
              <li>Patterns: two pointers, sliding window, binary search, DP, graphs</li>
              <li>Debugging & Perf: complexity, gdb, sanitizers</li>
            </ul>
          </div>
        </div>

        {/* MERN */}
        <div className="card bg-base-100 border border-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title">MERN Stack</h2>
            <ul className="list-disc ml-5 space-y-2 text-sm opacity-90">
              <li>React + Router, Hooks, API calls, Tailwind + DaisyUI</li>
              <li>Node + Express: REST APIs, validation, errors, uploads</li>
              <li>MongoDB + Mongoose: schema, indexes, aggregation</li>
              <li>Auth & Security: JWT, cookies, CORS, Helmet, rate limit</li>
              <li>Realtime: Socket.io (chat, presence)</li>
            </ul>
          </div>
        </div>

        {/* DSA */}
        <div className="card bg-base-100 border border-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title">DSA Practice</h2>
            <ul className="list-disc ml-5 space-y-2 text-sm opacity-90">
              <li>Routine: brute → optimize → edge cases → test</li>
              <li>Core topics: arrays/strings, DP, graphs, trees/tries</li>
              <li>Profiles: LeetCode & GeeksforGeeks (tracking progress)</li>
              <li>Goal: clean, modular, testable solutions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 card bg-base-100 border border-base-200 shadow">
        <div className="card-body items-center text-center">
          <h3 className="card-title">Let’s collaborate</h3>
          <p className="opacity-80">
            I’m open to internships, freelance, and project collaborations.
          </p>
          <div className="card-actions">
            <a href="/resume.pdf" className="btn btn-primary">Download Resume</a>
            <a href="mailto:brijeshkumar4705r@gmail.com" className="btn btn-outline">Email Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
