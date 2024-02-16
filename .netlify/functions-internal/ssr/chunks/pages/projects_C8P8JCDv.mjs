/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute, j as renderComponent } from '../astro_Blw5FDdN.mjs';
import { $ as $$Index, a as $$Layout } from './index_Ch-lJCNf.mjs';

const $$Astro$1 = createAstro();
const $$PostRow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostRow;
  const { title, src, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="w-full text-neutral-100 hover:text-teal-400 ease-in-out transition-colors border-b-neutral-400 border-dashed border-b-1 my-2"> <a class="font-bold text-xl decoration-none flex justify-between"${addAttribute(url, "href")} target="_blank"> ${renderComponent($$result, "Card", $$Index, {}, { "default": ($$result2) => renderTemplate` <div class="flex flex-col gap-2"> <p class="inline-block whitespace-nowrap"> ${title} </p> <img${addAttribute(src, "src")}${addAttribute(title, "alt")}> </div> ` })} </a> </li>`;
}, "C:/Users/Walter Santacruz/Documents/Proyects/wsantacruz/src/components/Project/PostRow.astro", void 0);

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const posts = [
    { title: "Oncoprevec", url: "https://oncoprevec.com/", src: "oncoprevecFoto.png" },
    { title: "Competencias Digitales", url: "https://competenciasdigitales.cti.espol.edu.ec/", src: "espol.png" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Walter Santacruz - Frontend Developer" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-screen h-screen flex flex-col justify-start items-start max-w-3xl mx-auto p-8"> <a href="/" class="text-white bg-neutral-950 hover:bg-neutral-800 px-4 py-2 mb-8 border-1 border-solid border-neutral-600 rounded-lg">Back</a> <h1 class="text-4xl font-bold mb-4 text-neutral-100">Proyectos</h1> <ul class="w-full"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostRow", $$PostRow, { "title": post.title, "url": post.url, "src": post.src })}`)} </ul> </main> ` })}`;
}, "C:/Users/Walter Santacruz/Documents/Proyects/wsantacruz/src/pages/projects.astro", void 0);

const $$file = "C:/Users/Walter Santacruz/Documents/Proyects/wsantacruz/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
