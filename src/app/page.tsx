import Link from "next/link";

const products = [
  "在线CT",
  "离线标准CT",
  "线边多功能CT（兼具X-RAY功能）",
  "在线X-RAY",
];

export default function Home() {
  return (
    <main className="space-y-16 pb-16">
      <section className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-10 shadow-2xl shadow-cyan-500/10">
        <p className="mb-4 inline-block rounded-full border border-cyan-300/30 px-3 py-1 text-xs text-cyan-200">
          ARRAY · 智能检测
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          让 CT & X-RAY 检测进入
          <span className="block text-cyan-300">“在线全检 + AI识别”时代</span>
        </h1>
        <p className="mt-6 max-w-3xl text-slate-300">
          深圳市亚锐智能科技有限公司专注锂电新能源领域 CT/X-RAY 检测设备研发与制造，
          以高速、高质量、可落地的检测方案助力制造业升级。
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/products" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-900 transition hover:bg-cyan-300">
            查看产品方案
          </Link>
          <Link href="/contact" className="rounded-xl border border-slate-600 px-5 py-3 font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300">
            获取演示与报价
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">核心产品</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {products.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-lg font-medium text-cyan-200">{item}</h3>
              <p className="mt-2 text-sm text-slate-400">面向产线与实验室的高精度检测场景，支持灵活集成与质量追溯。</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          ["X射线成像", "更清晰、更稳定的成像能力，兼顾速度与质量。"],
          ["图像处理", "多维图像增强与缺陷定位，提高检测一致性。"],
          ["AI算法", "支持自动识别与分类，降低人工复检成本。"],
        ].map(([title, desc]) => (
          <article key={title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-semibold text-cyan-200">{title}</h3>
            <p className="mt-2 text-sm text-slate-400">{desc}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
