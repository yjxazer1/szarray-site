const productList = [
  {
    name: "在线CT",
    desc: "面向高节拍产线的在线全检能力，适合新能源电池关键工序检测。",
  },
  {
    name: "离线标准CT",
    desc: "适用于实验室与质量中心，支持高精度内部结构分析。",
  },
  {
    name: "线边多功能CT（兼具X-RAY功能）",
    desc: "融合线边检测与快速判定，满足多场景切换需求。",
  },
  {
    name: "在线X-RAY",
    desc: "聚焦产线实时筛检，兼顾效率与稳定性。",
  },
];

export default function ProductsPage() {
  return (
    <main className="space-y-8 pb-16">
      <section>
        <h1 className="text-3xl font-bold">产品中心</h1>
        <p className="mt-3 text-slate-400">围绕锂电新能源检测场景，提供 CT 与 X-RAY 一体化解决方案。</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {productList.map((item) => (
          <article key={item.name} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold text-cyan-200">{item.name}</h2>
            <p className="mt-3 text-slate-300">{item.desc}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
