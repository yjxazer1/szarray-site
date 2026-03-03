const news = [
  { date: "2026-03-01", title: "亚锐发布新一代在线CT检测方案" },
  { date: "2026-02-18", title: "锂电产线智能检测效率优化实践" },
  { date: "2026-01-30", title: "AI识别在X-RAY检测中的落地经验" },
];

export default function NewsPage() {
  return (
    <main className="space-y-8 pb-16">
      <section>
        <h1 className="text-3xl font-bold">新闻中心</h1>
        <p className="mt-3 text-slate-400">了解亚锐在智能检测领域的最新动态与实践。</p>
      </section>

      <section className="space-y-3">
        {news.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-xs text-slate-400">{item.date}</p>
            <h2 className="mt-1 text-lg font-medium text-cyan-200">{item.title}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}
