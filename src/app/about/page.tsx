export default function AboutPage() {
  return (
    <main className="space-y-8 pb-16">
      <section>
        <h1 className="text-3xl font-bold">关于亚锐</h1>
        <p className="mt-3 text-slate-300">
          深圳市亚锐智能科技有限公司成立于 2015 年，专注锂电新能源领域 CT & X-RAY 检测技术与设备研发制造。
        </p>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
        <h2 className="text-xl font-semibold text-cyan-200">我们的方向</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
          <li>持续深耕 X 射线成像、图像处理、AI 算法三大技术能力</li>
          <li>推动设备向更高速度、更小体积、更优成本演进</li>
          <li>助力制造业实现在线全检与自动识别，提升品质与安全性</li>
        </ul>
      </section>
    </main>
  );
}
