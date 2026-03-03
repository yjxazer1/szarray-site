export default function ContactPage() {
  return (
    <main className="space-y-8 pb-16">
      <section>
        <h1 className="text-3xl font-bold">联系我们</h1>
        <p className="mt-3 text-slate-400">欢迎联系亚锐团队获取演示、选型建议与报价支持。</p>
      </section>

      <section className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-slate-200 md:grid-cols-2">
        <div>
          <p className="text-sm text-slate-400">公司名称</p>
          <p className="mt-1 font-medium">深圳市亚锐智能科技有限公司</p>
        </div>
        <div>
          <p className="text-sm text-slate-400">联系电话</p>
          <p className="mt-1 font-medium">86-755-82722836</p>
        </div>
        <div>
          <p className="text-sm text-slate-400">邮箱</p>
          <p className="mt-1 font-medium">Sales@szarray.com.cn</p>
        </div>
        <div>
          <p className="text-sm text-slate-400">联系人</p>
          <p className="mt-1 font-medium">Robert</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-sm text-slate-400">地址</p>
          <p className="mt-1 font-medium">深圳市福田区沙头街道天安社区泰然六路泰然苍松大厦五层北座501-3</p>
        </div>
      </section>
    </main>
  );
}
