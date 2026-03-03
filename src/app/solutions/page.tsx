const solutions = [
  {
    title: "锂电电芯缺陷检测",
    desc: "针对气孔、裂纹、异物等内部缺陷进行高精度识别，支持在线全检与质量追溯。",
  },
  {
    title: "模组/Pack 结构一致性检测",
    desc: "覆盖关键结构尺寸与装配状态分析，辅助提升产品一致性与安全性。",
  },
  {
    title: "产线智能判定与分流",
    desc: "结合 AI 算法实现自动分级、异常预警与工艺反馈，降低人工复检压力。",
  },
];

export default function SolutionsPage() {
  return (
    <main className="space-y-8 pb-16">
      <section>
        <h1 className="text-3xl font-bold">解决方案</h1>
        <p className="mt-3 text-slate-400">面向锂电新能源制造场景的 CT & X-RAY 全流程检测方案。</p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {solutions.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold text-cyan-200">{item.title}</h2>
            <p className="mt-3 text-slate-300">{item.desc}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
