(function() {
    var type_impls = Object.fromEntries([["vizia",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Data-for-u16\" class=\"impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/data.rs.html#30\">source</a><a href=\"#impl-Data-for-u16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"vizia/binding/trait.Data.html\" title=\"trait vizia::binding::Data\">Data</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u16.html\">u16</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.same\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/data.rs.html#30\">source</a><a href=\"#method.same\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia/binding/trait.Data.html#tymethod.same\" class=\"fn\">same</a>(&amp;self, other: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u16.html\">u16</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></div></details>","Data","vizia::vg::GlyphId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Res%3Cu16%3E-for-u16\" class=\"impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#101\">source</a><a href=\"#impl-Res%3Cu16%3E-for-u16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"vizia/binding/trait.Res.html\" title=\"trait vizia::binding::Res\">Res</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u16.html\">u16</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u16.html\">u16</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.set_or_bind\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#48-51\">source</a><a href=\"#method.set_or_bind\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia/binding/trait.Res.html#method.set_or_bind\" class=\"fn\">set_or_bind</a>&lt;F&gt;(self, cx: &amp;mut <a class=\"struct\" href=\"vizia/context/struct.Context.html\" title=\"struct vizia::context::Context\">Context</a>, entity: Entity, closure: F)<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    F: 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(&amp;mut <a class=\"struct\" href=\"vizia/context/struct.Context.html\" title=\"struct vizia::context::Context\">Context</a>, Self),</div></h4></section></div></details>","Res<u16>","vizia::vg::GlyphId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ResGet%3Cu16%3E-for-u16\" class=\"impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#101\">source</a><a href=\"#impl-ResGet%3Cu16%3E-for-u16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"vizia/binding/trait.ResGet.html\" title=\"trait vizia::binding::ResGet\">ResGet</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u16.html\">u16</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u16.html\">u16</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.get_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#101\">source</a><a href=\"#method.get_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia/binding/trait.ResGet.html#tymethod.get_ref\" class=\"fn\">get_ref</a>&lt;'a&gt;(&amp;self, _: &amp;impl <a class=\"trait\" href=\"vizia/context/trait.DataContext.html\" title=\"trait vizia::context::DataContext\">DataContext</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"vizia/binding/enum.LensValue.html\" title=\"enum vizia::binding::LensValue\">LensValue</a>&lt;'_, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u16.html\">u16</a>&gt;&gt;</h4></section><section id=\"method.get\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#101\">source</a><a href=\"#method.get\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia/binding/trait.ResGet.html#tymethod.get\" class=\"fn\">get</a>(&amp;self, _: &amp;impl <a class=\"trait\" href=\"vizia/context/trait.DataContext.html\" title=\"trait vizia::context::DataContext\">DataContext</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u16.html\">u16</a></h4></section></div></details>","ResGet<u16>","vizia::vg::GlyphId"]]],["vizia_core",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Data-for-u16\" class=\"impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/data.rs.html#30\">source</a><a href=\"#impl-Data-for-u16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"vizia_core/binding/trait.Data.html\" title=\"trait vizia_core::binding::Data\">Data</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u16.html\">u16</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.same\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/data.rs.html#30\">source</a><a href=\"#method.same\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia_core/binding/trait.Data.html#tymethod.same\" class=\"fn\">same</a>(&amp;self, other: &amp;Self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></div></details>","Data","vizia_core::vg::GlyphId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Res%3Cu16%3E-for-u16\" class=\"impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#101\">source</a><a href=\"#impl-Res%3Cu16%3E-for-u16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"vizia_core/binding/trait.Res.html\" title=\"trait vizia_core::binding::Res\">Res</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u16.html\">u16</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u16.html\">u16</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.set_or_bind\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#48-56\">source</a><a href=\"#method.set_or_bind\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia_core/binding/trait.Res.html#method.set_or_bind\" class=\"fn\">set_or_bind</a>&lt;F&gt;(self, cx: &amp;mut <a class=\"struct\" href=\"vizia_core/context/struct.Context.html\" title=\"struct vizia_core::context::Context\">Context</a>, entity: Entity, closure: F)<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    F: 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(&amp;mut <a class=\"struct\" href=\"vizia_core/context/struct.Context.html\" title=\"struct vizia_core::context::Context\">Context</a>, Self),</div></h4></section></div></details>","Res<u16>","vizia_core::vg::GlyphId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ResGet%3Cu16%3E-for-u16\" class=\"impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#101\">source</a><a href=\"#impl-ResGet%3Cu16%3E-for-u16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"vizia_core/binding/trait.ResGet.html\" title=\"trait vizia_core::binding::ResGet\">ResGet</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u16.html\">u16</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u16.html\">u16</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.get_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#101\">source</a><a href=\"#method.get_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia_core/binding/trait.ResGet.html#tymethod.get_ref\" class=\"fn\">get_ref</a>&lt;'a&gt;(&amp;self, _: &amp;impl <a class=\"trait\" href=\"vizia_core/context/trait.DataContext.html\" title=\"trait vizia_core::context::DataContext\">DataContext</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"vizia_core/binding/enum.LensValue.html\" title=\"enum vizia_core::binding::LensValue\">LensValue</a>&lt;'_, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u16.html\">u16</a>&gt;&gt;</h4></section><section id=\"method.get\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#101\">source</a><a href=\"#method.get\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia_core/binding/trait.ResGet.html#tymethod.get\" class=\"fn\">get</a>(&amp;self, _: &amp;impl <a class=\"trait\" href=\"vizia_core/context/trait.DataContext.html\" title=\"trait vizia_core::context::DataContext\">DataContext</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.u16.html\">u16</a></h4></section></div></details>","ResGet<u16>","vizia_core::vg::GlyphId"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[5082,5112]}