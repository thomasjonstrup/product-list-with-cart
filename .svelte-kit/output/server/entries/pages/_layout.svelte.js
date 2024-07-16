import { d as slot } from "../../chunks/index2.js";
function default_slot($$props) {
  var children = $$props.$$slots?.default;
  if (children === true) {
    return $$props.children;
  } else {
    return children;
  }
}
function _layout($$payload, $$props) {
  $$payload.out += `<main><!---->`;
  slot($$payload, default_slot($$props), {});
  $$payload.out += `<!----></main> <footer><div class="text-center text-xs">Challenge by <a class="text-red" href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. Coded by <a class="text-red" href="https://github.com/thomasjonstrup">Thomas Jonstrup</a>.</div></footer> <title>Frontend Mentor | Product list with cart</title>`;
}
export {
  _layout as default
};
