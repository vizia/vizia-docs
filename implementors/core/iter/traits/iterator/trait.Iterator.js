(function() {var implementors = {};
implementors["vizia_core"] = [{"text":"impl&lt;'a, O, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"vizia_core/tree/struct.TreeTourIterator.html\" title=\"struct vizia_core::tree::TreeTourIterator\">TreeTourIterator</a>&lt;'a, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"struct\" href=\"vizia_core/entity/struct.Entity.html\" title=\"struct vizia_core::entity::Entity\">Entity</a>, <a class=\"enum\" href=\"vizia_core/tree/enum.TourDirection.html\" title=\"enum vizia_core::tree::TourDirection\">TourDirection</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.tuple.html\">(</a><a class=\"enum\" href=\"https://doc.rust-lang.org/1.60.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;O&gt;, <a class=\"enum\" href=\"vizia_core/tree/enum.TourStep.html\" title=\"enum vizia_core::tree::TourStep\">TourStep</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.tuple.html\">)</a>,&nbsp;</span>","synthetic":false,"types":["vizia_core::tree::tree_tour::TreeTourIterator"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"vizia_core/tree/struct.ParentIterator.html\" title=\"struct vizia_core::tree::ParentIterator\">ParentIterator</a>&lt;'a&gt;","synthetic":false,"types":["vizia_core::tree::parent_iter::ParentIterator"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"vizia_core/tree/struct.ChildIterator.html\" title=\"struct vizia_core::tree::ChildIterator\">ChildIterator</a>&lt;'a&gt;","synthetic":false,"types":["vizia_core::tree::child_iter::ChildIterator"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"vizia_core/tree/struct.TreeIterator.html\" title=\"struct vizia_core::tree::TreeIterator\">TreeIterator</a>&lt;'a&gt;","synthetic":false,"types":["vizia_core::tree::tree_iter::TreeIterator"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"vizia_core/tree/struct.TreeDepthIterator.html\" title=\"struct vizia_core::tree::TreeDepthIterator\">TreeDepthIterator</a>&lt;'a&gt;","synthetic":false,"types":["vizia_core::tree::debug_iter::TreeDepthIterator"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()