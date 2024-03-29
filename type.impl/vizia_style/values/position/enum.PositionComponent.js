(function() {var type_impls = {
"vizia":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PositionComponent%3CS%3E\" class=\"impl\"><a href=\"#impl-PositionComponent%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; PositionComponent&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"vizia/style/enum.LengthOrPercentage.html\" title=\"enum vizia::style::LengthOrPercentage\">LengthOrPercentage</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.to_length_or_percentage\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">to_length_or_percentage</a>(&amp;self) -&gt; <a class=\"enum\" href=\"vizia/style/enum.LengthOrPercentage.html\" title=\"enum vizia::style::LengthOrPercentage\">LengthOrPercentage</a></h4></section></div></details>",0,"vizia::style::HorizontalPosition","vizia::style::VerticalPosition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVerticalPositionKeyword%3E-for-PositionComponent%3CVerticalPositionKeyword%3E\" class=\"impl\"><a href=\"#impl-From%3CVerticalPositionKeyword%3E-for-PositionComponent%3CVerticalPositionKeyword%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"vizia/style/enum.VerticalPositionKeyword.html\" title=\"enum vizia::style::VerticalPositionKeyword\">VerticalPositionKeyword</a>&gt; for PositionComponent&lt;<a class=\"enum\" href=\"vizia/style/enum.VerticalPositionKeyword.html\" title=\"enum vizia::style::VerticalPositionKeyword\">VerticalPositionKeyword</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(\n    value: <a class=\"enum\" href=\"vizia/style/enum.VerticalPositionKeyword.html\" title=\"enum vizia::style::VerticalPositionKeyword\">VerticalPositionKeyword</a>\n) -&gt; PositionComponent&lt;<a class=\"enum\" href=\"vizia/style/enum.VerticalPositionKeyword.html\" title=\"enum vizia::style::VerticalPositionKeyword\">VerticalPositionKeyword</a>&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<VerticalPositionKeyword>","vizia::style::VerticalPosition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CHorizontalPositionKeyword%3E-for-PositionComponent%3CHorizontalPositionKeyword%3E\" class=\"impl\"><a href=\"#impl-From%3CHorizontalPositionKeyword%3E-for-PositionComponent%3CHorizontalPositionKeyword%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"vizia/style/enum.HorizontalPositionKeyword.html\" title=\"enum vizia::style::HorizontalPositionKeyword\">HorizontalPositionKeyword</a>&gt; for PositionComponent&lt;<a class=\"enum\" href=\"vizia/style/enum.HorizontalPositionKeyword.html\" title=\"enum vizia::style::HorizontalPositionKeyword\">HorizontalPositionKeyword</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(\n    value: <a class=\"enum\" href=\"vizia/style/enum.HorizontalPositionKeyword.html\" title=\"enum vizia::style::HorizontalPositionKeyword\">HorizontalPositionKeyword</a>\n) -&gt; PositionComponent&lt;<a class=\"enum\" href=\"vizia/style/enum.HorizontalPositionKeyword.html\" title=\"enum vizia::style::HorizontalPositionKeyword\">HorizontalPositionKeyword</a>&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<HorizontalPositionKeyword>","vizia::style::HorizontalPosition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-PositionComponent%3CS%3E\" class=\"impl\"><a href=\"#impl-Debug-for-PositionComponent%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for PositionComponent&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"vizia/style/enum.LengthOrPercentage.html\" title=\"enum vizia::style::LengthOrPercentage\">LengthOrPercentage</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","vizia::style::HorizontalPosition","vizia::style::VerticalPosition"],["<section id=\"impl-StructuralPartialEq-for-PositionComponent%3CS%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-PositionComponent%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for PositionComponent&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"vizia/style/enum.LengthOrPercentage.html\" title=\"enum vizia::style::LengthOrPercentage\">LengthOrPercentage</a>&gt;,</div></h3></section>","StructuralPartialEq","vizia::style::HorizontalPosition","vizia::style::VerticalPosition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-PositionComponent%3CS%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-PositionComponent%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for PositionComponent&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"vizia/style/enum.LengthOrPercentage.html\" title=\"enum vizia::style::LengthOrPercentage\">LengthOrPercentage</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;PositionComponent&lt;S&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","vizia::style::HorizontalPosition","vizia::style::VerticalPosition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-PositionComponent%3CS%3E\" class=\"impl\"><a href=\"#impl-Clone-for-PositionComponent%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for PositionComponent&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"vizia/style/enum.LengthOrPercentage.html\" title=\"enum vizia::style::LengthOrPercentage\">LengthOrPercentage</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; PositionComponent&lt;S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","vizia::style::HorizontalPosition","vizia::style::VerticalPosition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Parse%3C'i%3E-for-PositionComponent%3CS%3E\" class=\"impl\"><a href=\"#impl-Parse%3C'i%3E-for-PositionComponent%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'i, S&gt; Parse&lt;'i&gt; for PositionComponent&lt;S&gt;<div class=\"where\">where\n    S: Parse&lt;'i&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"vizia/style/enum.LengthOrPercentage.html\" title=\"enum vizia::style::LengthOrPercentage\">LengthOrPercentage</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.parse\" class=\"method trait-impl\"><a href=\"#method.parse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">parse</a>&lt;'t&gt;(\n    input: &amp;mut Parser&lt;'i, 't&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;PositionComponent&lt;S&gt;, ParseError&lt;'i, CustomParseError&lt;'i&gt;&gt;&gt;</h4></section></div></details>","Parse<'i>","vizia::style::HorizontalPosition","vizia::style::VerticalPosition"]],
"vizia_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PositionComponent%3CS%3E\" class=\"impl\"><a href=\"#impl-PositionComponent%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; PositionComponent&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"vizia_core/style/enum.LengthOrPercentage.html\" title=\"enum vizia_core::style::LengthOrPercentage\">LengthOrPercentage</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.to_length_or_percentage\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">to_length_or_percentage</a>(&amp;self) -&gt; <a class=\"enum\" href=\"vizia_core/style/enum.LengthOrPercentage.html\" title=\"enum vizia_core::style::LengthOrPercentage\">LengthOrPercentage</a></h4></section></div></details>",0,"vizia_core::style::HorizontalPosition","vizia_core::style::VerticalPosition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVerticalPositionKeyword%3E-for-PositionComponent%3CVerticalPositionKeyword%3E\" class=\"impl\"><a href=\"#impl-From%3CVerticalPositionKeyword%3E-for-PositionComponent%3CVerticalPositionKeyword%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"vizia_core/style/enum.VerticalPositionKeyword.html\" title=\"enum vizia_core::style::VerticalPositionKeyword\">VerticalPositionKeyword</a>&gt; for PositionComponent&lt;<a class=\"enum\" href=\"vizia_core/style/enum.VerticalPositionKeyword.html\" title=\"enum vizia_core::style::VerticalPositionKeyword\">VerticalPositionKeyword</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(\n    value: <a class=\"enum\" href=\"vizia_core/style/enum.VerticalPositionKeyword.html\" title=\"enum vizia_core::style::VerticalPositionKeyword\">VerticalPositionKeyword</a>\n) -&gt; PositionComponent&lt;<a class=\"enum\" href=\"vizia_core/style/enum.VerticalPositionKeyword.html\" title=\"enum vizia_core::style::VerticalPositionKeyword\">VerticalPositionKeyword</a>&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<VerticalPositionKeyword>","vizia_core::style::VerticalPosition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CHorizontalPositionKeyword%3E-for-PositionComponent%3CHorizontalPositionKeyword%3E\" class=\"impl\"><a href=\"#impl-From%3CHorizontalPositionKeyword%3E-for-PositionComponent%3CHorizontalPositionKeyword%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"vizia_core/style/enum.HorizontalPositionKeyword.html\" title=\"enum vizia_core::style::HorizontalPositionKeyword\">HorizontalPositionKeyword</a>&gt; for PositionComponent&lt;<a class=\"enum\" href=\"vizia_core/style/enum.HorizontalPositionKeyword.html\" title=\"enum vizia_core::style::HorizontalPositionKeyword\">HorizontalPositionKeyword</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(\n    value: <a class=\"enum\" href=\"vizia_core/style/enum.HorizontalPositionKeyword.html\" title=\"enum vizia_core::style::HorizontalPositionKeyword\">HorizontalPositionKeyword</a>\n) -&gt; PositionComponent&lt;<a class=\"enum\" href=\"vizia_core/style/enum.HorizontalPositionKeyword.html\" title=\"enum vizia_core::style::HorizontalPositionKeyword\">HorizontalPositionKeyword</a>&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<HorizontalPositionKeyword>","vizia_core::style::HorizontalPosition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-PositionComponent%3CS%3E\" class=\"impl\"><a href=\"#impl-Debug-for-PositionComponent%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for PositionComponent&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"vizia_core/style/enum.LengthOrPercentage.html\" title=\"enum vizia_core::style::LengthOrPercentage\">LengthOrPercentage</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","vizia_core::style::HorizontalPosition","vizia_core::style::VerticalPosition"],["<section id=\"impl-StructuralPartialEq-for-PositionComponent%3CS%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-PositionComponent%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for PositionComponent&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"vizia_core/style/enum.LengthOrPercentage.html\" title=\"enum vizia_core::style::LengthOrPercentage\">LengthOrPercentage</a>&gt;,</div></h3></section>","StructuralPartialEq","vizia_core::style::HorizontalPosition","vizia_core::style::VerticalPosition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-PositionComponent%3CS%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-PositionComponent%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for PositionComponent&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"vizia_core/style/enum.LengthOrPercentage.html\" title=\"enum vizia_core::style::LengthOrPercentage\">LengthOrPercentage</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;PositionComponent&lt;S&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","vizia_core::style::HorizontalPosition","vizia_core::style::VerticalPosition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-PositionComponent%3CS%3E\" class=\"impl\"><a href=\"#impl-Clone-for-PositionComponent%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for PositionComponent&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"vizia_core/style/enum.LengthOrPercentage.html\" title=\"enum vizia_core::style::LengthOrPercentage\">LengthOrPercentage</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; PositionComponent&lt;S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","vizia_core::style::HorizontalPosition","vizia_core::style::VerticalPosition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Parse%3C'i%3E-for-PositionComponent%3CS%3E\" class=\"impl\"><a href=\"#impl-Parse%3C'i%3E-for-PositionComponent%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'i, S&gt; Parse&lt;'i&gt; for PositionComponent&lt;S&gt;<div class=\"where\">where\n    S: Parse&lt;'i&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"vizia_core/style/enum.LengthOrPercentage.html\" title=\"enum vizia_core::style::LengthOrPercentage\">LengthOrPercentage</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.parse\" class=\"method trait-impl\"><a href=\"#method.parse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">parse</a>&lt;'t&gt;(\n    input: &amp;mut Parser&lt;'i, 't&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;PositionComponent&lt;S&gt;, ParseError&lt;'i, CustomParseError&lt;'i&gt;&gt;&gt;</h4></section></div></details>","Parse<'i>","vizia_core::style::HorizontalPosition","vizia_core::style::VerticalPosition"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()