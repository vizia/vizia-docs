(function() {
    var type_impls = Object.fromEntries([["vizia",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Data-for-f32\" class=\"impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/data.rs.html#88\">source</a><a href=\"#impl-Data-for-f32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"vizia/binding/trait.Data.html\" title=\"trait vizia::binding::Data\">Data</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.same\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/data.rs.html#89\">source</a><a href=\"#method.same\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia/binding/trait.Data.html#tymethod.same\" class=\"fn\">same</a>(&amp;self, other: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></div></details>","Data","vizia::vg::scalar"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Res%3Cf32%3E-for-f32\" class=\"impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#108\">source</a><a href=\"#impl-Res%3Cf32%3E-for-f32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"vizia/binding/trait.Res.html\" title=\"trait vizia::binding::Res\">Res</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.set_or_bind\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#48-51\">source</a><a href=\"#method.set_or_bind\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia/binding/trait.Res.html#method.set_or_bind\" class=\"fn\">set_or_bind</a>&lt;F&gt;(self, cx: &amp;mut <a class=\"struct\" href=\"vizia/context/struct.Context.html\" title=\"struct vizia::context::Context\">Context</a>, entity: Entity, closure: F)<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    F: 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(&amp;mut <a class=\"struct\" href=\"vizia/context/struct.Context.html\" title=\"struct vizia::context::Context\">Context</a>, Self),</div></h4></section></div></details>","Res<f32>","vizia::vg::scalar"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ResGet%3Cf32%3E-for-f32\" class=\"impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#108\">source</a><a href=\"#impl-ResGet%3Cf32%3E-for-f32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"vizia/binding/trait.ResGet.html\" title=\"trait vizia::binding::ResGet\">ResGet</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.get_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#108\">source</a><a href=\"#method.get_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia/binding/trait.ResGet.html#tymethod.get_ref\" class=\"fn\">get_ref</a>&lt;'a&gt;(&amp;self, _: &amp;impl <a class=\"trait\" href=\"vizia/context/trait.DataContext.html\" title=\"trait vizia::context::DataContext\">DataContext</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"vizia/binding/enum.LensValue.html\" title=\"enum vizia::binding::LensValue\">LensValue</a>&lt;'_, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a>&gt;&gt;</h4></section><section id=\"method.get\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#108\">source</a><a href=\"#method.get\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia/binding/trait.ResGet.html#tymethod.get\" class=\"fn\">get</a>(&amp;self, _: &amp;impl <a class=\"trait\" href=\"vizia/context/trait.DataContext.html\" title=\"trait vizia::context::DataContext\">DataContext</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a></h4></section></div></details>","ResGet<f32>","vizia::vg::scalar"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Scalar-for-f32\" class=\"impl\"><a href=\"#impl-Scalar-for-f32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"vizia/vg/trait.Scalar.html\" title=\"trait vizia::vg::Scalar\">Scalar</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a></h3></section></summary><div class=\"impl-items\"><section id=\"associatedconstant.ZERO\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.ZERO\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"vizia/vg/trait.Scalar.html#associatedconstant.ZERO\" class=\"constant\">ZERO</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a> = 0f32</h4></section><section id=\"associatedconstant.NEARLY_ZERO\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.NEARLY_ZERO\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"vizia/vg/trait.Scalar.html#associatedconstant.NEARLY_ZERO\" class=\"constant\">NEARLY_ZERO</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a> = 2.44140625E-4f32</h4></section><section id=\"associatedconstant.ONE\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.ONE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"vizia/vg/trait.Scalar.html#associatedconstant.ONE\" class=\"constant\">ONE</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a> = 1f32</h4></section><section id=\"associatedconstant.HALF\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.HALF\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"vizia/vg/trait.Scalar.html#associatedconstant.HALF\" class=\"constant\">HALF</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a> = 0.5f32</h4></section><section id=\"method.nearly_equal\" class=\"method trait-impl\"><a href=\"#method.nearly_equal\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia/vg/trait.Scalar.html#tymethod.nearly_equal\" class=\"fn\">nearly_equal</a>(x: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a>, y: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a>, tolerance: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a>&gt;&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.nearly_zero\" class=\"method trait-impl\"><a href=\"#method.nearly_zero\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia/vg/trait.Scalar.html#tymethod.nearly_zero\" class=\"fn\">nearly_zero</a>(&amp;self, tolerance: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a>&gt;&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></div></details>","Scalar","vizia::vg::scalar"]]],["vizia_core",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Data-for-f32\" class=\"impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/data.rs.html#88-92\">source</a><a href=\"#impl-Data-for-f32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"vizia_core/binding/trait.Data.html\" title=\"trait vizia_core::binding::Data\">Data</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.same\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/data.rs.html#89-91\">source</a><a href=\"#method.same\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia_core/binding/trait.Data.html#tymethod.same\" class=\"fn\">same</a>(&amp;self, other: &amp;Self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></div></details>","Data","vizia_core::vg::scalar"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Res%3Cf32%3E-for-f32\" class=\"impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#108\">source</a><a href=\"#impl-Res%3Cf32%3E-for-f32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"vizia_core/binding/trait.Res.html\" title=\"trait vizia_core::binding::Res\">Res</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.set_or_bind\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#48-56\">source</a><a href=\"#method.set_or_bind\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia_core/binding/trait.Res.html#method.set_or_bind\" class=\"fn\">set_or_bind</a>&lt;F&gt;(self, cx: &amp;mut <a class=\"struct\" href=\"vizia_core/context/struct.Context.html\" title=\"struct vizia_core::context::Context\">Context</a>, entity: Entity, closure: F)<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    F: 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(&amp;mut <a class=\"struct\" href=\"vizia_core/context/struct.Context.html\" title=\"struct vizia_core::context::Context\">Context</a>, Self),</div></h4></section></div></details>","Res<f32>","vizia_core::vg::scalar"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ResGet%3Cf32%3E-for-f32\" class=\"impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#108\">source</a><a href=\"#impl-ResGet%3Cf32%3E-for-f32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"vizia_core/binding/trait.ResGet.html\" title=\"trait vizia_core::binding::ResGet\">ResGet</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.get_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#108\">source</a><a href=\"#method.get_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia_core/binding/trait.ResGet.html#tymethod.get_ref\" class=\"fn\">get_ref</a>&lt;'a&gt;(&amp;self, _: &amp;impl <a class=\"trait\" href=\"vizia_core/context/trait.DataContext.html\" title=\"trait vizia_core::context::DataContext\">DataContext</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"vizia_core/binding/enum.LensValue.html\" title=\"enum vizia_core::binding::LensValue\">LensValue</a>&lt;'_, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a>&gt;&gt;</h4></section><section id=\"method.get\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/vizia_core/binding/res.rs.html#108\">source</a><a href=\"#method.get\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia_core/binding/trait.ResGet.html#tymethod.get\" class=\"fn\">get</a>(&amp;self, _: &amp;impl <a class=\"trait\" href=\"vizia_core/context/trait.DataContext.html\" title=\"trait vizia_core::context::DataContext\">DataContext</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a></h4></section></div></details>","ResGet<f32>","vizia_core::vg::scalar"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Scalar-for-f32\" class=\"impl\"><a href=\"#impl-Scalar-for-f32\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"vizia_core/vg/trait.Scalar.html\" title=\"trait vizia_core::vg::Scalar\">Scalar</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a></h3></section></summary><div class=\"impl-items\"><section id=\"associatedconstant.ZERO\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.ZERO\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"vizia_core/vg/trait.Scalar.html#associatedconstant.ZERO\" class=\"constant\">ZERO</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a> = 0f32</h4></section><section id=\"associatedconstant.NEARLY_ZERO\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.NEARLY_ZERO\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"vizia_core/vg/trait.Scalar.html#associatedconstant.NEARLY_ZERO\" class=\"constant\">NEARLY_ZERO</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a> = 2.44140625E-4f32</h4></section><section id=\"associatedconstant.ONE\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.ONE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"vizia_core/vg/trait.Scalar.html#associatedconstant.ONE\" class=\"constant\">ONE</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a> = 1f32</h4></section><section id=\"associatedconstant.HALF\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.HALF\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"vizia_core/vg/trait.Scalar.html#associatedconstant.HALF\" class=\"constant\">HALF</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a> = 0.5f32</h4></section><section id=\"method.nearly_equal\" class=\"method trait-impl\"><a href=\"#method.nearly_equal\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia_core/vg/trait.Scalar.html#tymethod.nearly_equal\" class=\"fn\">nearly_equal</a>(x: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a>, y: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a>, tolerance: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a>&gt;&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.nearly_zero\" class=\"method trait-impl\"><a href=\"#method.nearly_zero\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"vizia_core/vg/trait.Scalar.html#tymethod.nearly_zero\" class=\"fn\">nearly_zero</a>(&amp;self, tolerance: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f32.html\">f32</a>&gt;&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></div></details>","Scalar","vizia_core::vg::scalar"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[8858,8939]}