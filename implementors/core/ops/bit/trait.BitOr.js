(function() {var implementors = {
"vizia_core":[["impl&lt;L1, L2:&nbsp;<a class=\"trait\" href=\"vizia_core/state/trait.Lens.html\" title=\"trait vizia_core::state::Lens\">Lens</a>&lt;Target = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.1/std/primitive.bool.html\">bool</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;L2&gt; for <a class=\"struct\" href=\"vizia_core/state/struct.Wrapper.html\" title=\"struct vizia_core::state::Wrapper\">Wrapper</a>&lt;L1&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L1: <a class=\"trait\" href=\"vizia_core/state/trait.Lens.html\" title=\"trait vizia_core::state::Lens\">Lens</a>&lt;Source = L2::<a class=\"associatedtype\" href=\"vizia_core/state/trait.Lens.html#associatedtype.Source\" title=\"type vizia_core::state::Lens::Source\">Source</a>&gt; + <a class=\"trait\" href=\"vizia_core/state/trait.Lens.html\" title=\"trait vizia_core::state::Lens\">Lens</a>&lt;Target = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.1/std/primitive.bool.html\">bool</a>&gt;,</span>"],["impl&lt;L1, L2, L3:&nbsp;<a class=\"trait\" href=\"vizia_core/state/trait.Lens.html\" title=\"trait vizia_core::state::Lens\">Lens</a>&lt;Target = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.1/std/primitive.bool.html\">bool</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;L3&gt; for <a class=\"struct\" href=\"vizia_core/state/struct.OrLens.html\" title=\"struct vizia_core::state::OrLens\">OrLens</a>&lt;L1, L2&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Self: <a class=\"trait\" href=\"vizia_core/state/trait.Lens.html\" title=\"trait vizia_core::state::Lens\">Lens</a>&lt;Target = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.1/std/primitive.bool.html\">bool</a>&gt; + <a class=\"trait\" href=\"vizia_core/state/trait.Lens.html\" title=\"trait vizia_core::state::Lens\">Lens</a>&lt;Source = L3::<a class=\"associatedtype\" href=\"vizia_core/state/trait.Lens.html#associatedtype.Source\" title=\"type vizia_core::state::Lens::Source\">Source</a>&gt;,</span>"],["impl&lt;A, L1, L2:&nbsp;<a class=\"trait\" href=\"vizia_core/state/trait.Lens.html\" title=\"trait vizia_core::state::Lens\">Lens</a>&lt;Target = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.1/std/primitive.bool.html\">bool</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;L2&gt; for <a class=\"struct\" href=\"vizia_core/state/struct.Then.html\" title=\"struct vizia_core::state::Then\">Then</a>&lt;A, L1&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"vizia_core/state/trait.Lens.html\" title=\"trait vizia_core::state::Lens\">Lens</a>&lt;Source = L2::<a class=\"associatedtype\" href=\"vizia_core/state/trait.Lens.html#associatedtype.Source\" title=\"type vizia_core::state::Lens::Source\">Source</a>&gt; + <a class=\"trait\" href=\"vizia_core/state/trait.Lens.html\" title=\"trait vizia_core::state::Lens\">Lens</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L1: <a class=\"trait\" href=\"vizia_core/state/trait.Lens.html\" title=\"trait vizia_core::state::Lens\">Lens</a>&lt;Source = A::<a class=\"associatedtype\" href=\"vizia_core/state/trait.Lens.html#associatedtype.Target\" title=\"type vizia_core::state::Lens::Target\">Target</a>&gt; + <a class=\"trait\" href=\"vizia_core/state/trait.Lens.html\" title=\"trait vizia_core::state::Lens\">Lens</a>&lt;Target = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.1/std/primitive.bool.html\">bool</a>&gt;,</span>"],["impl&lt;G:&nbsp;'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.1/std/primitive.reference.html\">&amp;</a>I) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.1/std/primitive.bool.html\">bool</a>, I, L2:&nbsp;<a class=\"trait\" href=\"vizia_core/state/trait.Lens.html\" title=\"trait vizia_core::state::Lens\">Lens</a>&lt;Target = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.1/std/primitive.bool.html\">bool</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;L2&gt; for <a class=\"struct\" href=\"vizia_core/state/struct.Map.html\" title=\"struct vizia_core::state::Map\">Map</a>&lt;G, I, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.1/std/primitive.bool.html\">bool</a>&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"vizia_core/state/trait.Lens.html\" title=\"trait vizia_core::state::Lens\">Lens</a>&lt;Source = L2::<a class=\"associatedtype\" href=\"vizia_core/state/trait.Lens.html#associatedtype.Source\" title=\"type vizia_core::state::Lens::Source\">Source</a>&gt; + 'static,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"vizia_core/style/struct.PseudoClass.html\" title=\"struct vizia_core::style::PseudoClass\">PseudoClass</a>&gt; for <a class=\"struct\" href=\"vizia_core/style/struct.PseudoClass.html\" title=\"struct vizia_core::style::PseudoClass\">PseudoClass</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"vizia_core/style/struct.Abilities.html\" title=\"struct vizia_core::style::Abilities\">Abilities</a>&gt; for <a class=\"struct\" href=\"vizia_core/style/struct.Abilities.html\" title=\"struct vizia_core::style::Abilities\">Abilities</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/ops/bit/trait.BitOr.html\" title=\"trait core::ops::bit::BitOr\">BitOr</a>&lt;<a class=\"struct\" href=\"vizia_core/style/struct.SystemFlags.html\" title=\"struct vizia_core::style::SystemFlags\">SystemFlags</a>&gt; for <a class=\"struct\" href=\"vizia_core/style/struct.SystemFlags.html\" title=\"struct vizia_core::style::SystemFlags\">SystemFlags</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()